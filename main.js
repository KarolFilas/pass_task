const input = document.querySelector('input')
const passwords = ['jeDEN', 'dWa']
const messages = ['super', 'działa!']
const div = document.querySelector('div')

// const showMessage = (e) => {
//     div.textContent = ''
//     for (let i = 0; i < passwords.length; i++) {
//         const value = e.target.value.toLowerCase()
//         if (passwords[i].toLocaleLowerCase() === value) {
//             div.textContent = messages[i]
//         }
//     }
// }

const showMessage = (e) => {
    passwords.forEach((item, i) => {
        if (item.toLocaleLowerCase() === e.target.value.toLocaleLowerCase()) {
            div.textContent = messages[i]
        }
    })
}

input.addEventListener('input', showMessage)
