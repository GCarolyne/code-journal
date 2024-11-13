interface DataModel {
  view: string;
  entries: any;
  editing: null;
  nextEntryId: number;
  entryId: number;
}

const data: DataModel = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
  entryId: 1,
};
readData();

function writeData(): void {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('data-storage', dataJSON);
}

function readData(): void {
  const dataJSON = localStorage.getItem('data-storage');
  if (dataJSON) {
    return JSON.parse(dataJSON);
  }
}
