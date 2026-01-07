/*①自動スライダー*/
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

// 指定したスライドだけを表示する関数
function showSlide(index){
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

// 次のスライドに進む関数
function nextSlide(){
    currentIndex++;
    if(currentIndex >= slides.length){
        currentIndex = 0; //最初に戻る
    }
    showSlide(currentIndex);
}

//　3秒ごとにスライドを切り替える
setInterval(nextSlide, 3000);


/*②左右ボタン付きスライダー*/
const sliderBtn =document.querySelectorAll('.slide-btn');
let indexBtn = 0;

function showSlideBtn(i){
    sliderBtn.forEach(slide => slide.classList.remove('active'));
    sliderBtn[i].classList.add('active');
}

document.querySelector('.prev').addEventListener('click', ()=>{
    indexBtn--;
    if(indexBtn < 0){
        indexBtn = sliderBtn.length - 1;
    }
    showSlideBtn(indexBtn);
});

document.querySelector('.next').addEventListener('click', ()=>{
    indexBtn++;
    if(indexBtn >= sliderBtn.length){
        indexBtn = 0;
    }
    showSlideBtn(indexBtn);
});