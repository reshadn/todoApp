# simple todo app

- On first load app will initialize 5 todos and 1 marked as completed
- Add new todos by entering in the text and clicking the "add" button
- Mark todos as completed with the check box
- Hover over the todo text to see a recently edited timestamp and link to remove todos
- Remove todos by clicking on the "remove" link
- Todos are persisted to localstorage

Notes:
The app was built with AngularJS, leveraging an MVVM code pattern. The "TodoApp" is initialized by the "app.js" file as an Angular module. The index.html is the primary View. The Controller is the "TodoController" as part of the "js/controllers.js" file. The ViewModel is part of the "$scope" object created by AngularJS. The data is persisted to the browser's localStorage via an Angular Service "TodoDBService" in the "js/services.js" file. The Angular Service allows you to swap out the persistence mechanism and can even be setup to READ and WRITE data to a server-side implementation. 

Addtional work:
With more time I'd like to improve the functionality by enabling editing of the todos, allowing for sub-data within the todo and allowing the user to create multiple lists. Further we could add deadlines and flags for organization. In addition I'd like to clean up the UI with a better set of styles and icons to improve the overall aesthetic design and UX. 