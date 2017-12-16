(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    /**
    * АУТЕНТИФИКАЦИЯ ПОЛЬЗОВАТЕЛЯ

        LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];

        function LoginController($location, AuthenticationService, FlashService) {

            var vm = this;

            vm.login = login;

            (function initController() {
                // reset login status
                AuthenticationService.ClearCredentials();
            })();

            function login() {
                vm.dataLoading = true;
                AuthenticationService.Login(vm.username, vm.password, function (response) {
                    if (response.success) {
                        AuthenticationService.SetCredentials(vm.username, vm.password);
                        $location.path('/');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
            };
        }

    * @class LoginController
    * @module app
    * @main LoginController
    */

    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];

    function LoginController($location, AuthenticationService, FlashService) {

        var vm = this;

        vm.login = login;

        /**
         * initController <br> СБРОСИТЬ login СТАТУС - AuthenticationService.ClearCredentials()<br>
         * @method initController
         */

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        /**
         * login <br> ПРОВЕРКА username И password <br> ЕСЛИ ВСЕ ОК - $location.path('/')
         * @method login
         */

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };
    }

})();
