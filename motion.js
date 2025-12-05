/* ---------------------------------------
   슬라이더
---------------------------------------- */
const slides = document.querySelectorAll(".slide-img");
let index = 0;
let timer;

// 슬라이드 업데이트
function updateSlides() {
    slides.forEach(slide => slide.className = "slide-img");

    let left = (index - 1 + slides.length) % slides.length;
    let right = (index + 1) % slides.length;

    slides[left].classList.add("left");
    slides[index].classList.add("center");
    slides[right].classList.add("right");
}

// 자동 슬라이드
function startSlider() {
    timer = setInterval(() => {
        index = (index + 1) % slides.length;
        updateSlides();
    }, 3500);
}

function resetSlider() {
    clearInterval(timer);
    startSlider();
}

updateSlides();
startSlider();

// 버튼
document.getElementById("nextBtn").addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateSlides();
    resetSlider();
});

document.getElementById("prevBtn").addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlides();
    resetSlider();
});


/* ---------------------------------------
   모바일 메뉴 닫기 기능 + 오버레이
---------------------------------------- */
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("menu-close");
const overlay = document.getElementById("menu-overlay");

// 메뉴 열기
toggle.addEventListener('click', () => {
    menu.classList.add('active');
    overlay.classList.add('active');
});

// 메뉴 닫기 (X 버튼)
closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
});

// 메뉴 밖(오버레이) 클릭 시 닫기
overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
});

// 메뉴 항목 클릭 시 닫힘
document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        overlay.classList.remove("active");
    });
});


/* ---------------------------------------
   스크롤 애니메이션
---------------------------------------- */
const animatedElements = document.querySelectorAll(".fade-up");

function checkScroll() {
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", checkScroll);
checkScroll();
