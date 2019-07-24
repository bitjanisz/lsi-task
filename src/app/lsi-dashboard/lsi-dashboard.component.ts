import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ReportDateTime } from './reports.mock';
import { ReportService } from './report.service';
import { Observable, Subject } from 'rxjs';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import * as moment from 'moment';
import { takeUntil } from 'rxjs/operators';


const DateOrderValidator: ValidatorFn = (fg: FormGroup) => {
  const start = moment(fg.get('startDate').value);
  const end = moment(fg.get('endDate').value);

  return start && end && start.isBefore(end)
    ? null : { dateOrder: true };
};

@Component({
  selector: 'app-lsi-dashboard',
  templateUrl: './lsi-dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LsiDashboardComponent implements OnInit, OnDestroy {
  private readonly destroySub: Subject<void> = new Subject();

  displayedColumns: string[] = ['name', 'date', 'time', 'userName', 'place'];
  dataSource;

  reportsForm: FormGroup;

  places$: Observable<Set<string>>;

  constructor(private readonly reportService: ReportService,
              private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.places$ = this.reportService.fetchPlaces();

    this.reportsForm = this.fb.group({
      places: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    }, { validator: DateOrderValidator });

    this.placesValueChange$
      .pipe(takeUntil(this.destroySub))
      .subscribe(() => {
        this.reportsForm.controls.startDate.reset();
        this.reportsForm.controls.endDate.reset();
      });
  }

  onSubmit() {
    this.reportService.fetchReports(this.placeValue, this.startDateValue, this.endDateValue)
      .pipe(takeUntil(this.destroySub))
      .subscribe(reports => {
        this.dataSource = reports;
      });
  }

  get placesValueChange$() {
    return this.reportsForm.controls.places.valueChanges;
  }

  get placeValue() {
    return this.reportsForm.controls.places.value;
  }

  get startDateValue(): ReportDateTime {
    return this.getProperDateFormat(this.reportsForm.controls.startDate.value);
  }

  get endDateValue(): ReportDateTime {
    return this.getProperDateFormat(this.reportsForm.controls.endDate.value);
  }

  private getProperDateFormat(date: string): ReportDateTime {
    const value = moment(date);
    return { date: value.format('YYYY-MM-DD'), time: value.format('HH:mm') };
  }

  ngOnDestroy(): void {
    this.destroySub.next();
    this.destroySub.complete();
  }
}
