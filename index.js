const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const tabs = document.querySelectorAll('.tab');
const hrs = document.querySelectorAll('.hrs');
const switcher = document.querySelectorAll('.switcher');
const arrow = document.querySelectorAll('.arrow');
const answers = document.querySelectorAll('.answer');
const email = document.querySelector('.emailplace');
const contact = document.querySelector('.contactbtn');
const error = document.querySelector('.error');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
});

switcher.forEach((switchs) => {
  switchs.addEventListener('click', (e) => {
    if (e.target === switcher[1]) {
      e.preventDefault();
      tabs[0].classList.add('hidden');
      tabs[1].classList.remove('hidden');
      tabs[2].classList.add('hidden');
      hrs[1].classList.remove('hidden');
      hrs[2].classList.add('hidden');
      hrs[0].classList.add('hidden');
      switcher[1].classList.add('text-veryDarkBlue');
      switcher[2].classList.remove('text-veryDarkBlue');
      switcher[0].classList.remove('text-veryDarkBlue');
      switcher[0].classList.add('text-grayishBlue');
    } else if (e.target === switcher[2]) {
      e.preventDefault();
      tabs[0].classList.add('hidden');
      tabs[1].classList.add('hidden');
      tabs[2].classList.remove('hidden');
      hrs[1].classList.add('hidden');
      hrs[2].classList.remove('hidden');
      hrs[0].classList.add('hidden');
      switcher[1].classList.remove('text-veryDarkBlue');
      switcher[2].classList.add('text-veryDarkBlue');
      switcher[0].classList.remove('text-veryDarkBlue');
      switcher[0].classList.add('text-grayishBlue');
    } else if (e.target === switcher[0]) {
      e.preventDefault();
      tabs[0].classList.remove('hidden');
      tabs[1].classList.add('hidden');
      tabs[2].classList.add('hidden');
      hrs[1].classList.add('hidden');
      hrs[2].classList.add('hidden');
      hrs[0].classList.remove('hidden');
      switcher[1].classList.remove('text-veryDarkBlue');
      switcher[2].classList.remove('text-veryDarkBlue');
      switcher[0].classList.remove('text-grayishBlue');
      switcher[0].classList.add('text-veryDarkBlue');
    }
  });
});

arrow.forEach((question) => {
  question.addEventListener('click', (e) => {
    if (e.target === arrow[0]) {
      answers[0].classList.toggle('hidden');
      arrow[0].classList.toggle('fa-arrow-down');
      arrow[0].classList.toggle('fa-arrow-up');
    } else if (e.target === arrow[1]) {
      answers[1].classList.toggle('hidden');
      arrow[1].classList.toggle('fa-arrow-down');
      arrow[1].classList.toggle('fa-arrow-up');
    } else if (e.target === arrow[2]) {
      answers[2].classList.toggle('hidden');
      arrow[2].classList.toggle('fa-arrow-down');
      arrow[2].classList.toggle('fa-arrow-up');
    } else if (e.target === arrow[3]) {
      answers[3].classList.toggle('hidden');
      arrow[3].classList.toggle('fa-arrow-down');
      arrow[3].classList.toggle('fa-arrow-up');
    }
  });
});

email.addEventListener('keydown', (e) => {
  email.value.trim();
});

contact.addEventListener('click', (e) => {
  if (!email.value.includes('@') || !email.value.includes('.')) {
    error.classList.remove('hidden');
  } else if (email.value.includes('@') && email.value.includes('.')) {
    error.classList.add('hidden');
    email.value = '';
  }
});
