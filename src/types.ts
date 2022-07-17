export interface ModeInterface {
  modeName: string;
  isWorkingDay: boolean;
  startTime: string | null;
  endTime: string | null;
  notification: string;
}

export interface DayInterface extends ModeInterface {
  date: string;
  weekdayIndex: number;
}
