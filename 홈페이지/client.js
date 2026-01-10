const topBtn = document.getElementById("back-to-top");

window.onscroll = function() {
  // Top 버튼은 스크롤을 내릴 때만 자연스럽게 나타남
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.opacity = "1";
    topBtn.style.visibility = "visible";
  } else {
    topBtn.style.opacity = "0";
    topBtn.style.visibility = "hidden";
  }
};

topBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};