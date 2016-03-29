/**
 * Created by nazariibanakh on 28.03.16.
 */
define([
  'angular',
  'ngResource'
], function(angular){
  'use strict';

  return angular.module('app.resources.dataResult', [
    'ngResource'
  ]).service('DataResults', function($resource){
    return $resource('/data.result-2.json');
  });
});
