function resume_changer(){
  var isChecked = document.getElementById("resume_checkbox").checked;
  if(!isChecked){
    document.getElementById("resume_image").innerHTML = '<img src="../images/active-resume-ece.jpg" width="80%"/>';
    document.getElementById("resume_jpg_download").innerHTML = '<a href="/active-resume-ece.pdf">Resume PDF'
    document.getElementById("resume_pdf_download").innerHTML = '<a href="../images/active-resume-ece.jpg">Resume JPG'

  } else {
    document.getElementById("resume_image").innerHTML = 	'<img src="../images/active-resume-ast.jpg" width="80%"/>';
    document.getElementById("resume_jpg_download").innerHTML = '<a href="/active-resume-ast.jpg">Resume PDF'
    document.getElementById("resume_pdf_download").innerHTML = '<a href="../images/active-resume-ece.jpg">Resume JPG'

  }
}
