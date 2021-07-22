// import { add } from 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js';

let body = document.querySelector('.mainer');
console.log('njm');
window.onload = function(){
  document.querySelector('.page-text__sub').classList.add('show')
    document.addEventListener('click', targetCatch);
}
function targetCatch(e){
let targetEl = e.target;
// console.log(targetEl);


};

let shows = document.querySelectorAll('.shows');

window.addEventListener('scroll', ()=>{
  for (let f = 0; f <shows.length; f++) {
    const element = shows[f];
    scrollShow(element);
  }
 
});

function scrollShow(element){
let coords = window.pageYOffset;
let elemY  = element.offsetTop;
let elemH = element.offsetHeight*2  ;
let hSum = elemY*0.4;

 if(coords >=  hSum){
  
   element.classList.add('show')
 }
}




scrollShow(document.querySelector('.products'));


new Swiper('.products__body', {
 

  loop:true,
  speed:1700,

  loopAdditionalSlides: 5,
  preloadImages :false, 
  parallax:true,
  slidesPerScroll:1,
  slidesPerView: 'auto',
  navigation:{
    nextEl:'.products-body__btn',
    

  },
  // breakpoints:{
  //   320:{
  //     centeredSlides: true,
  //     slidesPerGroup : 1,
  //   },
  //   720:{
       
     
  //   },
  // },
})
new Swiper('.combo-body', {
 

  loop:true,
  speed:1700,
  centeredSlides:true,
  loopAdditionalSlides: 5,
  preloadImages :false, 
  parallax:true,
  slidesPerScroll:1,
  slidesPerView: 'auto',
  navigation:{
    nextEl:'.combo__btn',
    

  },
  breakpoints:{
    320:{
      
      slidesPerGroup : 1,
      slidesPerView: 1.2,
    },
    720:{
     
     
    },
  },
})

const tabs = document.querySelectorAll('.giftset-body-tabs__tab');
const contents = document.querySelectorAll('.giftset-body-item');
const header = document.querySelector('.header')
// tabs.forEach((item)=>{
//   item.addEventListener('click', ()=>{
//     let dataTab = item.getAttribute('data-tab');
//     console.log(dataTab); 
//   })
// }); document.querySelectorAll('.quantity__indicator')
 for(let i=0; i <tabs.length; i++){
   (tabs[i]).addEventListener('click', function(){
    let dataTab = tabs[i].getAttribute('data-tab');
    let item = tabs[i];
    console.log(item);
   
   
   for (let j = 0; j < contents.length; j++) {
    const element = contents[j];
   let contentId =  element.getAttribute('data-tab-content');
   console.log(contentId)  
  
  if(dataTab === contentId){
    item.classList.add('active');
    element.classList.add('active');
    console.log(item, element)
  }
  else{
    tabs[j].classList.remove('active');
    element.classList.remove('active');
  }}})
 }

 let btnTop = document.querySelector('.gotop-btn')
window.addEventListener('scroll', ()=>{
    let coords = window.innerHeight;
    let scroll = window.pageYOffset

  
    if(scroll > coords){
        btnTop.classList.add('active') ;
        header.classList.add('active')
    };
    if(scroll < coords){
        btnTop.classList.remove('active') ;
        header.classList.remove('active');
    };
});
btnTop.addEventListener('click', function(e){
  e.preventDefault();
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    });
});














// let count = 0;
// for (let i = 0; i < buttons.length; i++) {
//   const element = buttons[i];
  
  
//   element.addEventListener('click', function(){
//     count++;
//     addToCart(element);
  
//     carts.forEach((item)=>{
//       let colsest = item.querySelector('.quantity__indicator');
//       colsest.textContent = count;
     
//       item.addEventListener('click', (e)=>{
//         if(count > 0){
//         document.getElementById('storage').classList.toggle('active');}
         
//       })
//       if(count > 0){
      
//         colsest.classList.add('active');
//         item.classList.add('active');
//       }else if (count == 0) {
//       colsest.classList.remove('active');
//       item.classList.remove('active');
//       }
//     })
    
//     const trash = document.querySelectorAll('.storage-item__trash');
//     for (let k = 0; k < trash.length; k++) {
//       console.log('trash')
//      const elm = trash[k];
//      elm.addEventListener('click', ()=>{
//        console.log(count);
//        removeFromCart(elm);
//        count +=-1; 
//      });
//    }
   
//   })};
//   function addToCart(element){
//     const cartItem = element.closest('.products-item');
//     const cartImg =  cartItem.querySelector('img').getAttribute('src');
//     const cartPrice = cartItem.querySelector('.products-item__price').textContent;
//     const cartName = cartItem.querySelector('.products-item__title').textContent;
//     const cartSub = cartItem.querySelector('.products-item__sub').textContent;
//     console.log(cartImg, cartPrice,cartName,cartSub);
    
//     let template = 
//     `
//     <li class="storage-item d-flex my-1">
//     <div class="storage-item__img d-flex flex-column overflow-hidden">
//       <img src="${cartImg}" class="" alt="">
//       <div class="storage-item-actions d-flex">
//         <div class="storage-item-actions__minus">
//           <img src="images/storage/minus-sign.svg" alt="">
//         </div>
       
//         <div class="storage-item-actions__count">1</div>
//         <div class="storage-item-actions__plus">
//           <img src="images/storage/plus.svg" alt="">
//         </div>
//       </div>
//   </div>
//   <div class="storage-item__content">
//     <div class="storage-item__price">${cartPrice}
//     <span class="storage-item__price2"></span>
//   </div>
//     <div class="storage-item__name">${cartName}</div>
//     <div class="storage-item__desc">${cartSub} </div>
//   </div>
//   <div class="storage-item__trash">
//     <img src="images/storage/rubbish-bin.svg" alt="">
//   </div>
// </li>
//     `
//     store.insertAdjacentHTML('beforeend', template );
//     element.classList.add('disabled');
//    };
//   function removeFromCart (elem){
//    const elemItem = elem.closest('.storage-item');
//    console.log(elemItem);
//    elemItem.remove();
   
   
//    if(count == 0 ){document.getElementById('storage').classList.remove('active')}
//   }; 
 
const buttons  = document.querySelectorAll('.btn');
const carts = document.querySelectorAll('.cart-parent');
const store = document.querySelector('.storage-content');
const sum = document.querySelector('.storage-footer__sum');
const quantity = document.querySelector('.quantity__indicator');
let price = 0;

const randomId = ()=>{
  return Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15);
};

const priceWitoutSpaces = (str)=>{
  return str.replace(/\s/g,'');
};

const normalPrice = (str) =>{
  return String(str).replace(/(\d)(?=(\d\d\d) + ([^\d]|$))/g,' $1') ;
};

function generateCartProduct(img ,price, subprice, name, desc,id){
  return `
  <li class="storage-item d-flex " data-id = ${id}> 
  <div class="storage-item__img d-flex flex-column">
    <img src="${img}" class="" alt="">
    <div class="storage-item-actions d-flex">
      <div class="storage-item-actions__minus">
        <img src="images/storage/minus-sign.svg" alt="">
      </div>
     
      <div class="storage-item-actions__count">1</div>
      <div class="storage-item-actions__plus">
        <img src="images/storage/plus.svg" alt="">
      </div>
    </div>
</div>
<div class="storage-item__content">
  <div class="d-flex">
  <div class="storage-item__price">${price} </div>
  <span class="storage-item__price2">${subprice}</span>
</div>
  <div class="storage-item__name">${name}</div>
  <div class="storage-item__desc">${desc}</div>
</div>
<div class="storage-item__trash">
  <img src="images/storage/rubbish-bin.svg" class="storage-item__trasher"  alt="">
</div>
</li>  
  `
}
let fullPrice = document.querySelector('.storage-footer__sum');
 for (let i = 0; i < buttons.length; i++) {
   const element = buttons[i];
   
   
   
   element.addEventListener('click', (e)=>{
    const cartItem = element.closest('.products-item');
    cartItem.setAttribute('data-id', randomId());
    let self = e.currentTarget;
    let parent = self.closest('.products-item');
    let id = parent.dataset.id;
    let img = parent.querySelector('img').getAttribute('src');
    let subprice = parent.querySelector('.products-item__price2');
     
    const name = parent.querySelector('.products-item__title').textContent;
    const sub = cartItem.querySelector('.products-item__sub').textContent;   
    let  priceNumber = parseInt(parent.querySelector('.products-item__price').textContent);
  
    plusFullPrice(priceNumber);
    console.log(price)
    printFullPrice (fullPrice);

    store.insertAdjacentHTML('afterbegin', generateCartProduct(img ,priceNumber, subprice, name, sub,id));
    
    console.log( generateCartProduct(img ,priceNumber, subprice, name, sub,id));
    printQuontity();
    element.classList.add('disabled');

  })}

function deleteProducts(productParent){
  console.log(productParent)
const tid = productParent.dataset.id;
document.querySelector(`.products-item[data-id=${tid}]`).querySelector('.btn').classList.remove('disabled');
let  priceNumber = parseInt(productParent.querySelector('.storage-item__price').textContent);
console.log(priceNumber);
productParent.remove();

 minusFullPrice(priceNumber);
  printFullPrice (fullPrice);
 printQuontity();


}




 function plusFullPrice(currrentPrice){
 return price += currrentPrice;
 } ;
 function minusFullPrice(currentPrice){
   return price -= currentPrice;
 };
 function printFullPrice (fullPrice){
   fullPrice.textContent =  `${normalPrice(price)} Грн`
 };
 function printQuontity(){
 let length = store.children.length;
 document.querySelector('.storage-footer__count').textContent = length;
 quantity.textContent = length;
 length > 0 ?  document.querySelector('.quantity__indicator').classList.add('active') : document.querySelector('.quantity__indicator').classList.remove('active');
 length > 0 ? document.querySelector('.cart-parent').addEventListener('click' , toggler) : document.querySelector('.cart-parent').removeEventListener('click', toggler);
 if(length == 0){
   document.getElementById('storage').classList.remove('active');
 }
 } 

 store.addEventListener('click', (e)=>{
   if(e.target.classList.contains('storage-item__trasher')){
     
     deleteProducts(e.target.closest('.storage-item'));
   }
 })
function toggler(){
  document.getElementById('storage').classList.toggle('active')} ;

  
