'use strict';
const data = readData();
function writeData() {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('data', dataJSON);
}
writeData();
function readData() {
  const storedDataJSON = localStorage.getItem('data');
  if (storedDataJSON) {
    return JSON.parse(storedDataJSON);
  } else {
    return {
      view: 'entry-form',
      entries: [],
      editing: null,
      nextEntryId: 1,
      entryId: 1,
    };
  }
}
