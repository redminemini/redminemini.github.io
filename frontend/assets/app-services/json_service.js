(function () {
    'use strict';

    angular
        .module('app')
        .factory('JsonService', JsonService);

    /**
    * @class ServiceJson
    * @module app
    * @main ServiceJson
    */  

    JsonService.$inject = [];
    function JsonService() {
        var service = {};

        service.getResultFromJson = getResultFromJson;

        return service;

        //ОБЩАЯ ФУНКЦИЯ ИМПОРТА СПИСКОВ
        function getResultFromJson (path){
            var resultFromJson = null;
            try { 
              var xhr = new XMLHttpRequest();

              xhr.open('GET', path, false);
              xhr.send();

              if (xhr.status != 200) {
             // обработать ошибку
             alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
              } else {
            // вывести результат
            // alert(xhr.responseText);
              }
              resultFromJson = JSON.parse(xhr.responseText);
              return resultFromJson;
            }
            catch(err) {
              resultFromJson = getResultFromJsonNode(path); 
              return resultFromJson;
            }
        };
    }

})();
