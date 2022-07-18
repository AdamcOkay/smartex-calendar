export interface ModeInterface {
  id: string;
  modeName: string;
  isWorkingDay: boolean;
  startTime: string;
  endTime: string;
  notification: string;
}

export interface ModeProps {
  modes: ModeInterface[];
  setModes: React.Dispatch<React.SetStateAction<ModeInterface[]>>;
}

export interface DayInterface extends ModeInterface {
  date: string;
  weekdayIndex: number;
}

export interface FormInterface {
  inputLabel: string;
  inputName: string;
  inputType: string;
  inputRequired: boolean;
  inputValue?: string;
  inputChecked?: boolean;
}

export interface FormProps {
  formData: FormInterface[];
  onInputChange: ReturnType<typeof Function>;
  onChangeParams: {
    activeMode: ModeInterface;
    setActiveMode: React.Dispatch<React.SetStateAction<ModeInterface | null>>;
  };
  onCancel: ReturnType<typeof Function>;
}
