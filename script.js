const btn = document.querySelector('button');

function buttonFunction() {
  document.body.style.backgroundColor = 'lightblue';
  console.log('Hello World!');
}

btn.addEventListener('click', buttonFunction);