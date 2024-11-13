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

data += readData();

function writeData(): void {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('data', dataJSON);
}
writeData();

function readData(): any {
  const storedDataJSON = localStorage.getItem('data');
  if (storedDataJSON) {
    return JSON.parse(storedDataJSON);
  }
}
