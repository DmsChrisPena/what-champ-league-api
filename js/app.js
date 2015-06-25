var app = angular.module("jsApp", []);
var daniel = "";
	app.controller('jsCtrl', ['$scope', '$http', function($scope, $http) {
		$scope.champions = "";
		$scope.daniel = "";
		$scope.indexChamps = "";
		$scope.searchSummoner = "20265543";
		$scope.searchChampion = 
		$scope.rankedSummary = "";
		$scope.championPicture = "";
		$scope.championName = "Graves";
		
		$http.get("https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=all&api_key=1b8bcb70-044a-448a-87b9-eb1bd3a1ebf4")
		.success(function(data, response) {$scope.champions = data;console.log(data); $scope.championPictures = $scope.champions.data.Graves;});

		$http.get("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/20265543/ranked?season=SEASON2015&api_key=1b8bcb70-044a-448a-87b9-eb1bd3a1ebf4")
		.success(function(data, response) {$scope.daniel = data; console.log(data)});

		$http.get("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/"+ $scope.searchSummoner + "/summary?season=SEASON2015&api_key=1b8bcb70-044a-448a-87b9-eb1bd3a1ebf4")
		.success(function(data, response) {$scope.rankedSummary = data; console.log(data)});



		$scope.searchChampPicutre = function(){
			$scope.championPictures = $scope.champions.data[$scope.championName];
			console.log($scope.championPictures);
		}


		$scope.submitSearch = function() {
			console.log("something something");
			$http.get("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/"+ $scope.searchSummoner + "/summary?season=SEASON2015&api_key=1b8bcb70-044a-448a-87b9-eb1bd3a1ebf4")
			.success(function(data, response) {$scope.rankedSummary = data; console.log(data)});
		}

	}]);

app.filter('percentage', ['$filter', function ($filter) {
  return function (input, decimals) {
    return $filter('number')(input * 100, decimals) + '%';
  };
}]);
	

// var theURL = 'https://na.api.pvp.net/api/lol/na/v1.2/champion?freeToPlay=true/id&api_key=1b8bcb70-044a-448a-87b9-eb1bd3a1ebf4'
// var myData = {};

// function httpGet(theUrl)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "GET", theUrl, false );
//     xmlHttp.send( null );
//     console.log(xmlHttp.responseText);
//     myData = xmlHttp.responseText;
//     return xmlHttp.responseText;
// }
