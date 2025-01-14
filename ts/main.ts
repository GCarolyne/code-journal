const $inputUrl = document.querySelector('.url') as HTMLInputElement;
if (!$inputUrl) throw new Error('query for input photo url failed. ');

const $title = document.querySelector('.title') as HTMLInputElement;
if (!$title) throw new Error('query for title failed');

const $placeholderImg = document.querySelector('.placeholderIMG');
if (!$placeholderImg) throw new Error('query for placeholder image failed.');

const $notes = document.querySelector('.notes') as HTMLInputElement;
if (!$notes) throw new Error('query for $notes failed');

const $button = document.querySelector('button');
if (!$button) throw new Error('query for the button failed.');

const $allForm = document.querySelector('form');
if (!$allForm) throw new Error('query for form failed');

$inputUrl.addEventListener('input', (event: Event) => {
  const $eventTarget = event.target;
  console.log('$eventTarget', $eventTarget);
  const inputValue = $inputUrl.value;
  console.log('inputValue', inputValue);
  if ($eventTarget === $inputUrl) {
    $placeholderImg.setAttribute('src', inputValue);
  } else {
    $placeholderImg.setAttribute('src', 'images/placeholder-image-square.jpg');
  }
});

$button.addEventListener('submit', (event: Event) => {
  const $eventTarget = event.target;
  console.log('$eventTarget', $eventTarget);
  event.preventDefault();
  const entryObject: Entries = {
    title: $title.value,
    url: $inputUrl.value,
    notes: $notes.value,
    entryId: data.nextEntryId,
  };
  data.nextEntryId++;
  data.entries.push(entryObject);
  console.log('entryObject', entryObject);
  $placeholderImg.setAttribute('src', 'images/placeholder-image-square.jpg');
  $allForm.reset();
});
