//keyword typing
$(".element").typed({
    strings: ["Prince Solomon", "a Software Engineer", "a IT Support Engineer", "a Computer & Robotic Engineer"],
    typeSpeed: 10,
    loop: true,
    backDelay: 150
  });

//background loader_bg
  setTimeout(function(){
    $('.loader_bg').fadeToggle();
}, 1500);
 
