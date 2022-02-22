import ClipboardActionTypes from './clipboard.types';

const initialState = [
   'Many developers overlook this powerful CSS feature, and that is why we are going to go over how to work with counters in this tutorial.',
   '<ul>\r\n  <li>\r\n    Web Development\r\n    <ul>\r\n      <li>HTML</li>\r\n      <li>\r\n        CSS\r\n        <ul>\r\n          <li>CSS Introduction</li>\r\n          <li>CSS Selectors</li>\r\n          <li>CSS Animation</li>\r\n        </ul>\r\n      </li>\r\n      <li>JavaScript</li>\r\n    </ul>\r\n  </li>\r\n  <li>Graphics Design</li>\r\n  <li>Computer Education</li>\r\n</ul>',
   'Initialize the counter on the parent div using counter-reset\r\nIncrement the counter value by 1 on the child div p using counter-increment\r\nAdd the counter variables before the div p content using the :before pseudo selector.',
   "Making pagination with CSS counters is quite simple. Pagination is usually done with HTML, repeating the same set of elements and changing the numbers inside to create navigation to each page of a result.\r\n\r\nA developer may choose to use something dynamic like making loops that generate the elements, or do it from the server. But today we're going to use CSS to do this dynamically!\r\n\r\nHow? With our senior counters() function.\r\n\r\nThe same way we have been incrementing our values for the numbering above, we can also make a dynamic pagination list with (you guessed it) CSS counters",
];

const clipboardReducer = (state, action) => {
   switch (action.type) {
      case ClipboardActionTypes.CLEAR_CLIPBOARD_QUEUE:
         return [];

      case ClipboardActionTypes.RESET_CLIPBOARD_QUEUE:
         return initialState;

      case ClipboardActionTypes.ADD_TO_CLIPBOARD_QUEUE:
         return [...state, action.payload];

      default:
         return state;
   }
};

clipboardReducer.initialState = initialState;

export default clipboardReducer;
