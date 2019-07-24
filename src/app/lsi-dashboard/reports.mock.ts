export interface ReportDateTime {
  date: string;
  time: string;
}

export interface Reports {
  id: number;
  name: string;
  exportDate: string;
  time: string;
  userName: string;
  place: string;
}

export const REPORTS_MOCK: Reports[] = [
  { id: 1, name: 'Test 1', exportDate: '2019-07-01', time: '5:20', userName: 'User 1', place: 'place 1' },
  { id: 1, name: 'Test 1_1', exportDate: '2019-07-05', time: '10:20', userName: 'User 1_1', place: 'place 1' },
  { id: 1, name: 'Test 1_2', exportDate: '2019-07-10', time: '11:22', userName: 'User 1_2', place: 'place 1' },
  { id: 1, name: 'Test 1_3', exportDate: '2019-07-15', time: '14:22', userName: 'User 1_3', place: 'place 1' },
  { id: 1, name: 'Test 2', exportDate: 'test', time: 'H', userName: 'User 2', place: 'place 2' },
  { id: 1, name: 'Test 3', exportDate: 'test', time: 'H', userName: 'User 3', place: 'place 3' },
  { id: 1, name: 'Test 4', exportDate: 'test', time: 'H', userName: 'User 4', place: 'place 4' },
  { id: 1, name: 'Test 5', exportDate: 'test', time: 'H', userName: 'User 5', place: 'place 5' }
];

