'use strict';

// Manage DB of Todos via a service that can be reused throughout the app
// Allow retrieving of data and adding new todos based on the todo list id

app.factory("TodoDBService", function () {

  var init, get, update, defaultData,
    timeStamp = Date.now();

  defaultData = [
    {
      text: "create a new campaign to save the rain forest",
      completed: true,
      created: timeStamp,
      edited: timeStamp
      },
    {
      text: "start a petition on Change.org",
      completed: false,
      created: timeStamp,
      edited: timeStamp
      },
    {
      text: "send an email to friends",
      completed: false,
      created: timeStamp,
      edited: timeStamp
      },
    {
      text: "share on social networks",
      completed: false,
      created: timeStamp,
      edited: timeStamp
      },
    {
      text: "victory party after 1 billion signatures",
      completed: false,
      created: timeStamp,
      edited: timeStamp
      }
    ];

  init = function () {
    localStorage.setItem('default-todos', JSON.stringify(defaultData));
  };

  // Get the todo list data based on the list id
  get = function (id) {
    id = id || 'default-todos';
    // if the todo list id doesn't exist return an empty object
    return JSON.parse(localStorage.getItem(id));
  };

  // Update DB - accept parameters for DB id and data object
  update = function (data, id) {
    id = id || 'default-todos';
    localStorage.setItem(id, JSON.stringify(data));
  };

  // reveal the methods for use across the application
  // useful in case you want to keep some methods private
  return {
    init: init,
    get: get,
    update: update
  };
});