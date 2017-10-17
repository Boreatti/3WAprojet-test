/********************************************************     
----- - PRELOAD -   ---- 
******************************************************/
	var p = 0;
	$.arrPreload = [];
	$.arrPreload[p++] = "imgIntro/particulesDebut.png";
	$.arrPreload[p++] = "imgIntro/medioHalo-orange.png";
	$.arrPreload[p++] = "imgIntro/eldinnPlanete2.png";
	$.arrPreload[p++] = "imgIntro/particules2.png";  
	$.arrPreload[p++] = "imgIntro/fondPortail.png";
	$.arrPreload[p++] = "imgIntro/portailAnim4Obt.gif";
	$.arrPreload[p++] = "imgIntro/heeytee.png";
	$.arrPreload[p++] = "imgIntro/nune.png"; 
	$.arrPreload[p++] = "imgIntro/naoisis.png";
	$.arrPreload[p++] = "imgIntro/gooss.png";
	$.arrPreload[p++] = "imgIntro/keks.png";
	$.arrPreload[p++] = "imgIntro/aroll.png";
	$.arrPreload[p++] = "imgIntro/mudlafrig.png";  
	$.arrPreload[p++] = "imgIntro/uzukzh.png";
	$.arrPreload[p++] = "imgIntro/roackPlanete.png";
	$.arrPreload[p++] = "imgIntro/tam.png";
	$.arrPreload[p++] = "imgIntro/suah.png"; 
	$.arrPreload[p++] = "imgIntro/vortasgothPlanete.png";
	$.arrPreload[p++] = "imgIntro/soth.png"; 
	$.arrPreload[p++] = "imgIntro/sifh.png";
	$.arrPreload[p++] = "imgIntro/husphelPlanete.png";
	$.arrPreload[p++] = "imgIntro/paaju.png"; 
	$.arrPreload[p++] = "imgIntro/eldinnPlanete2.png";
	$.arrPreload[p++] = "imgIntro/nox.png";  
	$.arrPreload[p++] = "imgIntro/ebesPlanete.png";  
	$.arrPreload[p++] = "imgIntro/tintyphPlanete.png";  
	$.arrPreload[p++] = "imgIntro/hriude.png";  
	$.arrPreload[p++] = "imgIntro/omian.png";  
	$.arrPreload[p++] = "imgIntro/doplis.png";  
	$.arrPreload[p++] = "imgIntro/atus.png";  
	$.arrPreload[p++] = "imgIntro/jufus.png";  
	$.arrPreload[p++] = "imgIntro/eolia.png";  
	$.arrPreload[p++] = "imgIntro/medioPlanete.png";  
	$.arrPreload[p++] = "imgIntro/BGplan1-teinte.png";  
	$.arrPreload[p++] = "imgIntro/BGplan2-teinte.png";  
	$.arrPreload[p++] = "imgIntro/BGplan3-teinte.png";  
	$.arrPreload[p++] = "toolsMenus/bgMenus2.png";  
	$.arrPreload[p++] = "imgIntro/medioHalo-V3.png" ;

	$(document.createElement('img')).bind('load', function () {
	  if ($.arrPreload.length > 0)
	    this.src = $.arrPreload.shift()
	  else
	    preloadDone();
	}).trigger('load');

	// window.addEventListener("scroll", function (e){
	// window.scrollTo(0,0);
	// }, false);

	function preloadDone(){
	  setTimeout(function () {
	    $("#oLoading").html("").fadeOut();
	  }, 300);

}; 


/*=====================================
=            WINDOW RESIZE            =
=====================================*/
// $(window).resize(function() {

//     // Kill for small screens
//     if ($(window).width() <= 768 && !scrollMagicIsDestroyed) {
//         destroyScrollMagic();
//         scrollMagicIsDestroyed = true;
//         $('body').addClass('no-scroll-magic');
//     }

//     // Force better DOM repainting hack. Helps on mobile
//     $('html').addClass('force-gpu').removeClass('force-gpu');
// });





jQuery(document).ready(function($)
{

/********************************************************   
----- - SMOOTH SCROLL -   ---- 
******************************************************/

var smoothScroll = {
    speed: 0,
    delay: 10, // en ms
    timer: null,
    scrollSpeed: 4,
    inertia: 0.95,
    init: function(){
        this.setEventsListeners();
    },
    setEventsListeners: function(){
        var me = this;
        $(document).bind('DOMMouseScroll mousewheel', function(e){
            me.setSpeed(e.originalEvent);
        });
	 },
    setSpeed: function(e){
        var direction = e.detail ? -e.detail : e.wheelDelta;
    	this.speed += direction < 0 ? -this.scrollSpeed : this.scrollSpeed;
    	if(this.timer == null){
    		this.timer = setTimeout(this.smoothScroll, this.delay, this); 
    	}
    	e.preventDefault();
    },
    smoothScroll: function(scope){
		var self = scope;
    	self.speed *= self.inertia;

        var currScrollTop = $(window).scrollTop();
        $(window).scrollTop(currScrollTop-self.speed);

    	if(self.speed < self.inertia && self.speed > -self.inertia){
    		self.speed = 0;
    		clearTimeout(self.timer);
    		self.timer = null;
    	}else{
    		self.timer = setTimeout(self.smoothScroll, self.delay, self);
    	}
    }
}

smoothScroll.init();

/********************************************************   
----- - DEFILEMENT FLECHES -   ---- 
******************************************************/

        //Défilement du texte a droite avec les flèches haut et bas
        $(function() {
            var ele   = $('#texteHistoire');
            var speed = 25, scroll = 5, scrolling;

            $('#flecheHaut').mouseenter(function() {
                // Scroll the element up
                scrolling = window.setInterval(function() {
                    ele.scrollTop( ele.scrollTop() - scroll );
                }, speed);
            });

            $('#flecheBas').mouseenter(function() {
                // Scroll the element down
                scrolling = window.setInterval(function() {
                    ele.scrollTop( ele.scrollTop() + scroll );
                }, speed);
            });

            $('#flecheHaut, #flechebas').bind({
                click: function(e) {
                    // Prevent the default click action
                    e.preventDefault();
                },
                mouseleave: function() {
                    if (scrolling) {
                        window.clearInterval(scrolling);
                        scrolling = false;
                    }
                }
            });
        });


});





/********************************************************   
----- - EVENT -   ---- 
******************************************************/
	// init controller
	var controller = new ScrollMagic.Controller();


/*FIXED INTRO*/
	$(function () { 
		var sceneFixeIntro = new ScrollMagic.Scene({triggerElement: "", duration: 400})
			.setPin("#BGplan1", "#BGplan2", "#BGplan3")
			.addTo (controller);
		});


/*SCROLL BG (en 3 plans)*/
	$(function () {

		var tweenScrollBG = new TimelineMax ()
			.add([
				TweenMax.to("#BGplan1", 1, {backgroundPosition: "50% 40%", ease: Linear.easeNone}),
				TweenMax.to("#BGplan2", 1, {backgroundPosition: "50% 90%", ease: Linear.easeNone}),
				TweenMax.to("#BGplan3", 1, {backgroundPosition: "50% 100%", ease: Linear.easeNone})
			]);


		var sceneScrollBG = new ScrollMagic.Scene({triggerElement: "#reperePlanete", duration: 1000})
					.setTween(tweenScrollBG)
					.addTo(controller);

	});



/*PARTICULES*/
	$(function () {

		var tweenScrollParticules = new TimelineMax ()
			.add([
				TweenMax.to("#particulesDebut", 1, {marginTop: "-20%", ease: Linear.easeNone})
			]);


		var sceneScrollBG = new ScrollMagic.Scene({triggerElement: "", duration: 1000})
					.setTween(tweenScrollParticules)
					.addTo(controller);

	});


/*EVENT TITRE + TEXTE INTRO*/
	$(function () { 
		var tweenEventIntro = new TimelineMax ()
			.add([
				TweenMax.to("h1", 1, {marginTop: "-700px", ease: Linear.easeNone}),
				TweenMax.to("h2", 1, {marginLeft: "1500px", ease: Linear.easeNone}),
				TweenMax.to(".containerTexteIntro", 1, {marginLeft: "-500px", ease: Linear.easeNone})
			]);

		// build scene
		var sceneIntro = new ScrollMagic.Scene({triggerElement: '', duration: 200})
						.setTween(tweenEventIntro)
						.addTo(controller);
	});


/*BULLES TXT 1 A 4*/
	$(function () { 
		var tweenBulleA = new TimelineMax ()
			.add([
				TweenMax.from("#bulle1", 1, {autoAlpha: 0, left: "+=60", top: "+=50", scale: 0.2, ease: Back.easeOut})
			]);


		// build scene
		var sceneBulleA = new ScrollMagic.Scene({triggerElement: '#repereBulle1'})
						.setTween(tweenBulleA)
						.addTo(controller);
	});




	$(function () { 
		var tweenBulleB = new TimelineMax ()
			.add([
				TweenMax.from("#bulle2", 1, {autoAlpha: 0, left: "+=60", top: "+=50", scale: 0.2, ease: Back.easeOut})
			]);

		// build scene
		var sceneBulleB = new ScrollMagic.Scene({triggerElement: '#repereBulle2'})
						.setTween(tweenBulleB)
						.addTo(controller);
	});




	$(function () { 
		var tweenBulleC = new TimelineMax ()
			.add([
				TweenMax.from("#bulle3", 1, {autoAlpha: 0, left: "+=60", top: "+=50", scale: 0.2, ease: Back.easeOut})
			]);

		// build scene
		var sceneBulleC = new ScrollMagic.Scene({triggerElement: '#repereBulle3'})
						.setTween(tweenBulleC)
						.addTo(controller);
	});




	$(function () { 
		var tweenBulleD = new TimelineMax ()
			.add([
				TweenMax.from("#bulle4", 1, {autoAlpha: 0, left: "+=60", top: "+=50", scale: 0.2, ease: Back.easeOut})
			]);

		// build scene
		var sceneBulleD = new ScrollMagic.Scene({triggerElement: '#repereBulle4'})
						.setTween(tweenBulleD)
						.addTo(controller);
	});






/*FIXED HYPERSPACE*/
	$(function () { 
		var fixedHyp = new ScrollMagic.Scene({triggerElement: '#repereFixeSysteme', duration: 2500})
			.setPin(".containHyperspace")
			.addTo (controller);
	});


/*HYPERESPACE*/
		$(function () {

		var tweensceneScrollHyperspace = new TimelineMax ()
			.add([
				TweenMax.to(".wrap", 1, {transform: "translateZ(500px) rotate(0deg)", ease: Linear.easeNone}),
				TweenMax.to(".wrap:nth-child(2)", 1, {transform: "translateZ(500px) rotate(0deg)", ease: Linear.easeNone}),
				TweenMax.to(".wall", 1, {display:"block", opacity: 1, ease: Linear.easeNone})
			]);


		var sceneScrollHyperspace = new ScrollMagic.Scene({triggerElement: "#repereFixeSysteme", duration: 1500})
					.setTween(tweensceneScrollHyperspace)
					.addTo(controller);

	});


/*FIXED SYSTEME*/
	$(function () { 
		var fixedSys = new ScrollMagic.Scene({triggerElement: '#repereFixeSysteme', duration: 1500})
			.setPin(".blocPlaneteS3")
			.addTo (controller);
	});

/*APPARITION PLANETES*/
	$(function () { 
		var tweenA1 = new TimelineMax ()
			.add([
				TweenMax.to(".hriude", 1, {width: "130px", marginTop: "400px", marginLeft: "-1400px", ease: Linear.easeNone, delay: 0}),
				TweenMax.to(".tintyph", 1, {width: "240px", marginTop: "200px", marginLeft: "-1500px", ease: Linear.easeNone, delay: 0.1}),
				TweenMax.to(".nox", 1, {width: "190px", marginTop: "-100px", marginLeft: "-1700px", ease: Linear.easeNone, delay: 0.2}),
				TweenMax.to(".ebes", 1, {width: "1000px", marginTop: "-400px", marginLeft: "-1900px", ease: Linear.easeNone, delay: 0.3}),
				
				TweenMax.to(".paaju", 1, {width: "130px", marginTop: "500px", marginLeft: "1200px", ease: Linear.easeNone, delay: 0.2}),
				TweenMax.to(".husphel", 1, {width: "350px", marginTop: "400px", marginLeft: "1250px", ease: Linear.easeNone, delay: 0.3}),
				TweenMax.to(".vortasgoth", 1, {width: "500px", marginTop: "300px", marginLeft: "1200px", ease: Linear.easeNone, delay: 0.4}),

				TweenMax.to(".eolia", 1, {width: "175px", marginTop: "570px", marginLeft: "-450px", ease: Linear.easeNone, delay: 0.4}),
				TweenMax.to(".jufus", 1, {width: "240px", marginTop: "530px", marginLeft: "-400px", ease: Linear.easeNone, delay: 0.5}),
				TweenMax.to(".atus", 1, {width: "100px", marginTop: "570px", marginLeft: "-600px", ease: Linear.easeNone, delay: 0.6}),
				TweenMax.to(".doplis", 1, {width: "190px", marginTop: "600px", marginLeft: "-700px", ease: Linear.easeNone, delay: 0.7}),
				TweenMax.to(".omian", 1, {width: "350px", marginTop: "530px", marginLeft: "-500px", ease: Linear.easeNone, delay: 0.8}),
				
				TweenMax.to(".medio", 1, {width: "400px", marginTop: "-100px", marginLeft: "-300px", ease: Linear.easeNone, delay: 1}),

				TweenMax.to(".sifh", 1, {width: "120px", marginTop: "200px", marginLeft: "1250px", ease: Linear.easeNone, delay: 0.4}),
				TweenMax.to(".soth", 1, {width: "130px", marginTop: "200px", marginLeft: "1250px", ease: Linear.easeNone, delay: 0.5}),
				TweenMax.to(".suah", 1, {width: "140px", marginTop: "100px", marginLeft: "1250px", ease: Linear.easeNone, delay: 0.6}),
				TweenMax.to(".tam", 1, {width: "50px", marginTop: "200px", marginLeft: "1200px", ease: Linear.easeNone, delay: 0.7}),
				TweenMax.to(".aroll", 1, {width: "150px", marginTop: "100px", marginLeft: "1200px", ease: Linear.easeNone, delay: 0.8}),
				TweenMax.to(".keks", 1, {width: "100px", marginTop: "100px", marginLeft: "2000px", ease: Linear.easeNone, delay: 0.9}),
				TweenMax.to(".roack", 1, {width: "50px", marginTop: "200px", marginLeft: "1000px", ease: Linear.easeNone, delay: 1}),
				TweenMax.to(".uzukzh", 1, {width: "300px", marginTop: "170px", marginLeft: "1500px", ease: Linear.easeNone, delay: 1.1}),
				TweenMax.to(".mudlafrig", 1, {width: "200px", marginTop: "110px", marginLeft: "1600px", ease: Linear.easeNone, delay: 1.2}),

				TweenMax.to(".eldinn", 1, {width: "190px", marginTop: "-700px", marginLeft: "250px", ease: Linear.easeNone, delay: 0.9}),

				TweenMax.to(".gooss", 1, {width: "350px", marginTop: "-300px", marginLeft: "-600px", ease: Linear.easeNone, delay: 1.5}),
				TweenMax.to(".naoisis", 1, {width: "250px", marginTop: "-600px", marginLeft: "600px", ease: Linear.easeNone, delay: 1.6}),
				TweenMax.to(".dyamtirie", 1, {width: "100px", marginTop: "700px", marginLeft: "250px", ease: Linear.easeNone, delay: 1.7}),
				TweenMax.to(".nune", 1, {width: "150px", marginTop: "500px", marginLeft: "-250px", ease: Linear.easeNone, delay: 1.8}),
				TweenMax.to(".heeytee", 1, {width: "150px", marginTop: "500px", marginLeft: "500px", ease: Linear.easeNone, delay: 1.9})
			]);

		// build scene
		var sceneA1 = new ScrollMagic.Scene({triggerElement: '.A1', duration: 2000})
						.setTween(tweenA1)
						.addTo(controller);
	});


/**** SVG DiSPLAY BLOCK******/
	$(function () {

		var tweenSVG = new TimelineMax ()
			.add([
				TweenMax.to("svg", 1, {display:"block"})
			]);


		var sceneSVG = new ScrollMagic.Scene({triggerElement: "#repereBulle6", duration: 0})
					.setTween(tweenSVG)
					.addTo(controller);

	});


/**** SVG ******/
function pathPrepare ($el) {
   var lineLength = $el[0].getTotalLength();
   $el.css("stroke-dasharray", lineLength);
   $el.css("stroke-dashoffset", lineLength);
}

var $flux1 = $("path#flux1");
var $flux2 = $("path#flux2");
var $flux3 = $("path#flux3");

// prepare SVG
pathPrepare($flux1);
pathPrepare($flux2);
pathPrepare($flux3);


/*****FLUX 1****/
var tweenFlux1 = new TimelineMax()
	.add(TweenMax.to($flux1, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.3
	.add(TweenMax.to("path", 1, {stroke: "#f9bfa9", ease:Linear.easeNone}), 0); // change color during the whole thing

var sceneFlux1 = new ScrollMagic.Scene({triggerElement: "#repereBulle6", duration: 200, tweenChanges: true})
				.setTween(tweenFlux1)
				.addTo(controller);



/*****FLUX 2****/
var tweenFlux2 = new TimelineMax()
	.add(TweenMax.to($flux2, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.3
	.add(TweenMax.to("path", 1, {stroke: "#f9bfa9", ease:Linear.easeNone}), 0); // change color during the whole thing

var sceneFlux2 = new ScrollMagic.Scene({triggerElement: "#repereBulle7", duration: 200, tweenChanges: true})
				.setTween(tweenFlux2)
				.addTo(controller);


/*****FLUX 3****/
var tweenFlux3 = new TimelineMax()
	.add(TweenMax.to($flux3, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.3
	.add(TweenMax.to("path", 1, {stroke: "#f9bfa9", ease:Linear.easeNone}), 0); // change color during the whole thing

var sceneFlux3 = new ScrollMagic.Scene({triggerElement: "#repereBulle8", duration: 200, tweenChanges: true})
				.setTween(tweenFlux3)
				.addTo(controller);





/*FIXED PORTAIL*/
	$(function () { 
		var sceneEndBG = new ScrollMagic.Scene({triggerElement: "#repereFixeSysteme", duration: 3800})
			.setPin(".blocPortail")
			.addTo (controller);
		});

/*FIXED PORTAIL*/
	$(function () { 
		var tweenEndBG = new TimelineMax ()
			.add([
				TweenMax.to(".wall", 1, {display:"none", ease: Linear.easeNone}),
				TweenMax.to(".containHyperspace", 1, {animation: "FadeOut 1000ms linear both", opacity: 0, delay: 0}, {duration: 100}),
				TweenMax.to(".blocPlaneteS3", 1, {animation: "FadeOut 1000ms linear both", opacity: 0, delay: 0}, {duration: 100}),
				TweenMax.to("#fondPortailImg", 1, {animation: "FadeIn 1000ms linear both", opacity: 1, delay: 0}, {duration: 100})
			]);

		var sceneEndBG = new ScrollMagic.Scene({triggerElement: "#reperePortailFixe", duration: 0})
			.setTween(tweenEndBG)
			.addTo (controller);
		});




/*BULLES TXT 5 A 6*/
	$(function () { 
		var tweenBulle5 = new TimelineMax ()
			.add([
				TweenMax.from("#bulle5", 1, {autoAlpha: 0, left: "+=60", top: "+=50", scale: 0.2, ease: Back.easeOut})
			]);


		// build scene
		var sceneBulle5 = new ScrollMagic.Scene({triggerElement: '#repereBulle5'})
						.setTween(tweenBulle5)
						.addTo(controller);
	});




	$(function () { 
		var tweenBulle6 = new TimelineMax ()
			.add([
				TweenMax.from("#bulle6", 1, {autoAlpha: 0, left: "+=60", top: "+=50", scale: 0.2, ease: Back.easeOut})
			]);

		// build scene
		var sceneBulle6 = new ScrollMagic.Scene({triggerElement: '#repereBulle6'})
						.setTween(tweenBulle6)
						.addTo(controller);
	});




	$(function () { 
		var tweenBulle7 = new TimelineMax ()
			.add([
				TweenMax.from("#bulle7", 1, {autoAlpha: 0, left: "+=60", top: "+=50", scale: 0.2, ease: Back.easeOut})
			]);

		// build scene
		var sceneBulle7 = new ScrollMagic.Scene({triggerElement: '#repereBulle7'})
						.setTween(tweenBulle7)
						.addTo(controller);
	});




	$(function () { 
		var tweenBulle8 = new TimelineMax ()
			.add([
				TweenMax.from("#bulle8", 1, {autoAlpha: 0, left: "+=60", top: "+=50", scale: 0.2, ease: Back.easeOut})
			]);

		// build scene
		var sceneBulle8 = new ScrollMagic.Scene({triggerElement: '#repereBulle8'})
						.setTween(tweenBulle8)
						.addTo(controller);
	});






	$(function () {
		var tweenPortail = new TimelineMax ()
			.add([
				TweenMax.to("#portail", 1, {animation: "FadeIn 1000ms linear both", opacity: 1, delay: 0}, {duration: 0}),
				TweenMax.to(".fondPortail a", 1, {animation: "FadeIn 1000ms linear both", opacity: 1, delay: 0}, {duration: 0})
			]);

		var scenePortail = new ScrollMagic.Scene({triggerElement: "#reperePortalFadeIn"})
					.setTween(tweenPortail)
					.addTo(controller);

	});






/********************************************************   
----- - LECTEUR MUSIQUE -   ---- 
******************************************************/
      function play(idPlayer, control) {
          var player = document.querySelector('#' + idPlayer);
          var image = document.getElementById ("controlSon");
  
          if (player.paused) {
              player.play();
              image.src = 'menu/img/iconSonActive.png';
          } else {
              player.pause(); 
              image.src = 'menu/img/iconSonInactive.png';
          }
      };

      function resume(idPlayer) {
          var player = document.querySelector('#' + idPlayer);
  
          player.currentTime = 0;
          player.pause();
      };

