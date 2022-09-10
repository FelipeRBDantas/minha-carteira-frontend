import store from '@/store';

import {
  NotificationsRequest,
  ADD_NOTIFICATIONS,
  CLEAR_NOTIFICATIONS,
} from '@store/modules/app/notifications/types';

export function addNotifications(data: NotificationsRequest) {
  store.dispatch({
    type: ADD_NOTIFICATIONS,
    payload: data,
  });
}

export function clearNotifications() {
  store.dispatch({
    type: CLEAR_NOTIFICATIONS,
    payload: null,
  });
}
