$(Document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(This.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
});