const container = document.querySelector('.container');
const btnSetSquares = document.querySelector('#btnSetSquares');
let numberOfSquares = 16;
let sizePercentage = '6.25%';

function setSquareGrid(number) {
    if (number > 100) {
        alert('You have set too much. Limit to 100 only.');
        return;
    }

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    sizePercentage = computeSizePercentage(number);
    let numberSquared = number * number;

    for (let i = 1; i <= numberSquared; i++) {
        let newDiv = document.createElement('div');
        newDiv.id = 'g' + i;
        newDiv.className = 'grid';
        newDiv.setAttribute(
            'style',
            'width: ' 
            + sizePercentage 
            + '; height: ' 
            + sizePercentage 
            + ';'
        );
        newDiv.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = 'black';
            },
            false
        );
        container.appendChild(newDiv);
    }
}

function computeSizePercentage(number) {
    let size = ((600 / number) / 600) * 100;
    return size + '%';
}

btnSetSquares.addEventListener('click', () => {
    numberOfSquares = prompt('Set number of squares:');
    setSquareGrid(numberOfSquares);
});

setSquareGrid(numberOfSquares);
