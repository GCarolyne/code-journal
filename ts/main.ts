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
}
$urlLink.addEventListener('input', handleInput);

// All the event.target is is the element that fired the event
// So since I am listening for the input event on my input for the photoURL
// my event.target is referring to that input element that was typed in.
