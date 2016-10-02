
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

  // Handle our logo coloring
  if ( siteHeader.hasClass("fixed") )
  {
    setLogoStyle("dark");
  }
  else if ( !siteHeader.hasClass("fixed") && siteLogo.hasClass("dark") )
  {
    setLogoStyle("light");
  }


  // Check if were 'fixed' logo, if so, make it light no matter what, if were not we look at the current loaded frame of hero?
}
