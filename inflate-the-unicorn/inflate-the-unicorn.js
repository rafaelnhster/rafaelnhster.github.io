// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //



//let unicorns = document.getElementsByClassName('inflate-the-unicorn');

//for(var i = 0; i<unicorns.length; i++){
// unicorns[i].onclick('click', clickUnicorns)
//}

var count1 = 0;
var count2 = 0;
var count3 = 0;
document.getElementById("u1").addEventListener("click", changeIMG1);
document.getElementById("u2").addEventListener("click", changeIMG2);
document.getElementById("u3").addEventListener("click", changeIMG3);

function changeIMG1() {
  if (count1 == 0) {
    document.getElementById("u1").src = "images/unicorn-1.png "
  }
  else if (count1 == 1) {
    document.getElementById("u1").src = "images/unicorn-2.png "
  }

  else if (count1 == 2) {
    document.getElementById("u1").src = "images/unicorn-3.png "
  }
  else if (count1 == 3) {
    document.getElementById("u1").src = "images/unicorn-0.png "
  }


  if (count1 === 3) {
    count1 = 0;
  } else {
    count1++;
  }
  console.log(count1)
}

function changeIMG2() {
  if (count1 == 0) {
    document.getElementById("u2").src = "images/unicorn-1.png "
  }
  else if (count1 == 1) {
    document.getElementById("u2").src = "images/unicorn-2.png "
  }

  else if (count1 == 2) {
    document.getElementById("u2").src = "images/unicorn-3.png "
  }
  else if (count1 == 3) {
    document.getElementById("u2").src = "images/unicorn-0.png "
  }


  if (count1 === 3) {
    count1 = 0;
  } else {
    count1++;
  }
  console.log(count1)
}

function changeIMG3() {
  if (count1 == 0) {
    document.getElementById("u3").src = "images/unicorn-1.png "
  }
  else if (count1 == 1) {
    document.getElementById("u3").src = "images/unicorn-2.png "
  }

  else if (count1 == 2) {
    document.getElementById("u3").src = "images/unicorn-3.png "
  }
  else if (count1 == 3) {
    document.getElementById("u3").src = "images/unicorn-0.png "
  }


  if (count1 === 3) {
    count1 = 0;
  } else {
    count1++;
  }
  console.log(count1)
}