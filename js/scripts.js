var arrayBuild = function(fave1, fave2, fave3, fave4, fave5, fave6) {
  var formArray = [];
  var formArrayCopy = [];
  formArray.push(fave1);
  formArray.push(fave2);
  formArray.push(fave3);
  formArray.push(fave4);
  formArray.push(fave5);
  formArray.push(fave6);
  formArrayCopy.push(formArray[1]);
  formArrayCopy.push(formArray[0]);
  formArrayCopy.push(formArray[2]);
  return formArrayCopy;

}

$(document).ready(function() {
  $("form#favorites").submit(function(event) {
    event.preventDefault();
    var form = [];
    var fave1 = $("#fave1").val();
    var fave2 = $("#fave2").val();
    var fave3 = $("#fave3").val();
    var fave4 = $("#fave4").val();
    var fave5 = $("#fave5").val();
    var fave6 = $("#fave6").val();
    form = arrayBuild(fave1, fave2, fave3, fave4, fave5, fave6);


    $("#output").text(form);
  });
});
