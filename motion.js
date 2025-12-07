/* ---------------------------------------
   슬라이더
---------------------------------------- */
const slides = document.querySelectorAll(".slide-img");
let index = 0;
let timer;

function updateSlides() {
    slides.forEach(slide => slide.className = "slide-img");
    let left = (index - 1 + slides.length) % slides.length;
    let right = (index + 1) % slides.length;
    slides[left].classList.add("left");
    slides[index].classList.add("center");
    slides[right].classList.add("right");
}

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
   모바일 메뉴
---------------------------------------- */
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("menu-close");
const overlay = document.getElementById("menu-overlay");

toggle.addEventListener('click', () => {
    menu.classList.add('active');
    overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
});

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


/* ---------------------------------------
   제품 데이터
---------------------------------------- */
const products = {
    all: [
        "베른.jpg","모듈2.jpg","엔젤.jpg",
        "코바.jpg", "헨지.jpg", "패밀리1.jpg",
    ],

    sofa: {
        categories: ["소파1", "소파2", "소파3"],
        list: {
            "소파1": ["img/sofa1.jpg", "img/sofa2.jpg"],
            "소파2": ["img/sofa3.jpg", "img/sofa4.jpg"],
            "소파3": ["img/sofa5.jpg", "img/sofa6.jpg"]
        }
    },

    bed: {
        categories: ["침대1", "침대2"],
        list: {
            "침대1": ["img/bed1.jpg", "img/bed2.jpg"],
            "침대2": ["img/bed3.jpg", "img/bed4.jpg"]
        }
    }
};


/* ---------------------------------------
   제품 렌더링
---------------------------------------- */
const mainCategory = document.getElementById("main-category");
const subCategory = document.getElementById("sub-category");
const productList = document.getElementById("product-list");

function renderProducts(list) {
    productList.innerHTML = list
        .map(src => `
            <div class="product-card">
                <img src="${src}" alt="product">
                <div class="product-info">
                    <p class="product-name">제품명</p>
                </div>
            </div>
        `)
        .join("");
}


renderProducts(products.all);

mainCategory.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.dataset.category;

        mainCategory.querySelectorAll("button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        if (category === "all") {
            subCategory.style.display = "none";
            renderProducts(products.all);
            return;
        }

        const subCats = products[category].categories;

        subCategory.innerHTML =
            `<button data-sub="back">뒤로가기</button>` +
            subCats.map(c => `<button data-sub="${c}">${c}</button>`).join("");

        subCategory.style.display = "flex";
        productList.innerHTML = "";

        subCategory.querySelectorAll("button").forEach(subBtn => {
            subBtn.addEventListener("click", () => {
                const sub = subBtn.dataset.sub;

                if (sub === "back") {
                    subCategory.style.display = "none";
                    renderProducts(products.all);
                    return;
                }

                const imgs = products[category].list[sub];
                renderProducts(imgs);
            });
        });
    });
});
