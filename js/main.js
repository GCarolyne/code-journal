'use strict';
const $replaceImage = document.querySelector('img');
if (!$replaceImage) throw new Error('$replaceImage failed to query');
console.log('$replaceImage', $replaceImage);
const $urlLink = document.querySelector('#photourl');
if (!$urlLink) throw new Error('$urlLink failed to query');
console.log('$urlLink', $urlLink);
function handleInput(event) {
  if (!$replaceImage) throw new Error('$replaceImage failed to query');
  const $eventTarget = event.target;
  const eventTargetValue = $eventTarget.value;
  console.log('eventTargetValue', eventTargetValue);
  $replaceImage.setAttribute('src', 'eventTarget');
  writeData();
}
$urlLink.addEventListener('input', handleInput);
const $form = document.querySelector('.entry-form');
if (!$form) throw new Error('$form failed to query');
const $data = document.querySelector('data');
if (!$data) throw new Error('$data failed to query');
function submitForm(event) {
  if (!$form) throw new Error('$form failed to query');
  const $formValues = $form.elements;
  const myObjectForm = {
    title: $formValues.title.value,
    photourl: $formValues.photourl.value,
    entryId: data.nextEntryId,
  };
  data.nextEntryId++;
  data.entries.unshift(myObjectForm);
  $form.reset();
  event.preventDefault();
}
$form.addEventListener('submit', submitForm);
