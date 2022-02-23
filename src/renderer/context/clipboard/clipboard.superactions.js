import { addToClipboardList, trimClipboardListToMaxSize } from '.';

export const addItemAndTrimClipList = (context, dispatch, newItem) => {
   const maxSize = context.settings.application.maxListSize;

   addToClipboardList(dispatch, newItem);
   trimClipboardListToMaxSize(dispatch, { maxSize });
};

export const refreshClipList = (context, dispatch) => {
   const maxSize = context.settings.application.maxListSize;
   trimClipboardListToMaxSize(dispatch, { maxSize });
};
