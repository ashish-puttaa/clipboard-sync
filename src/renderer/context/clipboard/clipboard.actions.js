import ClipboardActionTypes from './clipboard.types';

// exports.setAllAssets = (dispatch, allAssets) => {
//    dispatch({ type: ClipboardActionTypes.SET_ALL_ASSETS, payload: allAssets });
// };

export const clearClipboardList = (dispatch) => {
   dispatch({ type: ClipboardActionTypes.CLEAR_CLIP_LIST });
};

export const resetClipboardList = (dispatch) => {
   dispatch({ type: ClipboardActionTypes.RESET_CLIP_LIST });
};

export const setClipboardList = (dispatch, newList) => {
   dispatch({ type: ClipboardActionTypes.SET_CLIP_LIST, payload: newList });
};

export const addToClipboardList = (dispatch, newItem) => {
   dispatch({
      type: ClipboardActionTypes.ADD_TO_CLIP_LIST,
      payload: newItem,
   });
};

export const trimClipboardListToMaxSize = (dispatch, { maxSize }) => {
   dispatch({
      type: ClipboardActionTypes.TRIM_CLIP_LIST_TO_MAX_SIZE,
      options: { maxSize },
   });
};
