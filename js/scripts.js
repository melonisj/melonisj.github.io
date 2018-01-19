function resume_changer(){
  var isChecked = $("#resume_checkbox").checked;
  if(checked){
    $("#resume_image").innerHTML = 	'<img src="../images/active-resume-ece.jpg" width="80%"/>';
  } else {
    $("#resume_image").innerHTML = 	'<img src="../images/active-resume-ast.jpg" width="80%"/>';

  }
}
