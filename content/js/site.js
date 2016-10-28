
// Base URL Provided by Page
var baseURL = "";
function setBaseURL(path)
{
  baseURL = path;
}

// References
var siteHeader;
$( document ).ready(function() {
  siteHeader = $('div#header');
});

// Handle Scrolling Events
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

// Handle Resize Events
$(window).resize(function() { onResize(); });
function onResize()
{
    // Make all our fullwidth guys proper
    $('.jx-parallax-fullwidth').css('height', window.innerHeight + 'px');
}

// Handle Subscriber link
$('#mailinglist').submit(function() {
	document.location.href = "http://dotbunny.us7.list-manage.com/subscribe?u=862e4c930cb0704921c2b54e3&id=78848640c0&EMAIL=" + $('#EMAIL').val();
	return false;
});
