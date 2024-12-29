export interface AppAxiosErrorPayload {
  message?: string;
  status?: number;
  code?: string;
}

export type AsyncThunkErrorPayload = {
  disableToast?: boolean;
} & AppAxiosErrorPayload;
