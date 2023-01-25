//keyword typing
$(".element").typed({
    strings: ["Prince Solomon", "a Full-Stack Developer", "a Software Engineer", "a Computer Programmer"],
    typeSpeed: 10,
    loop:true,
    backDelay: 1800
  });

//background loader_bg
  setTimeout(function(){
    $('.loader_bg').fadeToggle();
}, 1500);
 
