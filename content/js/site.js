
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

function setLogoStyle(style)
{
  if (style.toLowerCase() == "light")
  {
    siteLogo.removeClass("dark");
    siteLogo.addClass("light");
  }
  else
  {
    siteLogo.removeClass("light");
    siteLogo.addClass("dark");
  }
}

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
      setLogoStyle("dark");
  }
  else
  {
    siteHeader.removeClass("fixed");
    setLogoStyle(savedHeroStyle);
  }
  
}




var savedHeroStyle = "";
function checkHeroSlider(slider)
{
  // Save our color
  savedHeroStyle = slider.slides[slider.currentSlide].getAttribute("logo");

  // Leave because we dont actually care right now
  if ( siteHeader.hasClass("fixed") ) return;

  // Set it because if we dont, evil wins.
  setLogoStyle(savedHeroStyle);
}
