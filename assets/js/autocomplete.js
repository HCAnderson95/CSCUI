$(function() {
  var members = [];
  //members.push(f_name + l_name);
  $( "#tags" ).autocomplete({
    source: availableTags
  });
});