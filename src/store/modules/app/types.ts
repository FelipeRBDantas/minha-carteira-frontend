import { NotificationsState } from "@store/modules/app/notifications/types";

import { ThemeState } from "@store/modules/app/themes/types";

export interface AppState {
  notifications: NotificationsState;
  themes: ThemeState;
}
