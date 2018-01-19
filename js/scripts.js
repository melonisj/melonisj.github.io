function resume_changer(){
  var isChecked = document.getElementById("resume_checkbox").checked;
  if(isChecked){
    document.getElementById("resume_image").innerHTML = 	'<img src="../images/active-resume-ece.jpg" width="80%"/>';
  } else {
    document.getElementById("resume_image").innerHTML = 	'<img src="../images/active-resume-ast.jpg" width="80%"/>';

  }
}
