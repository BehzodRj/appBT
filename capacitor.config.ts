import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.iqbol.BT',
  appName: 'myBabilon-T',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    
  },
  plugins:{
    CapacitorHttp:{
      enabled:true,
    }
  }
 
};

export default config;
