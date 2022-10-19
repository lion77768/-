const photo = document.getElementById('photo');
const ul = document.querySelector("#photoList > ul")
const list = ul.querySelectorAll('li');
const btn = document.querySelectorAll("#btnWrap > a");
let listLength = list.length - 2;
let liWidth = list[0].clientWidth;
// 각 리스트의 썸네일을 클릭시 큰 이미지가 바뀌도록
let changeImg = (e, n)=> {
  // photo.setAttribute('src', `images/pic_${n+1}.jpg`)
  let imgPath = e.currentTarget.firstChild.href;
  photo.setAttribute('src', imgPath)
}
for( let i=0; i<list.length; i++ ) {
  list[i].addEventListener('click', (e)=>{
    e.preventDefault();
    changeImg(e, i)
  })
}
// 좌우버튼을 누를경우 썸네일리스트가 한칸씩 움직이도록
// 클래스 next 클릭시
let num = 0;
let n = 1; // 클릭횟수
let state = 1;
let listSliding = (state)=> {
  if (state) {
    if ( num == -600 ) return;
    num -= liWidth;
  }
  else {
    if ( num == 0 ) return;
    num += liWidth;
  }
  ul.style.marginLeft = `${num}px`;
}
btn.forEach((st, index)=> {
  st.addEventListener('click', (e)=> {
    e.preventDefault();
    if ( index == state ) listSliding(state);
    else listSliding();
  })
})
// btn[1].addEventListener('click', (e)=> {
//   e.preventDefault();
//   // if ( num == -600 ) return;
//   if ( n == listLength ) return;
//   n++;
//   num -= liWidth;
//   ul.style.marginLeft = `${num}px`;
// })
// btn[0].addEventListener('click', (e)=> {
//   e.preventDefault();
//   // if ( num == 0 ) return;
//   if ( n == 1 ) return;
//   n--;
//   console.log(n)
//   num += liWidth;
//   ul.style.marginLeft = `${num}px`;
// })
