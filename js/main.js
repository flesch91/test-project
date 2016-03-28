/**
 * Created by nazariibanakh on 28.03.16.
 */
define([
  'angular',
  './app'
], function(angular){
  'use strict';

  angular.injector(['ng']).invoke(['$http', '$window', '$document', function($http, $window, $document){
  angular.bootstrap($document, ['app']);
  }])
});
