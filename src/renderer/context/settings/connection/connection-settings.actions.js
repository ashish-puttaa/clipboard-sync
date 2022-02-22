import ConnectionSettingsActionTypes from './connection-settings.types';

export function setConnectionType(dispatch, connectionType) {
   dispatch({ type: ConnectionSettingsActionTypes.SET_CONNETION_TYPE, payload: connectionType });
}
