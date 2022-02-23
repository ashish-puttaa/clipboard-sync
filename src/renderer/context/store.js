import { createGlobalState } from '../utils';

import clipboardReducer from './clipboard/clipboard.reducer';
import applicationSettingsReducer from './settings/application/application-settings.reducers';
import connectionSettingsReducer from './settings/connection/connection-settings.reducer';

const rootReducer = {
   clipboard: clipboardReducer,
   settings: {
      connection: connectionSettingsReducer,
      application: applicationSettingsReducer,
   },
};

export const { GlobalState, useGlobalState } = createGlobalState(rootReducer);
