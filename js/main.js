'use strict';
const $replaceImage = document.querySelector('#placeholder');
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
  $replaceImage.setAttribute('src', eventTargetValue);
}
$urlLink.addEventListener('input', handleInput);
const $form = document.querySelector('.form');
if (!$form) throw new Error('$form failed to query');
const $data = document.querySelector('.hidden');
if (!$data) throw new Error('$data failed to query');
function submitForm(event) {
  event.preventDefault();
  const $formValues = $form.elements;
  const myObjectForm = {
    title: $formValues.title.value,
    photourl: $formValues.photourl.value,
    entryId: data.nextEntryId,
  };
  if (!$data) throw new Error('$data failed to query');
  data.nextEntryId++;
  data.entries.unshift(myObjectForm);
  $data.appendChild($form);
  $form.reset();
  writeData();
}
$form.addEventListener('submit', submitForm);
console.log('submitForm', submitForm);
