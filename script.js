const content = document.querySelector('#content')
const newGridBtn = document.querySelector('#new-grid-btn')

newGridBtn.addEventListener('click', () => {
  const count = +prompt('Enter size of grid between 10 and 64:')
  content.textContent = ''
  generateGrid(count)
})

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateGrid(n) {
  const squareSide = (600 / n) + 'px'

  for (let i = 0; i < n; i++) {
    const line = document.createElement('div')
    line.style.height = squareSide
    line.classList.add('line')
    content.appendChild(line)

    for (let j = 0; j < n; j++) {
      const square = document.createElement('div')
      square.classList.add('square')
      square.style.height = squareSide
      square.style.width = squareSide
      square.addEventListener('mouseover', () => {
        square.style.backgroundColor = getRandomColor()
      })
      square.addEventListener('mouseout', () => {
        square.style.backgroundColor = 'antiquewhite'
      })
      line.appendChild(square)
    }

  }
}

generateGrid(15)