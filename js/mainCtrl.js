var app = angular.module('friends');

app.controller('mainCtrl', function($scope, friendService){
  $scope.friends = friendService.getFriends();

  $scope.addFriends = functions(){
    friendService.addNewFriend($scope.newFriend);

};

  $scope.removeFriends = function(){
	friendService.removeNewFriend($scope.oldFriend);
  };

  $scope.clearFriends = function(){
  	friendService.clearAllFriends($scope.noFriend);
  };
});