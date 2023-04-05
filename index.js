console.log('funguju')

const users = [
	'petr',
	'jana-34',
	'husky16',
	'66beruska',
	'thegodofU',
	'rene_gade',
	'tommy',
	'luciluci',
	'tanko',
	'poltergeist',
	'hlava-havla',
	'telo-ramba',
]

//Pokud uživatel zadá uživatelské jméno, které je již obsaženo v poli users, 
//vypište do prvku s třídou reg-form__error chybovou hlášku ve smyslu, že zadané uživatelské jméno je již zabráno.
const user = document.querySelector('#username')
const form = document.querySelector('.reg-form')
const button = document.querySelector('#btn-register')
const errorElement = document.querySelector('.reg-form__error')

button.addEventListener('click', (event) =>{
	event.preventDefault()
	const userName= user.value.trim()
	if (users.includes(userName)) { 
		errorElement.textContent = 'Toto uživatelské jméno je již zabráno.';
	  }
	
})
//Zkontrolujte, že heslo zadané do prvního políčka je dostatečně bezpečené. 
//Heslo považujeme za bezpečné, pokud má alespoň 
//10 znaků nebo obsahuje alespoň jeden ze znaků pomlčka -, podtržítko _ nebo dvojtečka :.
const password = document.querySelector('#pass1')
pass1.addEventListener('input', (event) => {
    const password = event.target.value.trim()

    if (password.length < 10 && !password.match(/[-_:]/)) {
        errorElement.textContent = 'Heslo musí mít alespoň 10 znaků nebo obsahovat pomlčku, podtržítko nebo dvojtečku.'
    } else {
        errorElement.textContent = ''
    }
})

