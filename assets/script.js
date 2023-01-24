
//Evento do CARD 1

const card1= document.getElementById("card1")

card1.addEventListener('mouseover', (event) => {
    event.preventDefault()

    document.getElementById("btn1").style.display="block"
})

card1.addEventListener('mouseout', (event) => {
    event.preventDefault()

    document.getElementById("btn1").style.display="none"
})

//Evento do CARD 2

const card2= document.getElementById("card2")

card2.addEventListener('mouseover', (event) => {
    event.preventDefault()

    document.getElementById("btn2").style.display="block"
})

card2.addEventListener('mouseout', (event) => {
    event.preventDefault()

    document.getElementById("btn2").style.display="none"
})

//Evento do CARD 3

const card3= document.getElementById("card3")

card3.addEventListener('mouseover', (event) => {
    event.preventDefault()

    document.getElementById("btn3").style.display="block"
})

card3.addEventListener('mouseout', (event) => {
    event.preventDefault()

    document.getElementById("btn3").style.display="none"
})

//Evento do CARD 4

const card4= document.getElementById("card4")

card4.addEventListener('mouseover', (event) => {
    event.preventDefault()

    document.getElementById("btn4").style.display="block"
})

card4.addEventListener('mouseout', (event) => {
    event.preventDefault()

    document.getElementById("btn4").style.display="none"
})