const  modelBlock = document.getElementById('modelBlock')
const closeModelBlock = document.querySelector(".close");
const contactButton = document.getElementById("contactButton")

contactButton.addEventListener("click", ()=>{
    modelBlock.style.display = "block"
    console.log(111)
})
closeModelBlock.addEventListener("click", ()=>{
  modelBlock.style.display = "none"
  console.log(111)
})
  

const reviews = [
  {
    name: 'Александра Лаптева',
    image: "img/dfa28eb612c070c576970698a94dbf2d.png",
    text: `Я просто в восторге от своего нового телефона XY-300! Этот аппарат сочетает в себе стиль, функциональность и высокотехнологичные возможности, что делает его идеальным спутником.  Аккумулятор держит заряд на протяжении всего дня, что особенно важно для активной девушки`
  },
  {
    name: 'Максим Волков',
    image: "img/3553251501638077867.png",
    text: `Телефон XY-300 превзошел все мои ожидания! Камера снимает на уровне зеркалок – делаю потрясающие фото даже ночью. Игры идут на ультра-настройках без лагов, а экран с частотой 120 Гц – это просто сказка. Рекомендую геймерам и фотографам!`
  },
  {
    name: 'Анна Смирнова',
    image: "img/photoAnne.jpg",
    text: `XY-300 – это не телефон, а мечта! Face ID разблокирует мгновенно, даже в маске. А ещё он невероятно лёгкий – ношу в маленькой сумке и не чувствую тяжести. Зарядка за 30 минут – спасение для вечно спешащих!`
  },
  {
    name: 'Дмитрий Козлов',
    image: "img/dsw3E4d4gYo0CNWsag6Kww_b.jpg",
    text: `Купил XY-300 для работы – и теперь это мой офис в кармане. Документы в многозадачном режиме открываются за секунды, а стилус (в комплекте!) делает заметки удобными. И да, он не царапается – проверено ключами.`
  },
  {
    name: 'Екатерина Белова',
    image: "img/uhod-za-kozhey-litsa-posle-45-let-1.jpg",
    text: `Обожаю этот телефон за камеру! Авторежим сам выбирает идеальные настройки – мои фото в соцсетях теперь как из журнала. А ещё он водонепроницаемый – случайно уронила в ванну, и ничего страшного! Рекомендую каждому!`
  },
  {
    name: 'Артём Петров',
    image: "img/1663097412_7-mykaleidoscope-ru-p-zameshatelstvo-vkontakte-8.jpg",
    text: `XY-300 – лучший выбор для музыки. Стереодинамики звучат мощнее, чем у колонки за 10к! А Bluetooth 5.2 держит связь даже через 3 стены. Заряда хватает на 2 дня с включённым Spotify. Пользуюсь им и не нарадуюсь, побольше бы такого`
  },
  {
    name: 'Ольга Новикова',
    image: "img/68fcd7b0-c1a8-11ec-9bfd-7d21570b9af9.jpg",
    text: `Этот телефон подарила дочь – и я влюбилась! Большие иконки, голосовой помощник и кнопка SOS – продумано всё. А ещё он помещается в любую сумочку, но экран огромный – видно без очков! Такая сказка а не просто техника`
  }
];

const leftBtn = document.getElementById('reviewButtonLeft');
const rightBtn = document.getElementById('reviewButtonRigth');

const photoReview = document.getElementById('photoReview')
const nameReview = document.getElementById('nameReview')
const textReview = document.getElementById('textRexiew');


let iReviews = 0; 
apdateReview(iReviews);

leftBtn.addEventListener('click', ()=> {
    iReviews--
    if (iReviews < 0) iReviews = reviews.length-1;
    apdateReview(iReviews);
})
rightBtn.addEventListener('click', ()=> {
  iReviews++
  if (iReviews > reviews.length-1) iReviews = 0;
  apdateReview(iReviews);
  console.log(222)
})

function apdateReview(iRev){
  const review = reviews[iRev];
  photoReview.src = review.image;
  nameReview.textContent = review.name;
  textReview.textContent = review.text;
  console.log(222)
}


const dots = document.getElementById("dots");

function upploadDots(){
 
}



for(let i = 0; i < reviews.length; i++){
  
  let dot = document.createElement("div")
  dot.className = "dot";
  dot.id = "dot" + i;
  dot.addEventListener("click", function(){
    
    apdateReview(i)    
  })
  
  dots.appendChild(dot);
}








