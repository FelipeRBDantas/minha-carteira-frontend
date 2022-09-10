import store from '@/store';

import {
  ThemeRequest,
  ADD_THEME,
} from '@store/modules/app/themes/types';

export function addNotifications(data: ThemeRequest) {
  store.dispatch({
    type: ADD_THEME,
    payload: data,
  });
}
