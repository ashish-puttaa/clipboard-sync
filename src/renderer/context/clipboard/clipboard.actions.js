import ClipboardActionTypes from './clipboard.types';

// exports.setAllAssets = (dispatch, allAssets) => {
//    dispatch({ type: ClipboardActionTypes.SET_ALL_ASSETS, payload: allAssets });
// };

export const clearClipboardQueue = (dispatch) => {
   dispatch({ type: ClipboardActionTypes.CLEAR_CLIPBOARD_QUEUE });
};

export const resetClipboardQueue = (dispatch) => {
   dispatch({ type: ClipboardActionTypes.RESET_CLIPBOARD_QUEUE });
};

export const addToClipboardQueue = (dispatch, newItem) => {
   dispatch({ type: ClipboardActionTypes.ADD_TO_CLIPBOARD_QUEUE, payload: newItem });
};
