import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'cap-app',
  webDir: 'dist/cap-app/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
