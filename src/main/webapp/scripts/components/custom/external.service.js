'use strict';

//these two variables need to be picked up at runtime, not hard coded
// now, they are hard-coded, with token created by curl call
var token = 'a7a59523-60c4-40ae-9650-006faeb11b9a';
var url = 'http://l42-env.elasticbeanstalk.com/api/hearings';

angular.module('jcourt2App')
	.factory('External', ['$resource', function($resource) {
		debugger;
		return $resource(url, {}, {
			get: 
			{
				method: 'GET',
				headers: {'Authorization': 'Bearer ' + token }
			}
		}); 
}]);

/*
angular.module('jcourt2App')	
.factory('External', ['$resource', function($resource) {
	debugger;
	return $resource(url, null, {
		get: {
			method: 'JSONP',
			params: {callback: 'JSON_CALLBACK'}
			//headers: {'Authorization': 'Bearer ' + token}
		}
	}); 
}]);
*/


/*//add post here
put: {
	method: 'POST',
	headers: {'Authorization': 'Bearer ' + token }
	data?? : data
}
*/

//build the $http resource
//set a temp hearing equal to the current hearing
//set the transfer hearing values to match only the subset needed (e.g. leave out Judge, and don't set caseworker
//build the http command 
// leave a note  here to build the http command using applicatio.yml values, not hard coded
/*
.factory('dataFactory', ['$http', function($http) {

    var urlBase = 'http://127.0.0.1:8050/api/hearing';
    var dataFactory = {};
    -- insert http command, like bearer token here

    dataFactory.insertCustomer = function (cust) {
        return $http.post(urlBase, cust);
    };
 */