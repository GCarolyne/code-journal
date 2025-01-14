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
  const entryObject = {
    title: $title.value,
    url: $inputUrl.value,
    notes: $notes.value,
    entryId: data.nextEntryId,
  };
  data.nextEntryId++;
  data.entries.push(entryObject);
  writeData();
  $placeholderImg.setAttribute('src', 'images/placeholder-image-square.jpg');
  $allForm.reset();
});
