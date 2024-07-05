'use strict'
function addClass() {
  const parh = document.getElementById('text');
  const classname = document.getElementById('classInput');
  parh.className = classname.value;
}
function changeClass(num) {
  let k = document.getElementById(num);
  k.classList.toggle('hide');
}

function clicked() {
  let elem = document.getElementById('btn');
  elem.textContent = 'clicked';
  elem.style.pointerEvents = 'none';
}


