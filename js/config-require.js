/**
 * Created by nazariibanakh on 28.03.16.
 */
if(typeof define !== 'function'){
  // to be able to require file from node
  var define = require('amdefine')(module);
}

define({
  baseUrl: '.',
  paths: {
    'angular': 'vendor/angular/angular',
    'jquery': 'vendor/jquery/dist/jquery',
    'ngResource': 'vendor/angular-resource/angular-resource',
    'ui.router': 'vendor/angular-ui-router/release/angular-ui-router'
  },
  shim: {
    'angular': {
      'deps': ['jquery'],
      'exports': 'angular'
    },
    'ngResource': ['angular'],
    'ui.router': ['angular']
  }
});
