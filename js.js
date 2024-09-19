const slider= document.querySelectorAll(".slide")
var counter = 0;

slider.forEach(
    (slide,index)=>{
        slide.style.top = `${index*100}%`
    }
) 

const goprev= () =>{
    counter--;
    if(counter ==-1){
        counter=3;
        counter--;
    }

    slideimgae();

}

const gonext= () =>{
    counter++;
    if(counter ==4){
        counter=0;
      
        
    }
    slideimgae();
}

const slideimgae= () =>{
    slider.forEach(
        (slide)=>{
            slide.style.transform = `translateY(-${counter*100}%)`
        }
    )
}