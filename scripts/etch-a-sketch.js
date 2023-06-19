const container = document.querySelector('.container');

for (let i = 1; i <= 256; i++) {
    let newDiv = document.createElement('div');
    newDiv.id = 'g' + i;
    newDiv.className = 'grid';
    container.appendChild(newDiv);
}