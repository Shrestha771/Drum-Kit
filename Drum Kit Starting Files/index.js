for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    //this is for when buttons on the webpage are clicked
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var buttoninnerhtml=this.innerHTML;
      makesound(buttoninnerhtml);
      buttonanimation(buttoninnerhtml);
   }
);
}
//this is for when the keyboard is pressed
document.addEventListener("keydown",function(event){ 
    //the eventlistener is added to the whole document
    //passing the event that triggered the key
   makesound(event.key);
   buttonanimation(event.key);

});

function makesound(key)
{
        switch(key)
    {
        case 'w':
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'a':
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 's':
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'd':
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'k':
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case 'l':
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(key);
    }
}

function buttonanimation(currentkey){
   var animatedbutton=document.querySelector("."+currentkey);//because we want the class which is in .current key eg:(.w) form
   animatedbutton.classList.add("pressed");//pressed is in css
   setTimeout(function(){
    animatedbutton.classList.remove("pressed");
   },100);

}
