import ConnectionSettingsActionTypes from './connection-settings.types';

const initialState = {
   type: 'offline',
};

function connectionSettingsReducer(state, action) {
   switch (action.type) {
      case ConnectionSettingsActionTypes.SET_CONNETION_TYPE:
         return { ...state, type: action.payload };
      default:
         return state;
   }
}

connectionSettingsReducer.initialState = initialState;

export default connectionSettingsReducer;
