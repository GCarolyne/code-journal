interface Entries {
  title: string;
  url: string;
  notes: string;
  entryId?: number;
}

interface Data {
  title?: string;
  view?: string;
  entries: Entries[];
  editing: null;
  nextEntryId: number;
}

const data = readData();

function writeData(): undefined {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('data-storage', dataJSON);
}

function readData(): Data {
  if (localStorage.getItem('data-storage')) {
    const parsedJSON = JSON.parse(localStorage.getItem('data-storage') || '[]');
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
