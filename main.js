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
    text: `Я просто в восторге от своего нового телефона XY-300! Этот аппарат сочетает в себе стиль, функциональность и высокотехнологичные возможности, что делает его идеальным спутником. Дизайн телефона просто завораживает: тонкий и легкий корпус, изогнутый экран и стильная цветовая гамма – все это создает великолепный внешний вид. Аккумулятор держит заряд на протяжении всего дня, что особенно важно для активной девушки, всегда в движении`
  },
  {
    name: 'Максим Волков',
    image: "img/3c5f1a8d2b7e90d6a1c2b3e4f5d6a7b8.png",
    text: `Телефон XY-300 превзошел все мои ожидания! Камера снимает на уровне зеркалок – делаю потрясающие фото даже ночью. Игры идут на ультра-настройках без лагов, а экран с частотой 120 Гц – это просто сказка. Рекомендую геймерам и фотографам!`
  },
  {
    name: 'Анна Смирнова',
    image: "img/e9f7a3c2b8d6e5f4a1b2c3d4e5f6a7b8.png",
    text: `XY-300 – это не телефон, а мечта! Face ID разблокирует мгновенно, даже в маске. А ещё он невероятно лёгкий – ношу в маленькой сумке и не чувствую тяжести. Зарядка за 30 минут – спасение для вечно спешащих!`
  },
  {
    name: 'Дмитрий Козлов',
    image: "img/1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d.png",
    text: `Купил XY-300 для работы – и теперь это мой офис в кармане. Документы в многозадачном режиме открываются за секунды, а стилус (в комплекте!) делает заметки удобными. И да, он не царапается – проверено ключами.`
  },
  {
    name: 'Екатерина Белова',
    image: "img/f5e4d3c2b1a0f9e8d7c6b5a4f3e2d1c.png",
    text: `Обожаю этот телефон за камеру! Авторежим сам выбирает идеальные настройки – мои фото в соцсетях теперь как из журнала. А ещё он водонепроницаемый – случайно уронила в ванну, и ничего страшного!`
  },
  {
    name: 'Артём Петров',
    image: "img/8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d.png",
    text: `XY-300 – лучший выбор для музыки. Стереодинамики звучат мощнее, чем у колонки за 10к! А Bluetooth 5.2 держит связь даже через 3 стены. Заряда хватает на 2 дня с включённым Spotify.`
  },
  {
    name: 'Ольга Новикова',
    image: "img/2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7.png",
    text: `Этот телефон подарила дочь – и я влюбилась! Большие иконки, голосовой помощник и кнопка SOS для пожилых – продумано всё. А ещё он помещается в любую сумочку, но экран огромный – видно без очков!`
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


for(let i = 0; i < reviews.length; i++){
  
  let dot = document.createElement("div")
  dot.className = "dot";
  dot.id = "dot" + i;
  
  dot.addEventListener("click", function(){
    upploadDots(i, iReviews)
    apdateReview(i)    
  })
  
  dots.appendChild(dot);
}

function upploadDots(iDot, iRev){
   
}







