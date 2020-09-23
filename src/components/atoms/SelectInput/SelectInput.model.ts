export interface ISingleOption {
  id: string;
  value: string;
}

export interface ISelectInput {
  isMulti?: boolean;
  selectCaption: string;
  inputPlaceholder: string;
  options: ISingleOption[];
  handleOnClick: (callback: () => ISingleOption[]) => void | undefined;
}
