$(function() {
  var members = ["aditya"];
  //members.push(f_name + l_name);
  $( "#input_name" ).autocomplete({
    source: members
  });
});

