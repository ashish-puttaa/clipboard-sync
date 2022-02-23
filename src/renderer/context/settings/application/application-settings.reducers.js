import ApplicationSettingsActionTypes from './application-settings.types';

ApplicationSettingsActionTypes;

const initialState = {
   maxListSize: 10,
   latestAtTop: false,
};

function applicationSettingsReducer(state, action) {
   switch (action.type) {
      case ApplicationSettingsActionTypes.SET_MAX_LIST_SIZE:
         return { ...state, maxListSize: action.payload };

      case ApplicationSettingsActionTypes.SET_LATEST_AT_LIST_TOP:
         return { ...state, latestAtTop: action.payload };

      default:
         return state;
   }
}

applicationSettingsReducer.initialState = initialState;

export default applicationSettingsReducer;
