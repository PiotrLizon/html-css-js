const first_name = document.getElementById('fname')
const last_name = document.getElementById('lname')
const number = document.getElementById('number')
const email = document.getElementById('email')
const submit = document.getElementById('submit')

first_name.addEventListener('input', () => {
    if (first_name.value.length > 10) {
        alert('Imię jest zbyt długie. Maksymalna liczba znaków to 10.')
        first_name.value = ''
    }
})

last_name.addEventListener('input', () => {
    if (last_name.value.length > 15) {
        alert('Nazwisko jest zbyt długie. Maksymalna liczba znaków to 15.')
        last_name.value = ''
    }
})

number.addEventListener('input', () => {
    if (number.value.length > 9) {
        alert('Podaj dziewięciocyfrowy numer telefonu.')
        number.value = ''
    }
})

// ZROBIĆ ONSUBMIT




