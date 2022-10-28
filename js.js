let i = 0;
const images = ["url('bg3.jpg')", "url('bgnavbar.jpg')", "url('bgnavbar1.jpg')", "url('mi71.png')"];

function changeBackground(){

    let changedBackground = document.getElementById("container");
    for(i==0; i<=3;){
        changedBackground.style.backgroundImage = images[i];
        console.log(images[i]);
        break;
    }
    i+=1;
    if(i==4){
        i = 0;
    }
    console.log(i);
}
function reverse(){
    let changedBackground = document.getElementById("container");
    if(changedBackground.style.backgroundImage == images[0]){
        i = 2;
    }
    
    for(; i<=3;){
        changedBackground.style.backgroundImage = images[i];
        console.log(images[i]);
        break;
    }
    i-=1;
    console.log(i);
    if(i<0){
        i = 3;
    }
}