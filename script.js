

// navbar functionality
document.querySelector(".menu").addEventListener('click', ()=>{
  console.log('clicked')
document.querySelectorAll('.target').forEach((item)=>{
item.classList.toggle('change')
    })
})

// navbar functionality


// food item movement
const icons = document.querySelectorAll('.section-1-icons i');
let i = 1;
setInterval(()=>{
    i++;
  const icon = document.querySelector('.section-1-icons .change');
  icon.classList.remove('change');
  if(i > icons.length){
    icons[0].classList.add('change')
    i=1;
  }
  else{
    icon.nextElementSibling.classList.add('change')
  }
  icon.nextElementSibling.classList.add('change')
}, 4000)  

// End food item movement

