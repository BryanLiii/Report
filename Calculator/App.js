const screen = document.querySelector('.screen')
const keys = document.querySelectorAll('.key')
const keyEqual = document.querySelector('.key-equal')
const keyC = document.querySelector('.key-c')

keys.forEach((key) => {
    key.addEventListener('click', (e) => {
        const value = e.target.dataset.value
        if(value){
            screen.value += value
        }
    })
})
keyEqual.addEventListener('click', () => {
    screen.value === '' ? screen.value='' : screen.value = eval(screen.value)
})

keyC.addEventListener('click', () => {
    screen.value ? screen.value = '' : screen.value
})
