'use strict';

let infantryImage = document.getElementsByClassName('infantry');

infantryImage.onclick = () => {
  let mySrc = infantryImage.getAttribute('src');
  if (mySrc === 'img/cross-rifles stictched.jpeg') {
    infantryImage.setAttribute('src', 'img/CIB.png');
  } else {
    infantryImage.setAttribute('src', 'img/cross-rifles stictched.jpeg');
  }
};

