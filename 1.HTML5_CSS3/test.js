let heading = document.querySelector('h1');
console.log(heading)
heading.addEventListener('click', function() { 
  this.style.color = "green";
})