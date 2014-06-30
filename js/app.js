'use strict';

// initialize the angular app
var app = angular.module("TodoApp", []);

app.run(function (TodoDBService) {
  if (localStorage.getItem('default-todos') === null) {
    TodoDBService.init();
  }
});