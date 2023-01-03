
const Quotes = [
    {
        title:  'Dream',

        quote: `My name is abdurrasheed falalu daura,
        from javascript.

        `,
        person: 'Abdool'
    },
    {
        title:  'Hope',

        quote: `My name is Abbaraees daura,
        from python.

        `,
        person: 'Muhammad'
    },
    {
        title:  'Problem',

        quote: `“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Anonymous

        `,
        person: 'Anonymous'
    },
    {
        title:  'Success',

        quote: `"Success is not final; failure is not fatal: It is the courage to continue that counts." — Abdurrasheed
        `,
        person: 'Abdurrasheed Falalu'
    },
    {
        title:  'Life',

        quote: `“Don't let yesterday take up too much of today.” — Muhammad Lawal
        `,
        person: 'Abba Raees'
    },
    {
        title:  'Work',

        quote: `
        “Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus. “ — Abdulkarim

        `,
        person: 'Abdulkarim'
    },
    {
        title:  'Students',

        quote: `“You've got to get up every morning with determination if you're going to go to bed with satisfaction.” — Teacher


        `,
        person: 'Teacher'
    }

    
]


let quote = document.querySelector('.quote > span')
let person = document.querySelector('.person > span')
let title = document.getElementById('header')
let btn = document.getElementById('btn')


btn.addEventListener('click', (e)=>{
    e.preventDefault()
    let randomQuote = Math.floor(Math.random()*Quotes.length)

    title.textContent = Quotes[randomQuote].title
    quote.textContent = Quotes[randomQuote].quote
    person.textContent = Quotes[randomQuote].person
})