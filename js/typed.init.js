//keyword typing
$(".element").typed({
    strings: ["Prince Solomon", "a Software Engineer", "a Google IT Support Engineer", "a Computer & Robotics Engineer"],
    typeSpeed: 15,
    loop: true,
    backDelay: 200
  });

//background loader_bg
  setTimeout(function(){
    $('.loader_bg').fadeToggle();
}, 1500);
 
