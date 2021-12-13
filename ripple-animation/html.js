
let grid = document.createElement('div')
grid.classList.add('grid-container')
document.body.appendChild(grid)

for(let i = 0; i<1000; i++){
    let div = document.createElement('div')
    div.classList.add('ripple-div')
    grid.appendChild(div)
}