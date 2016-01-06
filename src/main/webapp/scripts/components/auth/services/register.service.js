'use strict';

angular.module('jcourt2App')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


