import api from './api'


api.fetchBookmarks()
.then(items => {
items.forEach(item => {
addBookmark(item);      
})
});

const storeList = {
    bookmarks: [],
    adding: false,
    error: null,
    filter: 0
  };

const addBookmark = function(bookmark) {
     bookmark.expanded = false;
     bookmark.editing = false;
    storeList.bookmarks.push(bookmark);
}
    export default {
             storeList,
             addBookmark,
             
          }