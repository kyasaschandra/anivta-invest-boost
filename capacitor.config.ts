import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.5e5cf4c8318840c494aefeee26a44c92',
  appName: 'anvitafund',
  webDir: 'dist',
  server: {
    url: 'https://5e5cf4c8-3188-40c4-94ae-feee26a44c92.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#000000',
      showSpinner: false
    }
  }
};

export default config;