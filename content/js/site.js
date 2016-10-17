
// Base URL Provided by Page
var baseURL = "";
function setBaseURL(path)
{
  baseURL = path;
}

// References
var siteHeader;
var siteLogo;

$( document ).ready(function() {
  siteHeader = $('div#header');
  siteLogo = $('img#logo');
});

// Handle Scrolling
$(window).scroll(function () { onScroll(); });
function onScroll()
{
  var scroll = window.pageYOffset || document.documentElement.scrollTop;
  var position = siteHeader.position();
  var top = siteHeader.css('top');

  if ( scroll >= position.top+1)
  {
      siteHeader.addClass("fixed");
  }
  else
  {
    siteHeader.removeClass("fixed");
  }

}

$(window).resize(function() { onResize(); });
function onResize()
{
    // Make all our fullwidth guys proper
    $('.jx-parallax-fullwidth').css('height', window.innerHeight + 'px');

//  jQuery('.jx-parallax-fullwidth').css({'height':((jQuery(window).height()))+'px'});
  //jQuery('.jx-parallax-fullwidth').css({'height':((jQuery(window).height()))+'px'});
}
