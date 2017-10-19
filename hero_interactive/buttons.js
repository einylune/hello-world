let hero = document.querySelector("#Cat");
let aud = document.querySelector("audio");
let bear = document.querySelector("#Bear");
let gifts = document.querySelectorAll("article");
let giftsClicked=0;
let giftSound = document.querySelector("audio");

     gifts.forEach(addGiftClass);
      
      function addGiftClass(oneGift, index){
          oneGift.addEventListener('click', giftClicked);
      }
      
      function giftClicked (event){
          console.log(event.target);
          event.target.classList.toggle("fade");
          giftsClicked++;
          if(giftsClicked==3){
              giftSound.play()
          }
          event.addEventListener
          
      }

        
    aud.addEventListener('ended', makeShake)   
    function makeShake(){
    console.log("makeShake");
    hero.classList.toggle("shakeCat");
            
    hero.addEventListener("click", makeJumping);
}   
    function makeJumping(){
    console.log("makeJumping");
    hero.classList.toggle("jumpingCat");
    hero.addEventListener("animationend", makeShot);
}

function makeShot(){
console.log("makeShot");
bear.classList.toggle("shotCat");
}

bear.addEventListener("animationend", jumpOne);
function jumpOne(){
console.log("jumpOne");
bear.classList.toggle("jumpOneCat");
}







