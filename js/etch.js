const gridContainer = document.getElementById("etcher");
var leftElement = document.getElementById("leftKnob");
var rightElement = document.getElementById("rightKnob");
var slider = document.querySelector("#gridSetting");
var resetButton = document.getElementById('resetButton');
var container = document.getElementsByClassName("mainColumn");
var gridBuilder = 50;

slider.oninput = function() {
    gridBuilder = this.value
    console.log(gridBuilder)
    return resetGrid ()
}

function BuildGrid(gridsize) {
    console.log("buildgrid func run")
    var columnNum = gridsize;
    var totalNum = Math.pow(gridsize, 2)*.7;
    gridContainer.style.gridTemplateColumns = `repeat(${columnNum},1fr)`;
    for (let i = 0; i < totalNum; ++i) {
        const gridBox = Object.assign(document.createElement('div'), { className: 'etch-item'});
        gridContainer.append(gridBox);
    }
    
}

function resetGrid () {
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }
    BuildGrid(gridBuilder);
    etchTime();
}

function etchTime () {
    const cellID = document.getElementsByClassName("etch-item");

    for (var i = 0; i < cellID.length; i++) {
        cellID[i].addEventListener("mouseover", mouseHover, false);
    };
;}

function mouseHover () {
    container[0].className = "column mainColumn" 
    this.setAttribute("style", "background-color: #424649;")
}

function mousemove(event){
    leftElement.style.transform = `rotate(${event.pageX/2}deg)`;
    rightElement.style.transform = `rotate(${event.pageY/2}deg)`;
}

gridContainer.addEventListener("mouseover", mousemove, false);

resetButton.addEventListener("click", function () {
    container[0].className = "column mainColumn shake"
    resetGrid();
});

BuildGrid(gridBuilder);
etchTime();

