$(function(){
	$(".scrolldown-arrow").on("click",function(e){
		e.preventDefault();
		var t=this.hash,
		a=$(t);
		$("html, body").stop().animate({scrollTop:a.offset().top},750,"swing")
	});
	$("#workslider").owlCarousel({items:1, autoplay:true});
});