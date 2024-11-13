const $replaceImage = document.querySelector('#placeholder');
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

  $replaceImage.setAttribute('src', eventTargetValue);
}
$urlLink.addEventListener('input', handleInput);

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

const $form = document.querySelector('.form') as HTMLFormElement;
if (!$form) throw new Error('$form failed to query');

const $data = document.querySelector('.hidden');
if (!$data) throw new Error('$data failed to query');

function submitForm(event: Event): void {
  const $formValues = $form.elements as FormElement;
  const myObjectForm: myObjectForms = {
    title: $formValues.title.value,
    photourl: $formValues.photourl.value,
    entryId: data.nextEntryId,
  };

  data.nextEntryId++;
  data.entries.unshift(myObjectForm);
  event.preventDefault();
  writeData();
  $form.reset();
}

$form.addEventListener('submit', submitForm);

console.log('submitForm', submitForm);
