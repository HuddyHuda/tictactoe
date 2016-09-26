var player_one = 1
var case1 = document.querySelector('#case1 img')
var case2 = document.querySelector('#case2 img')
var case3 = document.querySelector('#case3 img')
var case4 = document.querySelector('#case4 img')
var case5 = document.querySelector('#case5 img')
var case6 = document.querySelector('#case6 img')
var case7 = document.querySelector('#case7 img')
var case8 = document.querySelector('#case8 img')
var case9 = document.querySelector('#case9 img')

function display_input (square) {
  var square = document.getElementById(square)
  if (player_one === 1) {
    var imgx = square.querySelector('img')
    imgx.src = 'images/cross.png'
    var imgxatt = document.createAttribute('class')
    imgxatt.value = 'cross'
    imgx.setAttributeNode(imgxatt)
    square.appendChild(imgx)
    player_one = 0
    checkforWinningX();
  } else {
    var imgo = square.querySelector('img')
    imgo.src = 'images/circle.png'
    var imgoatt = document.createAttribute('class')
    imgoatt.value = 'circle'
    imgo.setAttributeNode(imgoatt)
    square.appendChild(imgo)
    player_one = 1;
    checkforWinningO();
  }
}

function checkforWinningX () {

  if (
    (case1.classList.contains('cross')
    && case2.classList.contains('cross')
    && case3.classList.contains('cross'))
    ||
    (case4.classList.contains('cross')
    && case5.classList.contains('cross')
    && case6.classList.contains('cross'))
    ||
    (case1.classList.contains('cross')
    && case4.classList.contains('cross')
    && case7.classList.contains('cross'))
    ||
    (case1.classList.contains('cross')
    && case5.classList.contains('cross')
    && case9.classList.contains('cross'))
    ||
    (case3.classList.contains('cross')
    && case6.classList.contains('cross')
    && case9.classList.contains('cross'))
    ||
    (case7.classList.contains('cross')
    && case8.classList.contains('cross')
    && case9.classList.contains('cross'))
    ||
    (case3.classList.contains('cross')
    && case5.classList.contains('cross')
    && case7.classList.contains('cross'))
    ||
    (case2.classList.contains('cross')
    && case5.classList.contains('cross')
    && case8.classList.contains('cross'))
  ) {
    document.location.reload(true)
  // do some stuff
  }



}

function checkforWinningO () {

  if (
    (case1.classList.contains('circle')
    && case2.classList.contains('circle')
    && case3.classList.contains('circle'))
    ||
    (case4.classList.contains('circle')
    && case5.classList.contains('circle')
    && case6.classList.contains('circle'))
    ||
    (case1.classList.contains('circle')
    && case4.classList.contains('circle')
    && case7.classList.contains('circle'))
    ||
    (case1.classList.contains('circle')
    && case5.classList.contains('circle')
    && case9.classList.contains('circle'))
    ||
    (case3.classList.contains('circle')
    && case6.classList.contains('circle')
    && case9.classList.contains('circle'))
    ||
    (case7.classList.contains('circle')
    && case8.classList.contains('circle')
    && case9.classList.contains('circle'))
    ||
    (case3.classList.contains('circle')
    && case5.classList.contains('circle')
    && case7.classList.contains('circle'))
    ||
    (case2.classList.contains('circle')
    && case5.classList.contains('circle')
    && case8.classList.contains('circle'))
  ) {
    document.location.reload(true)
  // do some stuff
  }






}




document.getElementById('restart-btn').addEventListener('click', function () {
  document.location.reload(true)
})
