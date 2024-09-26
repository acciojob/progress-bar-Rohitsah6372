const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.getElementsByClassName('circle')
const lines = document.getElementsByClassName('line')

let i=0;

next.addEventListener('click',()=>{
    if(i < circles.length){
        circles[i].classList.add('active');
        if(i!=lines.length){
            lines[i].classList.add('active');
        }
        console.log('next')
        i++;
    }
});

prev.addEventListener('click', () => {
    if (i > 0) { 
        i--; 
        circles[i].classList.remove('active');  
        if (i < lines.length) { // Ensure the index doesn't exceed the number of lines
            lines[i].classList.remove('active'); // Remove active from the corresponding line
        }
        console.log('prev');
    }
});
