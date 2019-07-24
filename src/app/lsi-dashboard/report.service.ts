import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { REPORTS_MOCK, ReportDateTime, Reports } from './reports.mock';
import { map } from 'rxjs/operators';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor() {}

  fetchPlaces(): Observable<Set<string>> {
    return of(REPORTS_MOCK).pipe(
      map(reports => {
        return new Set(reports.map(report => report.place));
      })
    );
  }

  fetchReports(place: string, startDate: ReportDateTime, endDate: ReportDateTime): Observable<Reports[]> {
    return of(REPORTS_MOCK).pipe(
      map(reports => {
        const filteredReportsByPlace = reports.filter(report => {
          const startBeforeExp = moment(startDate.date).isBefore(report.exportDate);
          const endAfterExp = moment(endDate.date).isAfter(report.exportDate);
          return (report.place === place && startBeforeExp && endAfterExp);
        });
        return filteredReportsByPlace;
      }),
    );
  }
}
