let btn = document.getElementById("ev");

btn.addEventListener(
  "click",
  function (e) {
    console.log(e.target);
    console.log(this);
  },
  false
);

btn.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(this);
});
throw new Error("prevent default");

let btnBuble = document.getElementById("bubble");
btnBuble.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log(e.target);
});
document.body.addEventListener("click", function (e) {
  console.log(e.target);
});
