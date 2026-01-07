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