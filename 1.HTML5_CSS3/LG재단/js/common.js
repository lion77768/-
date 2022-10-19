const headerWrap = document.getElementById('headerWrap');
const gnbList = document.getElementById('gnbList');
const li = document.querySelectorAll('#gnbList > li')
li.forEach(list => {
  list.addEventListener('mouseenter', ()=> {
    headerWrap.style.height = `392px`;
  })
  gnbList.addEventListener('mouseleave', ()=> {
    headerWrap.style.height = `92px`;
  })
})
