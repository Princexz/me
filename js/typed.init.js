
$(".element").typed({
    strings: ["Prine Solomon", "a Full-Stack Developer", "a Computer Progammer", "a Software Engineer"],
    typeSpeed: 10,
    loop:true,
    backDelay: 1500
  });

  setTimeout(function(){
    $('.loader_bg').fadeToggle();
}, 2000);
 
