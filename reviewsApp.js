const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('prev')
const randomBtn = document.getElementById('random')

const author = document.getElementById('author')
const title = document.getElementById('jobTitle')
const review = document.getElementById('review')
const image = document.getElementById('avatar')


const personRev=[{
    id:0,
    name: 'Имя Фамилия',
    imgUrl: 'icons/person1.png',
    jobTitle: 'Должность',
    review: 'Отзыв',
    },
    {
        id:1,
        name: 'Alice Cooper',
        imgUrl: 'icons/person2.png',
        jobTitle: 'Singer',
        review: `Шикарный сайт, полный хэви мэтал, рок!!!! Очень рад что смог увидеть такое в живую, кайф!`,
    },
    {
        id:2,
        name: 'Victor Tsoi',
        imgUrl: 'icons/person3.png',
        jobTitle: 'Full Stack Developer',
        review: `Цой жив, всех обнял, поцеловал`,
    },
    {
        id:3,
        name: 'Igor',
        imgUrl: 'icons/person4.png',
        jobTitle: 'Frontend Developer',
        review: `I love frontend!!! Backend its poop, compared to front!`
    },
    {
        id:4,
        name: 'Angelina Johnson',
        imgUrl: 'icons/person5.png',
        jobTitle: 'UX-UI',
        review: `I dont know how it works! But its work! Sasha Youvelir the best!`
    }
]

function showRev(person){
    const item= personRev[person]
    if(item) {
        image.src = item.imgUrl
        author.textContent = item.name
        title.textContent = item.jobTitle
        review.textContent = item.review
    }
    else {
        console.error('Item not found!')
    }
}
function genRandomId(currentID){
    let randomId
    do {
        randomId = Math.floor(Math.random() * (personRev.length - 1)+1);
    }
    while(randomId === currentID)
    return randomId;
}


let itemID=1
console.log(itemID)
console.log(personRev)


window.addEventListener('DOMContentLoaded', function(){
    showRev(0)
    setTimeout(() => {
        showRev(itemID); // Отображение случайного отзыва
    }, 300);
})

nextBtn.addEventListener('click', function(){
    if (itemID>=1 && itemID<personRev.length-1){
    itemID++
    showRev(itemID)
    }
})

prevBtn.addEventListener('click', function(){
    if (itemID>1 && itemID<=personRev.length-1){
        itemID--
        showRev(itemID)
    }
})

randomBtn.addEventListener('click', function () {
    itemID = genRandomId(itemID);
    showRev(itemID);
});

/*
randomBtn.addEventListener('click', function(){
    itemID=Math.floor(Math.random()*(personRev.length));
    console.log(itemID)
    showRev(itemID)
})*/
