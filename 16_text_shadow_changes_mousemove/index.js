const textContext = document.querySelector(".text__container");
const text = textContext.querySelector("p");
console.log(textContext.clientWidth);

textContext.addEventListener("mousemove", (e) => {
  // console.log(e);
  const mainText = e.target.closest("p");
  console.log(e.pageX, e.pageY);
  // if (mainText)
  //   mainText.style.textShadow = `${e.pageX - 200}px ${
  //     e.pageY - 200
  //   }px 1px black`;
});

// [X] text-container내의 mouse의 위치를 구한다.
// [] shadow의 위치를 업데이트한다.
