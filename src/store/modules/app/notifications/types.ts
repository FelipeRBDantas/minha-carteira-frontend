export const ADD_NOTIFICATIONS = '@ADD_NOTIFICATIONS';
export const CLEAR_NOTIFICATIONS   = '@CLEAR_NOTIFICATIONS';

export interface NotificationsState {
  errors?: string[];
  message?: {
    description: string;
    type: 'success' | 'info' | 'warning' | 'error' | undefined;
  } | null;
}

export interface NotificationsRequest {
  errors?: string[];
  message?: {
    description: string;
    type: 'success' | 'info' | 'warning' | 'error' | undefined;
  } | null;
}
