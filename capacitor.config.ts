import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.consurv.HRApp',
  appName: 'HRApp',
  bundledWebRuntime: false,
  //npmClient: "npm",
  //allowMixedContent: true,
  webDir: 'www',
  "plugins": {
    "SplashScreen": {
      "launchAutoHide": false,
      "launchShowDuration": 0
    },
    "LocalNotifications": {
      "smallIcon": 'ic_stat_icon_config_sample',
      "iconColor": '#CE0B7C',
    },
    "PushNotifications": {
      "presentationOptions": ['alert', 'sound'],
    },
  }
  //cordova: {},
};

export default config;


  