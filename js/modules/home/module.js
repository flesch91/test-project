/**
 * Created by nazariibanakh on 28.03.16.
 */
define([
  'angular',
  'ui.router'
], function(angular){
  'use strict';

  return angular.module('app.home', [
    'ui.router'
  ])
    .config(function ($stateProvider){
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'js/modules/home/home.html',
          controller: 'HomeController'
        })
    })
});
