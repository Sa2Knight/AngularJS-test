app.controller('bookMarkController' , ['$scope' , '$routeParams', function($scope , $routeParams) {

  var bookMark = this;

  /*
    ブックマークの一覧をローカルストレージより取得
  */
  this.list = (function() {
    var bookMarkJson = localStorage.getItem('bookmarks') || '[]';
    return JSON.parse(bookMarkJson);
  })();

  /*
    「編集」の場合のみ、編集対象のブックマークを取得
  */
  this.site = (function() {
    if ($routeParams.index && bookMark.list[$routeParams.index]) {
      bookMark.updatingIndex = $routeParams.index;
      return bookMark.list[$routeParams.index];
    } else {
      return {};
    }
  })();

  /*
    ローカルストレージにJSONを保存する
  */
  this.save = function() {
    var bookMarksJson = JSON.stringify(bookMark.list);
    localStorage.setItem('bookmarks' , bookMarksJson);
  };

  /*
    編集/新規登録
  */
  this.update = function() {
    if (this.updatingIndex && this.list[this.updatingIndex]) {
      this.list[bookMark.updatingIndex] = bookMark.site;
    } else {
      this.list.push(bookMark.site);
    }
    this.save();
    location.href = "#/bookmark";
  };

  /*
    削除
  */
  this.delete = function() {
    if (this.updatingIndex && this.list[this.updatingIndex]) {
      this.list.splice(this.updatingIndex , 1);
    }
    this.save();
    location.href = "#/bookmark";
  }

 }]);
