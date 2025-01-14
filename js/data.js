'use strict';
const data = readData();
function writeData() {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('data-storage', dataJSON);
}
function readData() {
  if (localStorage.getItem('data')) {
    const parsedJSON = JSON.parse(localStorage.getItem('data') || '[]');
    return parsedJSON;
  } else {
    return {
      view: 'entry-form',
      entries: [],
      editing: null,
      nextEntryId: 1,
    };
  }
}
