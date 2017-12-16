(function () {
    'use strict';

    /**
     * ПРИЛОЖЕНИЕ РАЗРАБАТЫВАЛ ИСПОЛЬЗУЯ (Windows/Chrome/Node v8.9.1):<br>
     * 1. gulp;<br>
     * 2. webpack;<br>
     * 3. browser-sync;<br>
     * 4. angularjs;<br>
     * 5. yuidoc;
     
     * ТОЧКА ВХОДА - ФАЙЛ frontend/js/app.js (самовызывающаяся функция).

        angular
            .module('app',  ['ngGrid', 'ngRoute', 'ngCookies', 'ui.sortable'])
            .config(config)
            .run(run);

     * @class APP
     * @module app
     * @main app
     */

    angular
        .module('app',  ['ngGrid', 'ngRoute', 'ngCookies', 'ui.sortable'])
        .config(config)
        .run(run);

    /**
     * Роутер
     * @method config
     * @param $routeProvider
     * @param $locationProvider
     */

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'home/home.view.html',
                controllerAs: 'vm'
            })

            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'login/login.view.html',
                controllerAs: 'vm'
            })

            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'register/register.view.html',
                controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/login' });
    };

    /**
     * Сохранить пользователя после обновления страницы <br> Перенаправлять на страницу входа в систему, если не был вход в систему
     * @method run
     * @param $rootScope
     * @param $location
     * @param $cookies
     * @param $http
     */

    run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
    function run($rootScope, $location, $cookies, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });

        //ВЫКЛЮЧАЕМ ОЖИДАНИЕ
        $("#loader").fadeToggle();
    }

})();