const btn = document.querySelector('button');

function buttonFunction() {
  alert('Hello World!');
  console.log('Hello World!');
}

btn.addEventListener('click', buttonFunction);