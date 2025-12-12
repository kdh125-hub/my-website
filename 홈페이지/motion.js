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
        { img: "베른.jpg", name: "베른", price: "원" },
        { img: "모듈2.jpg", name: "모듈", price: "원" },
        { img: "엔젤.jpg", name: "엔젤", price: "원" },
        { img: "코바.jpg", name: "코바", price: "원" },
        { img: "헨지.jpg", name: "헨지", price: "원" },
        { img: "패밀리1.jpg", name: "패밀리", price: "원" },
    ],

    sofa: {
        categories: ["엔젤", "베른", "코바", "킹덤", "K1", "모듈", "블링"],
        list: {
            "엔젤": ["엔젤.jpg", "엔젤1.jpg", "엔젤2.jpg", "엔젤3.jpg", "엔젤4.jpg", "엔젤5.jpg"],
            "베른": ["베른.jpg", "베른1.jpg", "베른2.jpg", "베른3.jpg", "베른4.jpg", "베른5.jpg", "베른6.jpg"],
            "코바": ["img/sofa5.jpg", "img/sofa6.jpg"],
            "킹덤": ["img/sofa1.jpg", "img/sofa2.jpg"],
            "K1": ["img/sofa3.jpg", "img/sofa4.jpg"],
            "모듈": ["img/sofa5.jpg", "img/sofa6.jpg"],
            "블링": ["img/sofa5.jpg", "img/sofa6.jpg"]
        }
    },

    bed: {
        categories: ["패밀리"],
        list: {
            "패밀리": ["img/bed1.jpg", "img/bed2.jpg"],
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
        .map(item => `
            <div class="product-card">
                <img src="${item.img}" alt="${item.name}">
                <div class="product-info">
                    <p class="product-name">${item.name}</p>
                    <p class="product-price">${item.price}</p>
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
