const { screen } = require('electron');

exports.placeAboveTray = () => {
   const primaryScreen = screen.getPrimaryDisplay();
   const { size, workAreaSize } = primaryScreen;

   const taskbarSize = {
      width: size.width === workAreaSize.width ? size.width : size.width - workAreaSize.width,
      height: size.height === workAreaSize.height ? size.height : size.height - workAreaSize.height,
   };

   console.log(size.width + 'x' + size.height);
   console.log(taskbarSize);
};
