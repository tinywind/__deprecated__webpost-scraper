const { join } = require('path');
const isDev = require('electron-is-dev').default;

let config = {
  appName: 'Electron React Tailwind Template',
  icon: isDev ? join(__dirname, '..', '..', 'src/assets/amethyst.png') : join(process.resourcesPath, 'app-icon.png'),
  tray: null,
  isQuiting: false,
  mainWindow: null,
  popupWindow: null,
  isDev,
};

module.exports = config;
