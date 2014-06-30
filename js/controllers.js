'use strict';

// 
app.controller("TodoController", function ($scope, $filter, TodoDBService) {

  angular.extend($scope, {
    todos: TodoDBService.get(),
    todosCount: '',
    activeTodosCount: '',
    statusFilter: null,
    status: 'all',
    add: function (text) {
      if (text && text.trim().length !== null) {
        $scope.todos.push({
          text: text,
          completed: false,
          created: Date.now(),
          edited: Date.now()
        });

        $scope.todoInput = '';
      };
    },
    remove: function (todo) {
      $scope.todos.splice($scope.todos.indexOf(todo), 1);
    },
    markComplete: function (todo) {
      todo.edited = Date.now();
    }
  });

  // watch for changes to the todos array and update DB
  $scope.$watch('todos', function () {
    TodoDBService.update($scope.todos);
    $scope.todosCount = $scope.todos.length;
    $scope.activeTodosCount = $filter('filter')($scope.todos, {
      completed: false
    }).length;
  }, true);

  // watch for changes to the status and filter the todos accordingly
  $scope.$watch('status', function () {
    $scope.statusFilter = ($scope.status === 'active') ? {
      completed: false
    } : null;
  })

});