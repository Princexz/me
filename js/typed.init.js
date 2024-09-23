//keyword typing
$(".element").typed({
    strings: ["Prince Solomon", "a Full-Stack Developer", "a Software Engineer", "a IT Support Engineer", "a Computer & Robotic Engineer"],
    typeSpeed: 10,
    loop:true,
    backDelay: 1800
  });

//background loader_bg
  setTimeout(function(){
    $('.loader_bg').fadeToggle();
}, 1500);
 
