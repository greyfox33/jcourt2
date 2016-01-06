'use strict';

angular.module('jcourt2App')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
