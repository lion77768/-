const sWrap = document.getElementById('sliderWrap');
const sList = document.getElementById('sliderList');
const lis = sList.querySelectorAll('li');
const btn = document.querySelectorAll('#btnList button');

// 첫번째 요소만 보이게 하고 링크도 적용되도록 구조변경
lis[1].style.opacity = 0;
lis[2].style.opacity = 0;
sList.append(lis[0]);

let moveNext = ()=> {
  const lis = sList.querySelectorAll('li');
  sList.append(lis[0]);
  setTimeout(()=>{
    lis[0].style.opacity = 1;
    lis[lis.length-1].style.opacity = 0;
  }, 1)
  setTimeout(()=> {
    state = 1;
  }, 1000)
}
let movePrev = ()=> {
  const lis = sList.querySelectorAll('li');
  sList.prepend(lis[lis.length-1]);
  setTimeout(()=>{
    lis[lis.length-2].style.opacity = 1;
    lis[lis.length-1].style.opacity = 0;
  }, 1)
  setTimeout(()=> {
    state = 1;
  }, 1000)
}

let timer = setInterval(moveNext, 3000)

let state = 1;
btn[1].addEventListener('click', ()=>{
  clearInterval(timer)
  if ( state == 1) {
    state = 0;
    moveNext();
  }
})
btn[0].addEventListener('click', ()=>{
  clearInterval(timer)
  if ( state == 1) {
    state = 0;
    movePrev();
  }
})
