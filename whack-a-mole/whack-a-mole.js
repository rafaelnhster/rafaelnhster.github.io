  // -    -   -   -   -  //
  // JAVASCRIPT CARNIVAL //
  // -    -   -   -   -  //


  //(1) Indetify the table by id and store in a variable
  var table = document.getElementById("myTable");

  //(2)create an array that will be filled with cells coming from the identifycells function
  var holes = [];

  function identifyCells() {

      for (var i = 0; i < table.rows.length; i++) {
          for (var c = 0; c < table.rows[i].cells.length; c++) {
              holes.push({
                  "rows": i,
                  "cells": c
              })
          }
      }
  }
  //(4)This function generates a random number, and it will be used to to 
  //   get the corresponding cell from inside  array holes[] 

  function indexer() {
      var randomNum = Math.floor((Math.random() * 25) + 0);
      return randomNum;
  }

  //(5)
  var randomIndex = indexer();
  //(6)
  var randomCell = holes[randomIndex];


  identifyCells();
  indexer();
  moleInTheCell();
  playAudio();

  //(3)indentifycells creates reference for all the cells



  function moleInTheCell() {

      var img = document.createElement("img");
      img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Soccer_ball.svg/1200px-Soccer_ball.svg.png";
      var randomCell = holes[indexer()];
      let randomX = table.rows[randomCell.rows].cells[randomCell.cells];
      img.addEventListener('click', processClick)
          // replace the following with CSS
      img.style.width = "100%";
      randomX.appendChild(img)

      //   let randomX = document.getElementsByTagName("td");
      //   img.setAttribute("onclick", " playAudio()")


      randomX.appendChild(img)
  }

  function processClick(evt) {
      // Remove current Mole
      this.remove();
      // Add New Mole
      moleInTheCell();
      playAudio();
  }

  function playAudio() {
      var shot = new Audio('Soccer Pass Sound Effect.mp3')
      shot.play();
  }

  console.log(holes)