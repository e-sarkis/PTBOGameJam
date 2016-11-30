// Lander Specific Video
var landerVideos = $('.lander-video');
var landerVideosContainers = $('.lander-video-container');


// // Get Frame Reference

//


/*
   * Supporting Functions
   */
  //  function checkVimeo()
  //  {
  //      // Pause Video When Not Visible
  //      var isVideoVisible = videoContainer.visible(true);
  //      if ( !isVimeoReady ) return;
  //      if ( isVideoVisible && !isVideoPlaying) {
  //          vimeo.api("play");
  //          isVideoPlaying = true;
  //      } else if ( !isVideoVisible && isVideoPlaying ) {
  //          vimeo.api("pause");
  //          isVideoPlaying = false;
  //      }
  //  }

// TODO have it hide the container when its not the active slide

  //$(".flexslider")
  //     .fitVids()
  //     .flexslider({
  //       animation: "slide",
  //       useCSS: false,
  //       animationLoop: false,
  //       smoothHeight: true,
  //       before: function(slider){
  //         $f(player).api('pause');
  //       }
  //   });


// Handle OnLoad Events
$(window).load(function()
{
  landerVideos.each(function( index ) {
    //$(this)
  });


  // Handle Slider
  $('.jx-main-slider .flexslider').flexslider({
    animation: "slide",
    controlNav: false,
    directionNav:true,
    slideshowSpeed:"11000",
    minItems: 1,
    maxItems: 1,
    prevText:'',
    nextText:'',
  });


  // Mobile fixes - Makes user hit play
  if ( isMobile() ) {
    $(landerVideos).each(function(frame) {
        frame.attr('src', frame.attr('mobile-src'));
    });
  }
  //console.log($(currentSlide).find("div.video-event-box"));
//  var frooga = for each landervideos[0];
//var vimeo = $f(frooga);
});
//jx-event-box video-event-box


// Handle Video Event Boxes (So Annoying)
function fixVideoEventBox()
{
    // Look at all slides
    $("ul.slides li").each(function(index,targetSlide) {
      // Find a box
      var currentVideoEventBox = $(targetSlide).find("div.video-event-box");

      // Cache DOM calls
      var windowHeight = $(window).height();
      var windowHeightChunk = ((windowHeight / 5) * 2);

      if ( $(currentVideoEventBox).length ) {

        var verticalOffset = 0;

        if ( $(currentVideoEventBox).hasClass("event-box-no-reset")) {

          verticalOffset =  // Remove full screen height
                            windowHeightChunk -
                            // Subtract half the box height
                            ($(currentVideoEventBox).find("div.jx-event-title-box").height() / 2);
        } else {

          verticalOffset =  // Remove full screen height
                            (windowHeight * -1) +
                            // Find Mid Point
                            windowHeightChunk  -
                            // Subtract half the box height
                            ($(currentVideoEventBox).find("div.jx-event-title-box").height() / 2);
        }

        var elementWidth = 0;
        $(currentVideoEventBox).children().each(function() {
          elementWidth += $(this).outerWidth( true );
        });

        var widthAmount = // Center Point
                          ($(currentVideoEventBox).closest("div.container").width() / 2) -
                          // Half the elementWidth
                          (elementWidth  / 2);

        // Stops senseless repaints
        if ( $(currentVideoEventBox).css("top") != (verticalOffset+"px")) {
          $(currentVideoEventBox).css("top", verticalOffset + "px");
        }

        if ( $(currentVideoEventBox).css("left") != (widthAmount+"px")) {
          $(currentVideoEventBox).css("left", widthAmount + "px");
        }
    }
  });
}

// Handle Resize Events
$(window).resize(function() { onResizeLander(); });

function onResizeLander()
{
  // Handle Video Resizes
  landerVideos.each(function( index ) {
    // Make sure the base container is a fullscreen height
    $(this).css('height', window.innerHeight + 'px');

    var widthOfMovie = (window.innerHeight * 1.77);
    var heightOfMovie = window.innerHeight;

    // Check for special case
    if ( widthOfMovie < window.innerWidth )
    {
        widthOfMovie = window.innerWidth;
        heightOfMovie =  ((widthOfMovie/ 100) * 56.25);
    }

    // Calculate the offset to center it horizontally
    var marginLeft = (((widthOfMovie - window.innerWidth) / 2) * -1);
    var marginTop = (((heightOfMovie - window.innerHeight) / 2) * -1);

    // Update CSS for the iFrame
    $(this).css({
      width: widthOfMovie + 'px',
      height: heightOfMovie + 'px',
      marginLeft: marginLeft + 'px',
      marginTop: marginTop + 'px',
    });
  });

  // Handle Event Box
  fixVideoEventBox();
}

onResizeLander();
