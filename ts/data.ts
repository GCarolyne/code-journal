interface DataModel {
  view: string;
  entries: myObjectForms[];
  editing: null;
  nextEntryId: number;
  entryId: number;
}

const data = readData();

function writeData(): void {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('data', dataJSON);
}

function readData(): DataModel {
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
