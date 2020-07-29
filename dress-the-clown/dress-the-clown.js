var headIndex = 0;
var bodyIndex = 0;
var shoesIndex = 0;
var bodyPartSelect = 0;

// Acess the elements from html file by id
var head = document.getElementById("head");
var body = document.getElementById("body");
var shoes = document.getElementById("shoes");

//function that identify a key arrow press
document.addEventListener("keyup", function(event) {
    if (event.key == "ArrowRight") { changeHorizontal(1) } //right arrow will increase the counter
    if (event.key == "ArrowLeft") { changeHorizontal(-1) } //left arrow will decrease it 
    if (event.key == "ArrowUp") { changeVertical(1) }
    if (event.key == "ArrowDown") { changeVertical(-1) }
})

function changeHorizontal(change) {

    if (bodyPartSelect == 0) {

        headIndex += change;
        if (headIndex > 5) {
            headIndex = 0;
        }
        if (headIndex < 0) {
            headIndex = 5;
        }
        head.src = "./images/head" + headIndex + ".png"
    }

    if (bodyPartSelect == 2) {

        bodyIndex += change;
        if (bodyIndex > 5) {
            bodyIndex = 0;
        }
        if (bodyIndex < 0) {
            bodyIndex = 5;
        }
        body.src = "./images/body" + bodyIndex + ".png"

    }

    if (bodyPartSelect == 1) {

        shoesIndex += change;
        if (shoesIndex > 5) {
            shoesIndex = 0;
        }
        if (shoesIndex < 0) {
            shoesIndex = 5;
        }
        shoes.src = "./images/shoes" + shoesIndex + ".png"

    }
}

function changeVertical(change) {

    bodyPartSelect += change;

    if (bodyPartSelect > 2) {
        bodyPartSelect = 0;
    }
    if (bodyPartSelect < 0) {
        bodyPartSelect = 2;
    }
    console.log(bodyPartSelect)
}