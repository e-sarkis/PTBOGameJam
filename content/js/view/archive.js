// Data Process
var jqxhr = $.getJSON( "/data/archive.json", function(data) {
  
    console.log(data);
  
})
  .done(function() {
    console.log( "second success" );
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log( "complete" );
  });
 
// Perform other work here ...
 
// Set another completion function for the request above
jqxhr.complete(function() {
  console.log( "second complete" );
});