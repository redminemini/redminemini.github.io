YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "1_ЗАВИСИМОСТИ_ПРИЛОЖЕНИЯ",
        "APP",
        "HomeController",
        "LoginController",
        "RegisterController",
        "ServiceAuthentication",
        "ServiceFlash",
        "ServiceJson",
        "ServiceUser",
        "ServiceUserlocalStorage"
    ],
    "modules": [
        "app"
    ],
    "allModules": [
        {
            "displayName": "app",
            "name": "app",
            "description": "ПРИЛОЖЕНИЕ РАЗРАБАТЫВАЛ ИСПОЛЬЗУЯ (Windows/Chrome/Node v8.9.1):<br>\n1. gulp;<br>\n2. webpack;<br>\n3. browser-sync;<br>\n4. angularjs;<br>\n5. yuidoc;\n    \nТОЧКА ВХОДА - ФАЙЛ frontend/js/app.js (самовызывающаяся функция).\n\n       angular\n           .module('app',  ['ngGrid', 'ngRoute', 'ngCookies', 'ui.sortable'])\n           .config(config)\n           .run(run);"
        }
    ],
    "elements": []
} };
});