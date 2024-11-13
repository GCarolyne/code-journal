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
