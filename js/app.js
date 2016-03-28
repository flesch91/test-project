/**
 * Created by nazariibanakh on 28.03.16.
 */
define([
  'angular',
  'jquery',
  'ui.router',
  './modules/home/index'
], function(angular, $){
  'use strict';

  return angular.module('app', [
    'app.home',
    'ui.router'
  ])
    .config(function ($urlRouterProvider){
      $urlRouterProvider.otherwise('/');
    })
});
