const $inputUrl = document.querySelector('.url') as HTMLInputElement;
if (!$inputUrl) throw new Error('query for input photo url failed. ');

const $title = document.querySelector('.title') as HTMLInputElement;
if (!$title) throw new Error('query for title failed');

const $placeholderImg = document.querySelector('.placeholderIMG');
if (!$placeholderImg) throw new Error('query for placeholder image failed.');

const $notes = document.querySelector('.notes') as HTMLTextAreaElement;
if (!$notes) throw new Error('query for $notes failed');

const $button = document.querySelector('button');
if (!$button) throw new Error('query for the button failed.');

const $allForm = document.querySelector('form') as HTMLFormElement;
if (!$allForm) throw new Error('query for form failed');

$inputUrl.addEventListener('input', (event: Event) => {
  const $eventTarget = event.target;

  const inputValue = $inputUrl.value;

  if ($eventTarget === $inputUrl) {
    $placeholderImg.setAttribute('src', inputValue);
  } else {
    $placeholderImg.setAttribute('src', 'images/placeholder-image-square.jpg');
  }
});

$allForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  const entryObject: Entries = {
    title: $title.value,
    url: $inputUrl.value,
    notes: $notes.value,
    entryId: data.nextEntryId,
  };

  data.nextEntryId++;
  data.entries.unshift(entryObject);

  writeData();

  $placeholderImg.setAttribute('src', 'images/placeholder-image-square.jpg');
  $allForm.reset();
});

function renderEntry(entry: Entries): HTMLLIElement {
  const $ulParent = document.createElement('ul');
  const $liChild = document.createElement('li');
  $liChild.setAttribute('class', 'first-entry');
  const $divRow = document.createElement('div');
  $divRow.setAttribute('class', 'row');
  const $divColumn = document.createElement('div');
  $divColumn.setAttribute('class', 'column-half');
  const $image = document.createElement('img');
  $image.setAttribute('src', `${$inputUrl.value}`);
  $image.setAttribute('alt', 'placeholder image');
  $image.setAttribute('id', 'textimg');
  const $secondDiv = document.createElement('div');
  $secondDiv.setAttribute('class', 'column-half');
  const $h2 = document.createElement('h2');
  $h2.setAttribute('class', `${$title.value}`);
  const $h3 = document.createElement('h3');
  $h3.setAttribute('class', `${$notes.value}`);
  $ulParent.appendChild($liChild);
  $liChild.appendChild($divRow);
  $divRow.appendChild($divColumn);
  $divRow.appendChild($secondDiv);
  $divColumn.appendChild($image);
  $secondDiv.appendChild($h2);
  $secondDiv.appendChild($h3);
  return $liChild;
  console.log('entry', entry);
}

document.addEventListener('DOMContentLoaded', (event: Event) => {
  const $eventTarget = event.target;
  console.log('event', $eventTarget);
  const $ulParent = document.querySelector('ul');
  if (!$ulParent) throw new Error('the query for ulParent failed');
  data.entries.forEach((entry) => {
    const entryElement = renderEntry(entry);
    $ulParent.appendChild(entryElement);
  });
});
