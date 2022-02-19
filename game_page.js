function Send(){
    Number1 = document.getElementById("Number1").value
    Number2 = document.getElementById("Number2").value
    Actual_answer= parseInt(Number1) * parseInt(Number2)
 question_number= "<h4>"+Number1+"X"+Number2+"</h4>"
 input_box= "<br>Answer:<input type='text' id='abcd'"
 check_btn="<br><br><br><button class='btn btn-info' onclick='Check()'>Check</button>"
 jokrestore= question_number+input_box+check_btn
 document.getElementById("output").innerHTML=jokrestore
 document.getElementById("Number1").value=""
 document.getElementById("Number2").value=""
}