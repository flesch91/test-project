/**
 * Created by nazariibanakh on 28.03.16.
 */
define(['./module'], function(module){
  'use strict';

  module.controller('HomeController', function($scope, $rootScope, DataResults){

    $scope.projFilter = 200;
    $scope.salaryFilter = 150000;
    $scope.players = [];
    $scope.index = 0;
    $scope.currentCount = 10;

    $scope.showMore = function(){
       return $scope.currentCount+=10
    };


    $scope.rangeFilter = function(fieldName, minVar) {
      return function(player) {
        var item;
        switch (fieldName){
          case 'proj':
            item = player.proj;
            break;
          case 'salary':
            item = player.draftkings['salary'];
            break;
        }
        return (Math.round(item) <= minVar);
      }
    };



     DataResults.get(function(data){
      $scope.players = data.players.map(function(player){
        player.proj = $scope.calculate(player);
        player.index = $scope.index++;

        return player;
      });
    });


    $scope.getUpdatedItem = function(index) {
      $scope.proj = $scope.calculate($scope.players[index]);

      $scope.players[index].proj = $scope.proj;
    };

    $scope.calculate = function(player) {
      var playerMin = player.statsCurrentSeason.minutes['new'];
      var playerMan_ea = player.manualEffAdj['new'];

      var playerRr = player.statsCurrentSeason.reboundRate['new'];
      var playerUr = player.statsCurrentSeason.usageRate['new'];
      var playerAr = player.statsCurrentSeason.assistsRate['new'];
      var playerMax_r = Math.max(playerUr, playerRr, playerAr);

      var proj =  playerMin * playerMan_ea * (playerRr + playerUr + playerAr) / 3 / playerMax_r;

      //console.log(proj.toFixed(1));
      return proj.toFixed(1);
    }

  });
});
