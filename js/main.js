'use strict';
const $replaceImage = document.querySelector('#placeholder');
if (!$replaceImage) throw new Error('$replaceImage failed to query');
const $urlLink = document.querySelector('#photourl');
if (!$urlLink) throw new Error('$urlLink failed to query');
function handleInput(event) {
  if (!$replaceImage) throw new Error('$replaceImage failed to query');
  const $eventTarget = event.target;
  const eventTargetValue = $eventTarget.value;
  $replaceImage.setAttribute('src', eventTargetValue);
}
$urlLink.addEventListener('input', handleInput);
const $form = document.querySelector('form');
if (!$form) throw new Error('$form failed to query');
function submitForm(event) {
  event.preventDefault();
  const $formValues = $form.elements;
  const myObjectForm = {
    title: $formValues.title.value,
    photourl: $formValues.photourl.value,
    notes: $formValues.notes.value,
    entryId: data.nextEntryId,
  };
  data.nextEntryId++;
  data.entries.unshift(myObjectForm);
  $form.reset();
  writeData();
}
$form.addEventListener('submit', submitForm);
function renderEntry(entry) {
  const $myChild = document.createElement('li');
  $myChild.className = 'row';
  const $myChild2 = document.createElement('div');
  $myChild2.className = 'column-half';
  const $entryImage = document.createElement('img');
  $entryImage.setAttribute('src', entry.photourl);
  const $entryTitle = document.createElement('h1');
  $entryTitle.textContent = entry.title;
  const $entryNotes = document.createElement('p');
  $entryNotes.textContent = entry.notes;
  $myChild.appendChild($myChild2);
  $myChild2.appendChild($entryImage);
  $myChild2.appendChild($entryTitle);
  $entryTitle.appendChild($entryNotes);
  return $myChild;
}
console.log('renderEntry', renderEntry);
const $parent = document.querySelector('ul');
if (!$parent) throw new Error('the $Parent query failed');
function generateDom() {
  if (!$parent) throw new Error('the $parent query failed');
  for (let i = 0; i < data.entries.length; i++) {
    const $allEntry = renderEntry(data.entries[i]);
    $parent.appendChild($allEntry);
  }
}
document.addEventListener('DOMContentLoaded', generateDom);
const $entriesView = document.querySelector('#no-entries');
if (!$entriesView) throw new Error('the $entriesView query failed');
function toggleNoEntries() {
  if (!$entriesView) throw new Error('the $entriesView query failed');
  if (data.entries.length > 0) {
    $entriesView.classList.remove('.hidden');
  } else {
    $entriesView.classList.add('.hidden');
  }
}
console.log('toggleNoEntries', toggleNoEntries);
