/* ---------------------------------------
   슬라이더
---------------------------------------- */
const slides = document.querySelectorAll(".slide-img");
let index = 0;
let timer;

function updateSlides() {
    if (slides.length === 0) return;
    slides.forEach(slide => slide.className = "slide-img");
    let left = (index - 1 + slides.length) % slides.length;
    let right = (index + 1) % slides.length;
    slides[left].classList.add("left");
    slides[index].classList.add("center");
    slides[right].classList.add("right");
}

function startSlider() {
    if (slides.length === 0) return;
    timer = setInterval(() => {
        index = (index + 1) % slides.length;
        updateSlides();
    }, 3500);
}

updateSlides();
startSlider();

/* ---------------------------------------
   모바일 메뉴
---------------------------------------- */
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("menu-close");
const overlay = document.getElementById("menu-overlay");

toggle?.addEventListener("click", () => {
    menu.classList.add("active");
    overlay.classList.add("active");
});

closeBtn?.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
});

overlay?.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
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
        { img: "베른.jpg", name: "베른", price: "등받이에 스윙기능이 탑재되어 앞뒤로 이동이 가능하며윗부분을 접히거나 펴서 고객님의 취향에 맞게 조절이 가능합니다." },
        { img: "모듈2.jpg", name: "모듈", price: "등받이 및 팔걸이가 탈부착이 가능하며 모든 부분을 제거하면 침대처럼 사용이 가능합니다." },
        { img: "엔젤3.jpg", name: "엔젤", price: "Di room의 자체제작 디자인으로 등받이가 3단으로 되어있어서 허리와 목을 편안하게 잡아줍니다." },
        { img: "코바6.jpg", name: "코바", price: "무난하게 누구나 편안하게 사용할 수 있도록 등받이가 낮게 만들어져 있고, 등받이 뒤에 헤드를 추가하여 목까지도 받쳐줄 수 있습니다." },
         { img: "블링3.jpg", name: "블링", price: "등받이에 스윙기능이 탑재되어 앞뒤로 이동이 가능하며, 다른 소파와 다르게 하단부분이 원목으로 되어있어 더욱 세련된 디자인을 자랑합니다." },
        { img: "헨지2.jpg", name: "헨지", price: "등받이에 스윙기능이 탑재되어 앞뒤로 이동이 가능하며, 침대와 소파의 기능을 동시에 실행이 가능합니다.또한 팔걸이까지 위아래로 조절이 가능합니다." },
        { img: "킹덤.jpg", name: "킹덤", price: "기본적인 디자인중 하나로 부담없이 사용할 수 있습니다." },
        { img: "K1.jpg", name: "K1", price: "기본적인 디자인중 하나로 어디서나 잘 어울립니다." },
        { img: "패밀리1.jpg", name: "패밀리 침대 프레임", price: "헤드부분이 안으로 파여있어 가볍게 수납이 가능하며,취침등과 콘센트가 내장되어있어 밤에도 불을 끄고 편안하게 사용하실 수 있습니다.프레임에 가드도 설치할 경우아기가 있는 집에서는 더욱 안전하게 사용하실 수 있습니다." },
    ],
/* ================= 소파 ================= */
    sofa: {
        categories: ["엔젤", "베른", "코바", "헨지", "K1", "모듈", "블링"],
        list: {
            "엔젤": [
                { img: "엔젤2.jpg", name: "기본사이즈", price: " " },
                { img: "엔젤3.jpg", name: "카우치", price: " " },
                { img: "엔젤4.jpg", name: "주문사이즈", price: " " },
                { img: "엔젤5.jpg", name: "보조추가", price: " " }
            ],
            "베른": [
                { img: "베른.jpg", name: "주문사이즈", price: " " },
                { img: "베른2.jpg", name: "보조추가", price: " " },
                { img: "베른4.jpg", name: "풀세트", price: " " },
            ],
            "코바": [
                { img: "코바.jpg", name: "주문사이즈", price: " " },
                { img: "코바6.jpg", name: "풀세트-헤드추가", price: " " },
                { img: "코바3.jpg", name: "풀세트-헤드,보조추가", price: " " },
                { img: "코바4.jpg", name: "주문사이즈", price: " " },
                { img: "코바5.jpg", name: "풀세트", price: " " }
            ],
            "헨지": [
                { img: "헨지.jpg", name: "기본사이즈", price: " " },
                { img: "헨지2.jpg", name: "주문사이즈", price: " " },
                { img: "헨지3.jpg", name: "기본사이즈", price: " " }
            ],
            "K1": [{ img: "K1.jpg", name: "기본사이즈", price: " " }],
            "모듈": [
                { img: "모듈2.jpg", name: "기본사이즈", price: " " }
            ],
            "블링": [
                { img: "블링.jpg", name: "풀세트", price: " " },
                { img: "블링2.jpg", name: "주문사이즈", price: " " },
                { img: "블링3.jpg", name: "풀세트", price: " " }
            ]
        }
    },
    /* ================= 침대 ================= */
    bed: {
        categories: ["패밀리 침대 프레임"],
        list: {
            "패밀리 침대 프레임": [
                { img: "패밀리1.jpg", name: "기본사이즈(Q+SS)", price: " " },
                { img: "패밀리2.jpg", name: "사이즈", price: " " }
            ]
        }
    },
    additional: {
        categories: ["쿠션"],
        list: {
            "쿠션": [
                {img: "패밀리2.jpg", name: "사각쿠션", price: " "},
                {img: "패밀리2.jpg", name: "배게쿠션", price: " "}
            ]
        }
    }
};

/* ---------------------------------------
   제품 렌더링 (⭐ 핵심 수정 완료)
---------------------------------------- */
const mainCategory = document.getElementById("main-category");
const subCategory = document.getElementById("sub-category");
const productList = document.getElementById("product-list");

function renderProducts(list) {
    productList.innerHTML = list.map(item => `
        <div class="product-card">
            <img 
                src="${item.img}"
                class="product-img"
                data-img="${item.img}"
                data-name="${item.name}"
                data-price="${item.price}"
                alt="${item.name}"
            >
            <div class="product-info">
                <p class="product-name">${item.name}</p>
                <p class="product-price">${item.price}</p>
            </div>
        </div>
    `).join("");
}

renderProducts(products.all);

/* ---------------------------------------
   카테고리 버튼
---------------------------------------- */
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

        subCategory.innerHTML =
            `<button data-sub="back">뒤로가기</button>` +
            products[category].categories.map(c => `<button data-sub="${c}">${c}</button>`).join("");

        subCategory.style.display = "flex";

        subCategory.querySelectorAll("button").forEach(subBtn => {
            subBtn.addEventListener("click", () => {
                if (subBtn.dataset.sub === "back") {
                    subCategory.style.display = "none";
                    renderProducts(products.all);
                } else {
                    renderProducts(products[category].list[subBtn.dataset.sub]);
                }
            });
        });
    });
});

/* ---------------------------------------
   상품 상세 모달 (✅ 정상 작동)
---------------------------------------- */
const modal = document.getElementById("product-modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalPrice = document.getElementById("modal-price");
const modalClose = document.querySelector(".modal-close");

document.addEventListener("click", e => {
    if (e.target.classList.contains("product-img")) {
        modalImg.src = e.target.dataset.img;
        modalName.textContent = e.target.dataset.name;
        modalPrice.textContent = e.target.dataset.price;
        modal.classList.add("active");
    }
});

modalClose.addEventListener("click", () => modal.classList.remove("active"));
modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("active");
});
