// starts everything by getting the forms submit
document.getElementById('sizePicker').onsubmit = function () {
    getValues();
};

/**
* @description gets the user input values
*/
function getValues() {
    event.preventDefault(); // to prevent the view from refreshing after submit
    makeGrid(document.getElementById('inputHeight').value, document.getElementById('inputWidth').value);
}

/**
* @description creates the table grid depending on user input for height and width
* @param {number} height - the amount of table rows
* @param {number} width - the amount of table <td> elements (columns)
*/
function makeGrid(height, width) {
    console.log('sexy: ', height);
    console.log('time: ', width);
    let tableGrid = '';

    for (let h = 0; h < height; h++) {
        tableGrid += `<tr class="row-${h}">`;
        for (let w = 0; w < width; w++) {
            tableGrid += `<td class="box" id="row-${h}_box-${w}"></td>`;
        }
        tableGrid += '</tr>';
    }
    console.log('tableGrid: ', tableGrid);

    const table = document.getElementById("pixelCanvas");
    table.innerHTML = tableGrid;

    makeGridClickable();
}

/**
* @description makes the grid clickable
*/
function makeGridClickable() {
    let boxes = document.getElementsByClassName('box');
    console.log('boxes: ', boxes);

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", function (event) {
            let boxClicked = event.target;
            boxClicked.style.backgroundColor = document.getElementById("colorPicker").value;
        });
    }
}
