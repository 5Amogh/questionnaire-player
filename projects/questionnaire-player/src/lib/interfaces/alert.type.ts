export type AlertSize = 'tiny' | 'mini';
export type AlertBodyType = 'text' | 'checkbox';
export type AlertFooterClass =
  | 'single-btn'
  | 'double-btn'
  | 'double-btn-circle';
export interface AlertMeta {
  title?:String
  size: AlertSize;
  bodyType: AlertBodyType;
  data: String;
  buttonClass: AlertFooterClass;
  acceptText: String;
  cancelText: String;
  type?: String;
  closeIcon?: Boolean;
}