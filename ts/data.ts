interface DataModel {
  view: string;
  entries: myObjectForms[];
  editing: null;
  nextEntryId: number;
  entryId: number;
}

let data: DataModel = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
  entryId: 1,
};

data = readData();

function writeData(): void {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('data-storage', dataJSON);
}

writeData();

function readData(): any {
  const dataJSON = localStorage.getItem('data-storage');
  if (dataJSON) {
    return JSON.parse(dataJSON);
  }
}
