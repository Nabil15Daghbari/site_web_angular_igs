// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  defaultauth: 'fackbackend',
  firebaseConfig: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: ''
  }
};

export const environmentStripe = {
  production: false,
  apiUrl: 'http://localhost:8081/',
  stripePublishableKey:
    'pk_test_51OX2FtLxpZjsZcAtJbl6BcZcEKTjpmVJ26JEs5uWtARXeME5FkNV5u1VJA3OVm2i0GntISwNpdOvbnH5YMXmiYde00zoHwXPxj', 
};



/*
export const environment = {
  production: false,
  apiUrl: 'https://localhost:8443/api',
  stripePublishableKey:
    'pk_test_51NaiSfJ7CqAb5XkluTiXqbDsuJ6IMsWiZgTPCmmKaouA5D3UJGXpXZcFNFM1os4yTZonDreg6w9EUMkk2eagZAE600dy8Thabh',
};*/


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
