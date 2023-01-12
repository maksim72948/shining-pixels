const board = document.querySelector('#board')
const SQUARE_NUMBER = ((window.screen.height)*3/4)-(window.screen.height%(window.screen.width-2))

for (let i = 0; i < SQUARE_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    
    square.addEventListener('mouseover', (event)=>{
        event.target.style.background = 'rgb(Math.floor(Math.random() * 100) + 155,Math.floor(Math.random() * 100) + 155,Math.floor(Math.random() * 100) + 155)'
    })
    square.addEventListener('mouseleave', (event)=>{
        event.target.style.background= '#333'
    })
    
    board.append(square)
}

