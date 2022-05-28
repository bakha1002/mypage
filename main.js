const content = "안녕하세요, \n 주니어 백엔드 개발자 \n 염기욱입니다!";
const text = document.querySelector(".greetings");
let i = 0;

function typing() {
  let txt = content[i++];
  text.innerHTML += txt === "\n" ? "<br/>" : txt;
  if (i > content.length) {
    text.textContent = "";
    i = 0;
  }
}
setInterval(typing, 100);

const movetoSection1 = document.querySelector(".movetoSection1");
movetoSection1.addEventListener("click", (e) => {
  let contentsWrapper = document.querySelector(".contentsWrapper");
  contentsWrapper.scrollIntoView({ behavior: "smooth" });
  e.preventDefault();
});

const movetoSection2 = document.querySelector(".movetoSection2");
movetoSection2.addEventListener("click", (e) => {
  let intro = document.querySelector(".intro");
  intro.scrollIntoView({ behavior: "smooth" });
  e.preventDefault();
});

const movetoSection3 = document.querySelector(".movetoSection3");
movetoSection3.addEventListener("click", (e) => {
  let portfolio = document.querySelector(".portfolio");
  portfolio.scrollIntoView({ behavior: "smooth" });
  e.preventDefault();
});

const movetoSection4 = document.querySelector(".movetoSection4");
movetoSection4.addEventListener("click", (e) => {
  let contact = document.querySelector(".contact");
  contact.scrollIntoView({ behavior: "smooth" });
  e.preventDefault();
});

//연락처 모달창

const open = () => {
  document.querySelector(".modal").classList.remove("hidden");
};

const close = () => {
  document.querySelector(".modal").classList.add("hidden");
};

document.querySelector(".key8").addEventListener("click", open);
document.querySelector(".closeBtn").addEventListener("click", close);
document.querySelector(".bg").addEventListener("click", close);

//이메일 복사
const copyEmailBtn = document.querySelector(".copyEmail");

function fn_copy() {
  const copyText = document.createElement("textarea");
	document.body.appendChild(copyText);
	copyText.value = document.querySelector(".modalBox>p").innerText
	copyText.select();
	document.execCommand('copy');
	document.body.removeChild(copyText);
	alert(copyText.value + '\n이메일 주소 복사 완료!');
}

copyEmailBtn.addEventListener("click", fn_copy);
