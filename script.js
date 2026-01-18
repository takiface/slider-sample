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

// 3秒ごとにスライドを切り替える
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

/*③ドット付きスライダー*/
const slidesDot = document.querySelectorAll('.slide-dot');
const dots = document.querySelectorAll('.dot');
let indexDot = 0;

function showSlideDot(i){
    //スライドのactiveを切り替え
    slidesDot.forEach(slide => slide.classList.remove('active'));
    slidesDot[i].classList.add('active');

    //ドットのactiveを切り替え
    dots.forEach(dot => dot.classList.remove('active'));
    dots[i].classList.add('active');
}

//dotをクリックしたら次のスライドへ
dots.forEach(dot =>{
    dot.addEventListener('click', () => {
        indexDot = Number(dot.dataset.index);
        showSlideDot(indexDot);
    });
});

/*フェード付きスライド*/
const slideFade = document.querySelectorAll('.slide-fade');
let indexFade = 0;

function showSlideFade(i){
    slideFade.forEach(slide => slide.classList.remove('active'));
    slideFade[i].classList.add('active');
}

setInterval(()=>{
    indexFade++;
    if(indexFade >= slideFade.length){
        indexFade = 0;
    }
    showSlideFade(indexFade);
}, 3000);


/*スワイプ対応スライダー*/
const slidesSwipe = document.querySelectorAll('.slide-swipe');
let indexSwipe = 0;
let startX = 0;
let endX = 0;
//スワイプ閾値
const SWIPE_THRESHOLD = 30;

//スワイプ判定
function handleSwipe(){
    const diff = startX - endX;

    //左スワイプ（次へ）
    if(diff > SWIPE_THRESHOLD){
        indexSwipe++;
        if(indexSwipe >= slidesSwipe.length){
            indexSwipe = 0;
        }
        showSlideSwipe(indexSwipe);
    }

    //右スワイプ（前へ）
    if(diff < -SWIPE_THRESHOLD){
        indexSwipe--;
        if(indexSwipe < 0){
            indexSwipe = slidesSwipe.length - 1;
        }
        showSlideSwipe(indexSwipe);
    }
}

//スライド切り替え
function showSlideSwipe(i){
    slidesSwipe.forEach(slide => slide.classList.remove('active'));
    slidesSwipe[i].classList.add('active');
}

//スワイプ開始(touch + mouse)
function start(e){
    startX = e.touches ? e.touches[0].clientX : e.clientX;
}
//スワイプ終了
function end(e){
    endX = (e.changedTouches && e.changedTouches.length > 0)
     ? e.changedTouches[0].clientX
     : e.clientX;
    handleSwipe();
}

//イベント登録
const swipeArea = document.querySelector('.slider-swipe');

swipeArea.addEventListener('touchstart', start);
swipeArea.addEventListener('touchend', end);
swipeArea.addEventListener('mousedown', start);
swipeArea.addEventListener('mouseup', end);