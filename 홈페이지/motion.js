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
        { img: "베른.jpg", name: "베른", price: "등받이에 스윙기능이 탑재되어 앞뒤로 이동이 가능하며 윗부분을 접히거나 펴서 고객님의 취향에 맞게 조절이 가능합니다." },
        { img: "모듈2.jpg", name: "모듈", price: "등받이 및 팔걸이가 탈부착이 가능하며 모든 부분을 제거하면 침대처럼 사용이 가능합니다." },
        { img: "엔젤3.jpg", name: "엔젤", price: "Di room의 자체제작 디자인으로 등받이가 3단으로 되어있어 허리와 목을 편안하게 잡아줍니다." },
        { img: "코바6.jpg", name: "코바", price: "누구나 편안하게 사용할 수 있도록 등받이가 낮게 만들어져 있으며, 등받이 뒤에 헤드를 추가하여 목까지도 받쳐줄 수 있습니다." },
         { img: "블링.jpg", name: "블링", price: "등받이에 스윙기능이 탑재되어 앞뒤로 이동이 가능하며, 다른 소파와 다르게 하단부분이 원목으로 되어있어 더욱 세련된 디자인을 자랑합니다." },
        { img: "헨지2.jpg", name: "헨지", price: "등받이에 스윙기능이 탑재되어 앞뒤로 이동이 가능하며, 침대와 소파의 기능을 동시에 실행이 가능합니다.또한 팔걸이를 위아래로 조절이 가능합니다." },
        { img: "킹덤2.jpg", name: "킹덤", price: "기본적인 디자인중 하나로 누구나 부담없이 사용할 수 있습니다." },
        { img: "K1.jpg", name: "K1", price: "Di room의 자체제작 디자인이자 기본적인 디자인중 하나로 어디서나 잘 어울립니다." },
        { img: "패밀리1.jpg", name: "패밀리 침대 프레임", price: "헤드부분이 안으로 파여있어 가볍게 수납이 가능하며,취침등과 콘센트가 내장되어있어 밤에도 불을 끄고 편안하게 사용하실 수 있습니다.프레임에 가드를 설치하여 아이가 있는 집에서는 더욱 안전하게 사용하실 수 있습니다." },
    ],
/* ================= 소파 ================= */
    sofa: {
        categories: ["엔젤", "베른", "코바", "헨지", "K1", "킹덤", "모듈", "블링"],
        list: {
            "엔젤": [
                { img: "엔젤2.jpg", name: "(엔젤)기본사이즈", price: " " },
                { img: "엔젤3.jpg", name: "(엔젤)카우치", price: " " },
                { img: "엔젤4.jpg", name: "(엔젤)주문사이즈", price: " " },
                { img: "엔젤5.jpg", name: "(엔젤)보조추가", price: " " }
            ],
            "베른": [
                { img: "베른.jpg", name: "(베른)주문사이즈", price: " " },
                { img: "베른2.jpg", name: "(베른)보조추가", price: " " },
                { img: "베른4.jpg", name: "(베른)풀세트", price: " " },
            ],
            "코바": [
                { img: "코바.jpg", name: "(코바)주문사이즈", price: " " },
                { img: "코바6.jpg", name: "(코바)풀세트-헤드추가", price: " " },
                { img: "코바3.jpg", name: "(코바)풀세트-헤드,보조추가", price: " " },
                { img: "코바4.jpg", name: "(코바)주문사이즈", price: " " },
                { img: "코바5.jpg", name: "(코바)풀세트", price: " " }
            ],
            "헨지": [
                { img: "헨지.jpg", name: "(헨지)기본사이즈", price: " " },
                { img: "헨지2.jpg", name: "(헨지)주문사이즈", price: " " },
                { img: "헨지3.jpg", name: "(헨지)기본사이즈", price: " " }
            ],
            "K1": [
                { img: "K1.jpg", name: "(K1)기본사이즈", price: " " }
            ],
            "킹덤": [
                { img: "킹덤.jpg", name: "(킹덤)기본사이즈", price: " " },
                { img: "킹덤2.jpg", name: "(킹덤)기본사이즈", price: " " }
            ],
            "모듈": [
                { img: "모듈2.jpg", name: "(모듈)기본사이즈", price: " " }
            ],
            "블링": [
                { img: "블링.jpg", name: "(블링)풀세트", price: " " },
                { img: "블링2.jpg", name: "(블링)주문사이즈", price: " " },
                { img: "블링3.jpg", name: "(블링)풀세트", price: " " }
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
const searchBtn = document.getElementById("search-btn");
const searchOverlay = document.getElementById("search-overlay");
const searchInput = document.getElementById("search-input");
const searchClose = document.getElementById("search-close");
const resultList = document.getElementById("search-result");
const recentList = document.getElementById("recent-keywords");
const clearRecentBtn = document.getElementById("clear-recent");

const MAX_RECENT = 5;
let activeCategory = "all";

/* ------------------------
   검색 열기 / 닫기
------------------------ */
searchBtn?.addEventListener("click", e => {
    e.preventDefault();
    searchOverlay.classList.add("active");
    searchInput.focus();
    document.body.style.overflow = "hidden";
    renderRecent();
});

function closeSearch(save = false) {
    const keyword = searchInput.value.trim();

    if (save && keyword.length >= 2) {
        saveRecent(keyword);
    }

    searchOverlay.classList.remove("active");
    searchInput.value = "";
    resultList.innerHTML = "";
    document.body.style.overflow = "";
}

searchClose.addEventListener("click", () => closeSearch());

searchOverlay.addEventListener("click", e => {
    if (e.target === searchOverlay) closeSearch(true);
});

document.addEventListener("keydown", e => {
    if (e.key === "Escape" && searchOverlay.classList.contains("active")) {
        closeSearch(true);
    }
});

/* ------------------------
   카테고리 버튼
------------------------ */
document.querySelectorAll(".search-category button").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".search-category button")
            .forEach(b => b.classList.remove("active"));

        btn.classList.add("active");
        activeCategory = btn.dataset.category;
        runSearch(searchInput.value.trim());
    });
});

/* ------------------------
   최근 검색어
------------------------ */
function saveRecent(keyword) {
    let list = JSON.parse(localStorage.getItem("recentSearch")) || [];
    list = [keyword, ...list.filter(k => k !== keyword)];
    list = list.slice(0, MAX_RECENT);
    localStorage.setItem("recentSearch", JSON.stringify(list));
    renderRecent();
}

function removeRecent(keyword) {
    let list = JSON.parse(localStorage.getItem("recentSearch")) || [];
    list = list.filter(k => k !== keyword);
    localStorage.setItem("recentSearch", JSON.stringify(list));
    renderRecent();
}

function renderRecent() {
    recentList.innerHTML = "";
    const list = JSON.parse(localStorage.getItem("recentSearch")) || [];

    list.forEach(k => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${k}</span>
            <button class="recent-delete">✕</button>
        `;

        li.querySelector("span").onclick = () => {
            searchInput.value = k;
            runSearch(k);
        };

        li.querySelector(".recent-delete").onclick = e => {
            e.stopPropagation();
            removeRecent(k);
        };

        recentList.appendChild(li);
    });
}

clearRecentBtn?.addEventListener("click", () => {
    if (!confirm("최근 검색어를 모두 삭제할까요?")) return;
    localStorage.removeItem("recentSearch");
    renderRecent();
});

/* ------------------------
   검색 실행 (저장은 Enter/선택 시만)
------------------------ */
function runSearch(keyword) {
    resultList.innerHTML = "";
    if (!keyword) return;

    const map = {
        "소파": "sofa",
        "쇼파": "sofa",
        "침대": "bed"
    };

    keyword = map[keyword] || keyword.toLowerCase();
    let results = [];

    ["sofa", "bed"].forEach(type => {
        if (activeCategory !== "all" && activeCategory !== type) return;

        products[type]?.categories.forEach(cat => {
            products[type].list[cat].forEach(item => {
                if (
                    item.name.toLowerCase().includes(keyword) ||
                    cat.toLowerCase().includes(keyword)
                ) {
                    results.push(item);
                }
            });
        });
    });

    if (results.length === 0) {
        resultList.innerHTML = "<li class='no-result'>검색 결과가 없습니다.</li>";
        return;
    }

    results.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="${item.img}" alt="">
            <div>
                <strong>${item.name}</strong>
                <small>${item.price}</small>
            </div>
        `;

        li.onclick = () => {
            saveRecent(item.name);
            closeSearch();
            renderProducts([item]);
        };

        resultList.appendChild(li);
    });
}

/* ------------------------
   입력 / Enter
------------------------ */
searchInput.addEventListener("input", e => {
    runSearch(e.target.value.trim());
});

searchInput.addEventListener("keydown", e => {
    if (e.key !== "Enter") return;

    const keyword = searchInput.value.trim();
    if (!keyword) return;

    saveRecent(keyword);
    runSearch(keyword);
});


  const topBtn = document.getElementById("back-to-top");

  window.onscroll = function() {
    // 200px 이상 스크롤 되면 'show' 클래스 추가, 아니면 제거
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      topBtn.classList.add("show");
    } else {
      topBtn.classList.remove("show");
    }
  };

  topBtn.onclick = function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
