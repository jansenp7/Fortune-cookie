const btnFindLucky = document.querySelector('#btnFindLucky')
const btnReset = document.querySelector('#btnReset')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let randomNumber = Math.round(Math.random() * 10)

btnFindLucky.addEventListener('click', changePage)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen2.classList.contains('hide')) {
        changePage()
    }
})
btnReset.addEventListener('click', changePage)

function changePage() {

    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')

    screen2.querySelector('p').innerHTML = `${changePhrase()}`
    console.log(randomNumber)
    randomNumber = Math.round(Math.random() * 10)
}

function changePhrase() {
    let phrases = [
        'A vida trará coisas boas se tiver paciência.',
        'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
        'Não compense na ira o que lhe falta na razão.',
        'Defeitos e virtudes são apenas dois lados da mesma moeda.',
        'A maior de todas as torres começa no solo.',
        'Não há que ser forte. Há que ser flexível.',
        'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
        'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
        'O bom-senso vale mais do que muito conhecimento.',
        'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.'
    ]
    let randomPhrase = phrases[randomNumber]
    return randomPhrase
}