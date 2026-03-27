export enum ToastType {
  Top,
}

export interface ToastInterface {
  showToast: boolean;
  message?: string;
  type?: ToastType;
  color: string;
}
