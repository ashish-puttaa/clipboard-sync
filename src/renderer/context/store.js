import { createGlobalState } from '../utils';

import clipboardReducer from './clipboard/clipboard.reducer';
import connectionSettingsReducer from './settings/connection/connection-settings.reducer';

const rootReducer = {
   clipboard: clipboardReducer,
   settings: {
      connection: connectionSettingsReducer,
   },
};

export const { GlobalState, useGlobalState } = createGlobalState(rootReducer);
