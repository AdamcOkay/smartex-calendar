export interface ModeInterface {
  date?: number;
  weekDay?: number;
  id: string;
  modeName: string;
  isWorkingDay: boolean;
  startTime: string;
  endTime: string;
  notification: string;
}

export interface FormInterface {
  inputLabel: string;
  inputName: string;
  inputType: string;
  inputRequired: boolean;
  inputValue?: string;
  inputChecked?: boolean;
}

export interface ModeProps {
  modes: ModeInterface[];
  setModes: React.Dispatch<React.SetStateAction<ModeInterface[]>>;
}

export interface DayProps {
  days: ModeInterface[];
  setDays: React.Dispatch<React.SetStateAction<ModeInterface[]>>;
}

export interface RangeProps {
  days: ModeInterface[];
  setDays: React.Dispatch<React.SetStateAction<ModeInterface[]>>;
  modes: ModeInterface[];
}

export interface FormProps {
  formData: FormInterface[];
  stateToListen: number | string | Date;
  onChangeParams: {
    state: any;
    setState: React.Dispatch<React.SetStateAction<any>>;
  };
  onCancel: ReturnType<typeof Function>;
}
