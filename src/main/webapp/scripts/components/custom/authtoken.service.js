'use strict';

//these two variables need to be picked up at runtime, not hard coded
// now, they are hard-coded, with token created by curl call
/*
url -X POST -vu jhip3app:mySecretOAuthSecret http://l42-env.elasticbeanstalk.com/oauth/token -H 
	"Accept: application/json" -d 
	"username=admin&password=admin&grant_type=password&scope=read&client_id=jhip3app&client_secret=mySecretOAuthSecret"
*/
var url = 'http://l42-env.elasticbeanstalk.com/oauth/token';
var clientId = 'jhip3app';
var clientSecret = 'mySecretOAuthSecret';

angular.module('jcourt2App')
	.factory('AuthToken', ['$resource', function($resource) {
		debugger;
		return $resource(url, {}, {
			getToken: 
			{	
				method: 'POST',
				data:  "client_id=" + clientId + "&client_secret=" + clientSecret + "password=admin&username=admin&grant_type=password" + "&scope=read%20write",
	            withCredentials: true,
	            headers: {'Content-Type': 'application/json; charset=utf-8'}
			}
		}); 
}]);
