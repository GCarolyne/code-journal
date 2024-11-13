const $replaceImage = document.querySelector('#placeholder');
if (!$replaceImage) throw new Error('$replaceImage failed to query');

const $urlLink = document.querySelector('#photourl');
if (!$urlLink) throw new Error('$urlLink failed to query');

function handleInput(event: Event): void {
  if (!$replaceImage) throw new Error('$replaceImage failed to query');
  const $eventTarget = event.target as HTMLInputElement;
  const eventTargetValue = $eventTarget.value;
  $replaceImage.setAttribute('src', eventTargetValue);
}
$urlLink.addEventListener('input', handleInput);

interface FormElement extends HTMLFormControlsCollection {
  placeholder: HTMLImageElement;
  title: HTMLInputElement;
  photourl: HTMLInputElement;
}

interface myObjectForms {
  title: string;
  photourl: string;
  entryId: number;
}

const $form = document.querySelector('form') as HTMLFormElement;
if (!$form) throw new Error('$form failed to query');

function submitForm(event: Event): void {
  event.preventDefault();
  const $formValues = $form.elements as FormElement;
  const myObjectForm: myObjectForms = {
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
