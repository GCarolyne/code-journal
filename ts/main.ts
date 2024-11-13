const $replaceImage = document.querySelector('img');
if (!$replaceImage) throw new Error('$replaceImage failed to query');
console.log('$replaceImage', $replaceImage);

const $urlLink = document.querySelector('#photourl');
if (!$urlLink) throw new Error('$urlLink failed to query');
console.log('$urlLink', $urlLink);

function handleInput(event: Event): void {
  if (!$replaceImage) throw new Error('$replaceImage failed to query');
  const $eventTarget = event.target as HTMLInputElement;
  const eventTargetValue = $eventTarget.value;
  console.log('eventTargetValue', eventTargetValue);
  $replaceImage.setAttribute('src', 'eventTarget');
  writeData();
}
$urlLink.addEventListener('input', handleInput);

// All the event.target is is the element that fired the event
// So since I am listening for the input event on my input for the photoURL
// my event.target is referring to that input element that was typed in.

interface FormElement extends HTMLFormControlsCollection {
  placeholder: HTMLImageElement;
  title: HTMLInputElement;
  photourl: HTMLInputElement;
}

interface myObjectForms {
  title: any;
  photourl: any;
  entryId: number;
}

const $form = document.querySelector('.entry-form') as HTMLFormElement;
if (!$form) throw new Error('$form failed to query');

const $data = document.querySelector('data');
if (!$data) throw new Error('$data failed to query');

function submitForm(event: Event): void {
  if (!$form) throw new Error('$form failed to query');
  const $formValues = $form.elements as FormElement;
  const myObjectForm: myObjectForms = {
    title: $formValues.title.value,
    photourl: $formValues.photourl.value,
    entryId: data.nextEntryId,
  };
  writeData();

  data.nextEntryId++;
  data.entries.unshift(myObjectForm);
  $form.reset();

  event.preventDefault();
}

$form.addEventListener('submit', submitForm);
