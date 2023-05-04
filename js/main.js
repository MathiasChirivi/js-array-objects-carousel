console.log("Succes");

//Create object Array
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },{
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
console.log(images)


const imagesScheda = document.querySelector(".carouselItems");
const thumbnails = document.querySelector(".thumbnails")


images.forEach((element) =>{
    imagesScheda.innerHTML +=
    `<div class="item">
        <img src = ./${element.image}>
    <div class="cardText">
    <h2>${element.title}</h2>
    <p>${element.text}</p>
    </div>
    </div>`
    
    thumbnails.innerHTML += 
    `<div class="imagthumb">
    <img src=./${element.image}>
    </div>`;
})

const next = document.getElementById("carouselNext");
const prev = document.getElementById("carouselPrev");

let itemsActive = 0;
const active = document.getElementsByClassName("item");
active[itemsActive].classList.add("active");


/******************************************
                 FUNZIONI
 *****************************************/
 next.addEventListener('click', function () {
    active[itemsActive].classList.remove('active');
    if(itemsActive == 0){
        itemsActive = 4;
    }
    else{
        itemsActive--;
    }
    active[itemsActive].classList.add('active');
 })

const indietro = prev.addEventListener('click', function () {
    active[itemsActive].classList.remove('active');
    if(itemsActive == 4){
        itemsActive = 0;
    }
    else{
        itemsActive++;
    }
    active[itemsActive].classList.add('active');
 })

 console.log(indietro)

