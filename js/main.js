'use strict';
const $inputUrl = document.querySelector('.url');
if (!$inputUrl) throw new Error('query for input photo url failed. ');
const $title = document.querySelector('.title');
if (!$title) throw new Error('query for title failed');
const $placeholderImg = document.querySelector('.placeholderIMG');
if (!$placeholderImg) throw new Error('query for placeholder image failed.');
const $notes = document.querySelector('.notes');
if (!$notes) throw new Error('query for $notes failed');
const $button = document.querySelector('button');
if (!$button) throw new Error('query for the button failed.');
const $allForm = document.querySelector('form');
if (!$allForm) throw new Error('query for form failed');
$inputUrl.addEventListener('input', (event) => {
  const $eventTarget = event.target;
  const inputValue = $inputUrl.value;
  if ($eventTarget === $inputUrl) {
    $placeholderImg.setAttribute('src', inputValue);
  } else {
    $placeholderImg.setAttribute('src', 'images/placeholder-image-square.jpg');
  }
});
$allForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const ulParent = document.querySelector('ul');
  if (!ulParent) throw new Error('query for ul parent failed. ');
  const entryObject = {
    title: $title.value,
    url: $inputUrl.value,
    notes: $notes.value,
    entryId: data.nextEntryId,
  };
  data.nextEntryId++;
  data.entries.unshift(entryObject);
  writeData();
  viewSwap('entries');
  const resultRender = renderEntry(entryObject);
  ulParent.prepend(resultRender);
  $placeholderImg.setAttribute('src', 'images/placeholder-image-square.jpg');
  $allForm.reset();
});
const $ulParent = document.querySelector('ul');
if (!$ulParent) throw new Error('the query for ulParent failed');
$ulParent.addEventListener('click', (event) => {
  const $eventTarget = event.target;
  const $faPencil = document.querySelector('.fa-pencil');
  if (!$faPencil) throw new Error('the query for pencil failed.');
  if ($eventTarget === $faPencil) {
    viewSwap('entry-form');
  }
  for (let i = 0; i < data.entries.length; i++) {
    if (data.entries[i].entryId === data.nextEntryId) {
      data.editing = data.entries[i];
    }
  }
});
function renderEntry(entry) {
  const $liChild = document.createElement('li');
  $liChild.setAttribute('class', 'first-entry');
  const $divRow = document.createElement('div');
  $divRow.setAttribute('class', 'row');
  const $divColumn = document.createElement('div');
  $divColumn.setAttribute('class', 'column-half');
  const $image = document.createElement('img');
  $image.setAttribute('src', entry.url);
  $image.setAttribute('alt', 'placeholder image');
  const $secondDiv = document.createElement('div');
  $secondDiv.setAttribute('class', 'column-half');
  const $h2 = document.createElement('h2');
  $h2.textContent = entry.title;
  const $h3 = document.createElement('h3');
  $h3.textContent = entry.notes;
  $liChild.appendChild($divRow);
  $divRow.appendChild($divColumn);
  $divRow.appendChild($secondDiv);
  $divColumn.appendChild($image);
  $secondDiv.appendChild($h2);
  $secondDiv.appendChild($h3);
  const $pencilEdit = document.createElement('i');
  $pencilEdit.setAttribute('class', 'fa-solid fa-pencil');
  $h2.appendChild($pencilEdit);
  $h2.classList.add('font-pencil');
  $pencilEdit.classList.add('.pencil-size');
  $liChild.setAttribute('data-entry-id', 'entryId');
  return $liChild;
}
document.addEventListener('DOMContentLoaded', () => {
  const $ulParent = document.querySelector('ul');
  if (!$ulParent) throw new Error('the query for ulParent failed');
  for (let i = 0; i < data.entries.length; i++) {
    const entry = data.entries[i];
    const resultEntry = renderEntry(entry);
    $ulParent.appendChild(resultEntry);
  }
  toggleNoEntries();
  viewSwap(data.view);
});
function toggleNoEntries() {
  const noEntriesElement = document.querySelector('.no-entries');
  if (data.entries.length > 0) {
    noEntriesElement?.classList.add('hidden');
  } else {
    noEntriesElement?.classList.remove('hidden');
  }
}
function viewSwap(viewName) {
  const entryFormView = document.getElementById('form-entry');
  const entriesView = document.getElementById('entries-view');
  if (viewName === 'entries') {
    entriesView.classList.remove('hidden');
    entryFormView.classList.add('hidden');
  } else {
    entriesView.classList.add('hidden');
    entryFormView.classList.remove('hidden');
  }
  data.view = viewName;
}
const $navEntriesLink = document.querySelector('.nav-link');
if (!$navEntriesLink)
  throw new Error('the query for entries nav link failed. ');
$navEntriesLink.addEventListener('click', (event) => {
  const $eventTarget = event.target;
  if ($eventTarget === $navEntriesLink) {
    viewSwap('entries');
  }
});
const $newButton = document.querySelector('#new-entry');
if (!$newButton) throw new Error('the query for entries nav link failed');
$newButton.addEventListener('click', (event) => {
  const $eventTarget = event.target;
  if ($eventTarget === $newButton) {
    viewSwap('entry-form');
  }
});
