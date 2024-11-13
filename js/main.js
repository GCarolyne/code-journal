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
    entryId: data.nextEntryId,
  };
  data.nextEntryId++;
  data.entries.unshift(myObjectForm);
  $form.reset();
  writeData();
}
$form.addEventListener('submit', submitForm);
