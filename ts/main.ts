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
  notes: HTMLInputElement;
}

interface myObjectForms {
  title: string;
  photourl: string;
  notes: string;
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
    notes: $formValues.notes.value,
    entryId: data.nextEntryId,
  };

  data.nextEntryId++;
  data.entries.unshift(myObjectForm);
  $form.reset();
  writeData();
}

$form.addEventListener('submit', submitForm);

function renderEntry(entry: myObjectForms): HTMLElement {
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

function generateDom(): any {
  if (!$parent) throw new Error('the $parent query failed');
  for (let i = 0; i < data.entries.length; i++) {
    const $allEntry = renderEntry(data.entries[i]);
    $parent.appendChild($allEntry);
  }
}

document.addEventListener('DOMContentLoaded', generateDom);
