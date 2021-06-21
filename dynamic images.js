const prev = document.getElementById("prev");
const next = document.getElementById("next");
const thumbnail = document.getElementsByClassName("thumbnail");
const hero = document.getElementById("hero");

const backgroundImg = new Array(
  "images/bg1.png",
  "images/bg2.png",
  "images/bg3.png",
  "images/bg4.png",
  "images/bg5.png"
);
let i = 0;
next.onclick = () => {
  if(i < 4){
    hero.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
    thumbnail[i+1].classList.add("active");
    thumbnail[i].classList.remove("active");
    i++;
  }
}

prev.onclick = () => {
  if(i > 0){
    hero.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
    thumbnail[i-1].classList.add("active");
    thumbnail[i].classList.remove("active");
    i--;
  }
}