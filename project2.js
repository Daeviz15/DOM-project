const mode = document.querySelectorAll(".mode");
const para = document.querySelector(".david");
const close = document.querySelector(".close");
const open = () => {
  para.classList.remove("hidden");
};

const closed = () => {
  para.classList.add("hidden");
};
for (let i = 0; i < mode.length; i++) mode[i].addEventListener("click", open);

close.addEventListener("click", closed);

document.addEventListener('keydown', function(e){
  if(e.key === 'Escape')
closed()
})