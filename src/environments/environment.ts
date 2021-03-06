// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAzUAScA_7wQgbAHgjoTbEZFUlJYXt_R3w",
    authDomain: "my-sample-project-40b30.firebaseapp.com",
    databaseURL: "https://my-sample-project-40b30.firebaseio.com",
    projectId: "my-sample-project-40b30",
    storageBucket: "my-sample-project-40b30.appspot.com",
    messagingSenderId: "456208484053"
  },
  modes: {
    POPUP: 'popup',
    REDIRECT: 'redirect'
  },
  providers: {
    GOOGLE: 'google',
    FACEBOOK: 'facebook',
    TWITTER: 'twitter',
    GITHUB: 'github'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
