const $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formInfo = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value,
  };
  console.log('messageData:', formInfo);
  $contactForm.reset();
}
