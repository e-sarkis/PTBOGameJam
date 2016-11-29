// Lander Specific Video
var landerVideos = $('.lander-video');





// // Get Frame Reference

//
//     // Immediate Vimeo's src to have the play button when we are on mobile.
//     // We have to do this as there is a generally accepted protocol on mobile that videos
//     // do not autoplay on a webpage
//     if (navigator.userAgent.match(/(Android|iPhone|iPod|iPad)/))
//     {
//         videoFrame.attr('src', 'https://player.vimeo.com/video/165886198?background=0&api=1&player_id=video-frame');
//     }

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


// Handle Resize Events
$(window).resize(function() { onResizeLander(); });

function onResizeLander()
{
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
}

onResizeLander();
