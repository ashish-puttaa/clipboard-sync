import ApplicationSettingsActionTypes from './application-settings.types';

export function setMaxListSize(dispatch, maxListSize) {
   dispatch({ type: ApplicationSettingsActionTypes.SET_MAX_LIST_SIZE, payload: maxListSize });
}

export function setLatestAtListTop(dispatch, latestAtTop) {
   dispatch({ type: ApplicationSettingsActionTypes.SET_LATEST_AT_LIST_TOP, payload: latestAtTop });
}
