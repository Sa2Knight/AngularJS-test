app.controller('taskListController' , ['$scope' , function($scope) {

  var taskList = this;

  this.tasks = (function() {
    var tasksJson = localStorage.getItem('tasks') || '[]';
    return JSON.parse(tasksJson);
  })();

  this.errors = {};

  /*
    タスクを追加する
  */
  this.addTodo = function() {
    var addText = this.addText;
    if (this.tasks.find(function(e) { return e.text === addText })) {
      this.errors.alreadyRegistered = true;
    } else {
      this.tasks.push({text: addText , done: false});
      delete this.errors.alreadyRegistered;
    }
    this.addText = '';
  }

  /*
    指定したインデックスのタスクを削除
  */
  this.removeTask = function(task) {
    var index = this.tasks.indexOf(task);
    this.tasks.splice(index , 1);
  }

  /*
    完了済みのタスクを全て削除
  */
  this.removeDoneTasks = function() {
    this.tasks = this.tasks.filter(function(e) { return ! e.done });
  }

  /*
    未完了のタスクの個数を取得
  */
  this.remaining = function() {
    return this.tasks.filter(function(e) { return ! e.done }).length;
  }

  /*
    タスク一覧をJSONでlocalStorageに保存
  */
  this.saveTasks = function() {
    var tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem('tasks' , tasksJson);
  }

  /*
    タスク一覧の変更を検知し、変更時に内容を保存
  */
  $scope.$watch('taskList.tasks' , function() {
    taskList.saveTasks();
  } , true);

}]);
