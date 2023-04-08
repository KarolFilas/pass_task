const input = document.querySelector('input')
const passwords = ['jeDEN', 'dWa']
const messages = ['super', 'działa!']
const div = document.querySelector('div')

const LCPasswors = passwords.map((password, index) => {
    return password.toLocaleLowerCase()
})

const showMessage = (e) => {
    const textInput = e.target.value.toLocaleLowerCase();
    div.textContent = ''
    for (let i = 0; i < LCPasswors.length; i++) {
        if (textInput === LCPasswors[i]) {
            div.textContent = messages[i]
        }
    }
}

console.log(LCPasswors);

// const showMessage = (e) => {
//     div.textContent = ''
//     const value = e.target.value.toLowerCase()
//     for (let i = 0; i < passwords.length; i++) {
//
//         if (passwords[i].toLocaleLowerCase() === value) {
//             div.textContent = messages[i]
//         }
//     }
// }

// const showMessage = (e) => {
//     passwords.forEach((item, i) => {
//         if (item.toLocaleLowerCase() === e.target.value.toLocaleLowerCase()) {
//             div.textContent = messages[i]
//         }
//     })
// }

input.addEventListener('input', showMessage)
