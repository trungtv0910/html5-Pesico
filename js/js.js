var header= document.getElementsByTagName('header')[0];
var main =document.getElementsByTagName('main')[0]
console.log(main);
window.addEventListener('scroll', function() {
    // document.getElementById('showScroll').innerHTML =  + 'px';
  

    console.log(window.pageYOffset);

    if(window.pageYOffset <=30)
    {
        header.classList.remove("position_fixed");
        // main.classList.remove("margin_top");
    }
    if(window.pageYOffset>=130)
    {   

        header.classList.add("position_fixed");
        // main.classList.add("margin_top");
    }
  
    
    
  });