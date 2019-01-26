$(document).ready(function(){
/* this button is used in DupWidChk.php file
    $("#firstNext").click(function(){
        $("#page1st").slideUp();
		$("#page2nd").slideDown();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
    });
*/	



	$("#secondNext").click(function(){
		
		var visitOC = document.getElementsByName("visitOutCome");
		if(visitOC[0].checked==true){
        $("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideDown();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		}
		else if(visitOC[0].checked==false && visitOC[1].checked==false && visitOC[2].checked==false && visitOC[3].checked==false && visitOC[4].checked==false && visitOC[5].checked==false){
			jAlert("Please select one visit outcome.");
			}
		else{
		$("#page1st").slideDown();
		$("#page2nd").slideDown();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		$("#save_content").slideDown();
		document.getElementById("submit").disabled=false;
		$("#1_page_button").hide();
		$("#2_page_button").hide();
		
		document.getElementById("Q111_for_save").value = "";
		document.getElementById("Q112").value = "";
		document.getElementById("Q114a").disabled=true;
		document.getElementById("Q114b").disabled=true;
		document.getElementById("Q115a").disabled=true;
		document.getElementById("Q115b").disabled=true;
		document.getElementById("Q115c").disabled=true;
		document.getElementById("Q115d").disabled=true;
		document.getElementById("Q115e").disabled=true;
		document.getElementById("Q115o").disabled=true;
		
			}
		
    });
	
	$("#secondPre").click(function(){
		document.getElementsByName("visitOutCome")[0].checked =false;
		document.getElementsByName("visitOutCome")[1].checked =false;
		document.getElementsByName("visitOutCome")[2].checked =false;
		document.getElementsByName("visitOutCome")[3].checked =false;
		document.getElementsByName("visitOutCome")[4].checked =false;
		document.getElementsByName("visitOutCome")[5].checked =false;
		
		$("#page1st").slideDown();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		});
	
	
	
	$("#thirdNext").click(function(){
		if ($("#Q107").val()=="" || $("#Q107").val().length==0){
			jAlert("Please select a date from the selected date button. This field cannot be blank.")
			}
			else{
        $("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideDown();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
			}
    });
	
	$("#thirdPre").click(function(){
		$("#Q107").val("");
		$("#Q107_for_save").val("");
		$("#page1st").slideDown();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		});
		
		
		
	
	
	
	
	
	
	
	
	
		$("#fourthNext").click(function(){
			
			
			var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    if (m<10){ m="0"+m;} else{ m=m;}
	if (h<10){ h="0"+h;} else{ h=h; }
	
	var CurrentTime =  h+""+m;
	/*
		var time = document.getElementById('Q108_display').value;
		var hrs = Number(time.match(/^(\d+)/)[1]);
		var mnts = Number(time.match(/:(\d+)/)[1]);
		var format = time.match(/\s(.*)$/)[1];
		if (format == "PM" && hrs < 12) hrs = hrs + 12;
		if (format == "AM" && hrs == 12) hrs = hrs - 12;
		var hours = hrs.toString();
		var minutes = mnts.toString();
		if (hrs < 10) hours = "0" + hours;
		if (mnts < 10) minutes = "0" + minutes;
	 */
		document.getElementById('Q108').value = document.getElementById('Q108_display').value;
			
		if ($("#Q108").val()=="" || $("#Q108").val().length < 5 || $("#Q108_display").val().length < 5){
		jAlert("Please touch on the text box and use the buttons to enter the time. Make sure &quot;HOUR:MINUTE&quot; is entered. This field cannot be blank");
		}		
		else if((CurrentTime) <= ($("#Q108").val().substring(0,2)+$("#Q108").val().substring(3,5)) && ($("#Q107").val().substring(0,2) == $("#Q111").val().substring(0,2))){
			jAlert("Time of last breast feeding cannot be greater then visit time. Please check the time.");
			}
		else{
	//	document.getElementById("h").readOnly = true;
	//	document.getElementById("m").readOnly = true;
						
        $("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideDown();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		}
    });
	$("#fifthNext").click(function(){
		if(($("#Q109").val().length<4) || ($("#Q109").val()>9999) || ($("#Q109").val()<2000) ){
			jAlert("Entered value should be in 4 digit and cannot be greater then 8000gm or less then 2000gm.")
			}
			else{
        $("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideDown();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
			}
    });
	
	
$("#fourthPre").click(function(){
		$("#Q108").val("");
		$("#Q108_display").val("");
		$("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideDown();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		});	
	
	
	
	
	
		$("#sixthNext").click(function(){
			var pre_wgt = parseInt(document.getElementById("Q109").value)+ parseInt("500");
			
			if(($("#Q110").val().length<4) || ($("#Q110").val()>9999) || ($("#Q110").val()<2000) || ($("#Q110").val() < $("#Q109").val()) || ($("#Q110").val() > pre_wgt) ){
			jAlert("Entered value should be in 4 digit and cannot be greater then 8000gm or less then 2000gm or less then pre-feeding weight or greater then pre-feeding weight "+pre_wgt+".");
			}
			else{
        $("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
	//	$("#page10thUrine").slideDown(); in version 2 added and at version 3 this variable removed
		$("#page7th").slideDown();
//		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
			}
    });
	
	
	




/*

$("#tenthNextUrine").click(function(){ //this varibale is added in version 2 and removed in version 3
		var Q110Urine = document.getElementsByName("Q110Urine");

		if(Q110Urine[0].checked==false && Q110Urine[1].checked==false){
			jAlert("Please select one option.");
			}
			else{
		
        $("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page10thUrine").slideUp();
		$("#page10thStool").slideDown();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
			}
    });



$("#tenthNextStool").click(function(){
		var Q110Stool = document.getElementsByName("Q110Stool");

		if(Q110Stool[0].checked==false && Q110Stool[1].checked==false){
			jAlert("Please select one option.");
			}
			else{
		
        $("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page10thUrine").slideUp();
		$("#page10thStool").slideUp();
		$("#page7th").slideDown();
	//	$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
			}
    });
	
	
	
*/	
	
	


$("#fifthPre").click(function(){
		$("#Q109").val("");

		$("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideDown();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		});		
	
	
	
	
	
		$("#seventhNext").click(function(){
			
jConfirm('Sample is already collected', 'Confirm', function(q) {
	if (q){
			
	var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    if (m<10){ m="0"+m;} else{m=m;}
	if (h<10){ h="0"+h;}else{h=h;}
		document.getElementById("Q112").value = h+":"+m;			
        $("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideDown();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
	}
	});
    });
	
	

$("#sixthPre").click(function(){
		$("#Q110").val("");
		$("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideDown();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		});		
	
	
	
	
	
	
	
		$("#eightNext").click(function(){
        $("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideDown();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
    });
	
	
	

$("#seventhPre").click(function(){

		$("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page10thUrine").slideUp();
		$("#page10thStool").slideDown();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		});		
	
	
		$("#ninthNext").click(function(){
			if($("#Q113").val().length<2 || $("#Q113").val()<10 || $("#Q113").val()>30){
				jAlert("Entered value should be in 2 digit and cannot be greater then 30 or less then 10")
				}
				else{
        $("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideDown();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
				}
    });
	
	
	
$("#eightPre").click(function(){
		$("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideDown();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		});			
	
	
	
	
	$("#tenthNext").click(function(){
		var q114 = document.getElementsByName("Q114");

		if(q114[0].checked==false && q114[1].checked==false && q114[2].checked==false){
			jAlert("Please select one option.");
			}
			else{
		
        $("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideDown();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
			}
    });
	
	


$("#ninthPre").click(function(){
		$("#Q113").val("");
		
		$("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideDown();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		});			
	
	
	
	
	$("#eleventhNext").click(function(){
		var Q115a  = document.getElementById("Q115a");
		var Q115b  = document.getElementById("Q115b");
		var Q115c  = document.getElementById("Q115c");
		var Q115d  = document.getElementById("Q115d");
		var Q115e  = document.getElementById("Q115e");
		
		if(Q115e.checked==true && document.getElementById("Q115o").selectedIndex==0){
				jAlert("You have selected the other conditions, but didnt specify what other conditions from the drop down menu. Please select one option from dropdown menu or deselect the other check box")
				}
			else{
        $("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideDown();		
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
			}
    });
	
	
	







$("#tenthPreUrine").click(function(){
		document.getElementsByName("Q110Urine")[0].checked = false;
		document.getElementsByName("Q110Urine")[1].checked = false;
		
		$("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideDown();
		$("#page10thUrine").slideUp();
		$("#page10thStool").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		});
		


$("#tenthPreStool").click(function(){
		document.getElementsByName("Q110Stool")[0].checked = false;
		document.getElementsByName("Q110Stool")[1].checked = false;
		
		$("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page10thUrine").slideDown();
		$("#page10thStool").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		});		



	


$("#tenthPre").click(function(){
		document.getElementsByName("Q114")[0].checked = false;
		document.getElementsByName("Q114")[1].checked = false;
		
		$("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideDown();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		});				
	
	
	
	
	$("#twelvethNext").click(function(){
		//alert();
		  if($("#Q201").val()=="" || $("#Q201").val().length<9 || $("#Q201").val().substr(0,2)!="BM"){
					jAlert("Please scan the pre-treated whatman card ID.")
					}
			else{
        $("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideDown();		
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
			}
    });
	
	
$("#eleventhPre").click(function(){

		document.getElementById("Q115a").checked=false;
		document.getElementById("Q115b").checked=false;
		document.getElementById("Q115c").checked=false;
		document.getElementById("Q115d").checked=false;
		document.getElementById("Q115e").checked=false;
		document.getElementById("Q115o").selectedIndex = 0;
		document.getElementById("Q115_oth").style.display="none";
		
		
		$("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideDown();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		});				



$("#twelvethPre").click(function(){
		
		$("#Q201").val("");
		$("#Q201_scanned").val("");
		$("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideDown();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		});				
		
		
$("#thirteenthPre").click(function(){
		
		$("#Q202").val("");
		$("#Q202_scanned").val("");
		$("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideDown();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		});	
		
		
$("#fourteenthPre").click(function(){
		
		$("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideDown();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		});								

	
$("#fifteenthPre").click(function(){
		
		$("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideDown();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		});
		
		

$("#sixteenthPre").click(function(){
		$("#Q205").val("");
		$("#Q205_for_save").val("");
		$("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideDown();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		});			
		


$("#seventeenthPre").click(function(){
		$("#Q206").val("");
		$("#Q206_display").val("");
		$("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideDown();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		});					
		

$("#eighteenthPre").click(function(){
	
	$("#Q207").val("");
	$("#Q207_scanned").val("");

		$("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideDown();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		});
		
		
	
$("#nineteenthPre").click(function(){
	
	$("#Q208").val("");
	$("#Q208_scanned").val("");

		$("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideDown();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		});
		
		
		
		
$("#twentyPre").click(function(){
	
		$("#Q209").val("");
	
		$("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideDown();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		});
		
		


$("#twentyonePre").click(function(){
	
		$("#Q210").val("");
	
		$("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideDown();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		});	
		
		
		
		
$("#twentytwoPre").click(function(){
	
	
		$("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideDown();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		});
		
		
		

$("#twentythreePre").click(function(){
	$("#Q212").val("");
	$("#Q212_display").val("");
		$("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideDown();
		$("#page23rd").slideUp();
		});
		
		
		

$("#backToQ").click(function(){
if(document.getElementsByName("visitOutCome")[0].checked==true){
	document.getElementById("whowid").readOnly = false;
	var Q114 = document.getElementsByName("Q114");
	var voc = document.getElementsByName("visitOutCome");
		voc[1].disabled = false;
		voc[2].disabled = false;
		voc[3].disabled = false;
		voc[4].disabled = false;
		voc[5].disabled = false;
		Q114[0].disabled = false;
		Q114[1].disabled = false;
		Q114[2].disabled = false;
		
		$("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideDown();
		
		$("#save_content").slideUp();
		
		
		
		
		//$("#Q107_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#1_page_button").show();
		$("#ForReCheckMSG").hide();
		$("#firstNext").show();
		//$("#datePick").hide();
		
		//$("#Q107_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#2_page_button").show();
		//$("#datePick").hide();
		
		$("#Q107_container_for_class").removeClass('After_save_QuestionContainer').addClass('QuestionContainer');
		$("#3_page_button").show();
		$("#datePick").hide();
		
		$("#Q108_container_for_class").removeClass('After_save_QuestionContainer').addClass('QuestionContainer');
		$("#4_page_button").show();
		$("#timePick").hide();
		
		$("#Q109_container_for_class").removeClass('After_save_QuestionContainer').addClass('QuestionContainer');
		$("#5_page_button").show();
		$("#Q109_numPad").hide();
		
		$("#Q110_container_for_class").removeClass('After_save_QuestionContainer').addClass('QuestionContainer');
		$("#6_page_button").show();
		$("#Q110_numPad").hide();
			
		$("#Q111_container_for_class").removeClass('After_save_QuestionContainer').addClass('QuestionContainer');
		$("#7_page_button").show();
		
		
		$("#Q112_container_for_class").removeClass('After_save_QuestionContainer').addClass('QuestionContainer');
		$("#8_page_button").show();
		
		$("#Q113_container_for_class").removeClass('After_save_QuestionContainer').addClass('QuestionContainer');
		$("#9_page_button").show();
		$("#Q113_numPad").hide();
		
		$("#Q114_container_for_class").removeClass('After_save_QuestionContainer').addClass('QuestionContainer');
		$("#10_page_button").show();
		
		//$("#Q115_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#11_page_button").show();
		
		$("#Q201_container_for_class").removeClass('After_save_QuestionContainer').addClass('QuestionContainer');
		$("#12_page_button").show();
		
		
		$("#Q202_container_for_class").removeClass('After_save_QuestionContainer').addClass('QuestionContainer');
		$("#13_page_button").show();
		
		$("#Q203_container_for_class").removeClass('After_save_QuestionContainer').addClass('QuestionContainer');
		$("#14_page_button").show();
		
		$("#Q204_container_for_class").removeClass('After_save_QuestionContainer').addClass('QuestionContainer');
		$("#15_page_button").show();
		
		$("#Q205_container_for_class").removeClass('After_save_QuestionContainer').addClass('QuestionContainer');
		$("#16_page_button").show();
		$("#Q205_datePick").hide();
		
		
		
		$("#Q206_container_for_class").removeClass('After_save_QuestionContainer').addClass('QuestionContainer');
		$("#17_page_button").show();
		$("#timePick_206").hide();
		
		$("#Q207_container_for_class").removeClass('After_save_QuestionContainer').addClass('QuestionContainer');
		$("#18_page_button").show();
		
		
		
		$("#Q208_container_for_class").removeClass('After_save_QuestionContainer').addClass('QuestionContainer');
		$("#19_page_button").show();
		
		$("#Q209_container_for_class").removeClass('After_save_QuestionContainer').addClass('QuestionContainer');
		$("#20_page_button").show();
		$("#Q209_numPad").hide();
		
		$("#Q210_container_for_class").removeClass('After_save_QuestionContainer').addClass('QuestionContainer');
		$("#21_page_button").show();
		$("#Q210_numPad").hide();
		
		$("#Q211_container_for_class").removeClass('After_save_QuestionContainer').addClass('QuestionContainer');
		$("#22_page_button").show();
		
		$("#Q212_container_for_class").removeClass('After_save_QuestionContainer').addClass('QuestionContainer');
		$("#23_page_button").show();
		$("#timePick_212").hide();
		
		document.getElementById("submit").disabled = true;
}
else{
		$("#page1st").slideDown();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		
		$("#save_content").slideUp();
	
			//$("#Q107_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#1_page_button").show();
		$("#ForReCheckMSG").hide();
		$("#firstNext").show();
		//$("#datePick").hide();
		
		//$("#Q107_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#2_page_button").show();
		//$("#datePick").hide();
		document.getElementById("submit").disabled = true;
		
		var vsoc = document.getElementsByName("visitOutCome");
		vsoc[0].disabled = false;		
		vsoc[1].disabled = false;
		vsoc[2].disabled = false;		
		vsoc[3].disabled = false;		
		vsoc[4].disabled = false;		
		vsoc[5].disabled = false;
		
			}
		});
		
								
											
	
	
	
	$("#thirteenthNext").click(function(){
		
		
var Q203_Date_generator = new Date;

var CDate =  Q203_Date_generator.getDate();
if (CDate <10){ CDate = "0"+CDate;} else { CDate = CDate;}

var CMon =  Q203_Date_generator.getMonth()+1;
if (CMon <10){ CMon = "0"+CMon; } else { CMon = CMon; }

var CYer =  Q203_Date_generator.getFullYear();

//var CHour =  Q203_Date_generator.getHours();
//if (CHour<10){ CHour = "0"+CHour; } else{ CHour = CHour; }
//var CMin = Q203_Date_generator.getMinutes();
//if (CMin<10){ CMin = "0"+Min; } else{ CMin = CMin; }

	document.getElementById("Q203").value = CDate+"-"+CMon+"-"+CYer;
	document.getElementById("Q203_for_save").value = CYer+"-"+CMon+"-"+CDate;
//	document.getElementById("Q204").value = CHour+":"+CMin;
	
	document.getElementById("Q211").value = CDate+"-"+CMon+"-"+CYer;
	document.getElementById("Q211_for_save").value = CYer+"-"+CMon+"-"+CDate;
		
		
		
		
		if($("#Q201").val()==$("#Q202").val()){
			jAlert("Pre-treated and Protein saver whatman card cannot be same")
			}
			else if($("#Q201").val().substr(0,6)!=$("#Q202").val().substr(0,6)){
				jAlert("Specmen ID, first 3 digit should be same.")
				}
				else if($("#Q202").val()=="" || $("#Q202").val().length < 9){
					jAlert("Please scan the protein saver whatman card ID.")
					}
			else{

			
				
        $("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideDown();		
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
			}
    });	
	
	$("#fourteenthNext").click(function(){	
		
	jConfirm('sample aliquoting is done.', 'Confirm', function(q) {
	if (q){	
		
		if($("#Q203").val().length < 10){
			jAlert("Date format is not valid");
			}
			else{
        $("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideDown();		
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
			}
	}
	});
var Q204_time = new Date();
var CHour =  Q204_time.getHours();
if (CHour<10){ CHour = "0"+CHour; } else{ CHour = CHour; }
var CMin = Q204_time.getMinutes();
if (CMin<10){ CMin = "0"+Min; } else{ CMin = CMin; }

document.getElementById("Q204").value = CHour+":"+CMin;

			
    });
	
	$("#fifteenthNext").click(function(){
		if($("#Q204").val().length < 5){
			jAlert("Time format is not valid");
			}
			else if($("#Q204").val().substr(0,2)+$("#Q204").val().substr(3,5) <= $("#Q112").val().substr(0,2)+$("#Q112").val().substr(3,5) && $("#Q203").val().substr(0,2) == $("#Q111").val().substr(0,2)){
				jAlert("Aliquoting time should be greater then sample collection time.");
				}
			else{
        $("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideDown();		
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
			}
    });			
	
	$("#sixteenthNext").click(function(){
				if ($("#Q205").val()=="" || $("#Q205").val().length==0){
			jAlert("Please select a date from the selected date button. This field cannot be blank.")
			}
			else{
        $("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideDown();		
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
			}
    });
	
	$("#seventeenthNext").click(function(){
		var time = document.getElementById('Q206_display').value;
/*var hrs = Number(time.match(/^(\d+)/)[1]);
var mnts = Number(time.match(/:(\d+)/)[1]);
var format = time.match(/\s(.*)$/)[1];
if (format == "PM" && hrs < 12) hrs = hrs + 12;
if (format == "AM" && hrs == 12) hrs = hrs - 12;
var hours = hrs.toString();
var minutes = mnts.toString();
if (hrs < 10) hours = "0" + hours;
if (mnts < 10) minutes = "0" + minutes;
*/
document.getElementById('Q206').value = document.getElementById('Q206_display').value;
		
if ($("#Q206").val()=="" || $("#Q206").val().length < 5 || $("#Q108").val().length < 5 || $("#Q206_display").val().length < 5){
		jAlert("Please touch on the text box and use the buttons to enter the time. Make sure &quot;HOUR:MINUTE&quot; is entered. This field cannot be blank");
		}		
		else if($("#Q112").val().substring(0,2)+$("#Q112").val().substring(3,5) >= $("#Q206").val().substring(0,2)+$("#Q206").val().substring(3,5) && $("#Q205").val().substring(0,2) == $("#Q111").val().substring(0,2)){
			jAlert("Collection shipment time should be greater then visit time. Please check the time.");
			}
		else if($("#Q204").val().substring(0,2)+$("#Q204").val().substring(3,5) >= $("#Q206").val().substring(0,2)+$("#Q206").val().substring(3,5) && $("#Q205").val().substring(0,2) == $("#Q111").val().substring(0,2)){
			jAlert("Collection shipment time should be greater then aliquoting time. Please check the time.");
			}	
		else{			
		//document.getElementById("h").readOnly = true;
		//document.getElementById("m").readOnly = true;
        $("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideDown();		
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		}
    });					

	$("#eighteenthNext").click(function(){
		if($("#Q201").val()==$("#Q207").val() || $("#Q202").val()==$("#Q207").val()){
			jAlert("Pre-treated and Protein saver whatman card cannot be same with specime ID on tube.")
			}
			else if($("#Q201").val().substr(0,6)!=$("#Q207").val().substr(0,6) || $("#Q202").val().substr(0,6)!=$("#Q207").val().substr(0,6)){
				jAlert("Specmen ID, first 3 digit should be same.")
				}
				else if($("#Q207").val()=="" || $("#Q207").val().length < 9){
					jAlert("Please scan the specime ID on tube.")
					}
			else{
        $("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideDown();		
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
			}
    });						

	$("#nineteenthNext").click(function(){
		if($("#Q201").val()==$("#Q208").val() || $("#Q202").val()==$("#Q208").val() || $("#Q207").val()==$("#Q208").val()){
		jAlert("Pre-treated, Protein saver and Specimen ID on tube no foil, cannot be same with specime ID on tube with foil.")
			}
			else if($("#Q201").val().substr(0,6)!=$("#Q208").val().substr(0,6) || $("#Q202").val().substr(0,6)!=$("#Q208").val().substr(0,6) || $("#Q207").val().substr(0,6)!=$("#Q208").val().substr(0,6)){
				jAlert("Specmen ID, first 3 digit should be same.")
				}
				else if($("#Q208").val()=="" || $("#Q208").val().length < 9){
					jAlert("Please scan the specime ID on tube.")
					}
			else{
        $("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideDown();		
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
			}
    });						

	$("#twentyNext").click(function(){
		if ($("#Q209").val().length < 4 || $("#Q209").val()=="" || $("#Q209").val() < '03.0' || $("#Q209").val() > '08.0' ){
			jAlert("Please enter a valid amount. Volume cannot be greater then 08.0 or less then 03.0");
		}
		else{
        $("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideDown();		
		$("#page22nd").slideUp();
		$("#page23rd").slideUp();
		}
    });								

	$("#twentyoneNext").click(function(){
//		var Q113 = parseFloat($("#Q113").val()).toFixed(0);
	if ($("#Q210").val().length < 4 || $("#Q210").val()=="" || $("#Q210").val() < '03.0' || $("#Q210").val() > '08.0' ){
			jAlert("Please enter a valid amount. Volume cannot be greater then 08.0 or less then 03.0");
		}
	else if ($("#Q210").val() > $("#Q209").val()){
			jAlert("Volume in tube, with foil cannot be greater then without foil.");
		}	
//else if ((parseFloat($("#Q210").val())+parseFloat($("#Q209").val())) != $("#Q113").val()){
//jAlert("Approximate volume was "+Q113+". Please make sure valume in tube, with foil and without foil match with //approximate valume.");
//		}	
		else{
        $("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideDown();		
		$("#page23rd").slideUp();
		}
    });

	$("#twentytwoNext").click(function(){
        $("#page1st").slideUp();
		$("#page2nd").slideUp();
		$("#page3rd").slideUp();
		$("#page4th").slideUp();
		$("#page5th").slideUp();
		$("#page6th").slideUp();
		$("#page7th").slideUp();
		$("#page8th").slideUp();
		$("#page9th").slideUp();
		$("#page10th").slideUp();
		$("#page11th").slideUp();
		$("#page12th").slideUp();
		$("#page13th").slideUp();
		$("#page14th").slideUp();
		$("#page15th").slideUp();
		$("#page16th").slideUp();
		$("#page17th").slideUp();
		$("#page18th").slideUp();
		$("#page19th").slideUp();
		$("#page20th").slideUp();
		$("#page21st").slideUp();
		$("#page22nd").slideUp();
		$("#page23rd").slideDown();		
		
    });
	$("#twentythreeNext").click(function(){
		
		var time = document.getElementById('Q212_display').value;
/*var hrs = Number(time.match(/^(\d+)/)[1]);
var mnts = Number(time.match(/:(\d+)/)[1]);
var format = time.match(/\s(.*)$/)[1];
if (format == "PM" && hrs < 12) hrs = hrs + 12;
if (format == "AM" && hrs == 12) hrs = hrs - 12;
var hours = hrs.toString();
var minutes = mnts.toString();
if (hrs < 10) hours = "0" + hours;
if (mnts < 10) minutes = "0" + minutes;
*/
document.getElementById('Q212').value = document.getElementById('Q212_display').value;
		if	($("#Q212").val().length<5){
			jAlert("Please enter a valid time");			
			}	
		else if ($("#Q212").val().substr(0,2)+$("#Q212").val().substr(3,5) <= $("#Q112").val().substr(0,2)+$("#Q112").val().substr(3,5)){
	jAlert("Time should be greater then sample collection time.");	
		}
		else if ($("#Q212").val().substr(0,2)+$("#Q212").val().substr(3,5) <= $("#Q204").val().substr(0,2)+$("#Q204").val().substr(3,5)){
	jAlert("Time should be greater then aliquoting time.");	
		}
		else if($("#Q212").val().substr(0,2)+$("#Q212").val().substr(3,5) >=  $("#Q206").val().substr(0,2)+$("#Q206").val().substr(3,5) &&  $("#Q205").val().substr(0,2) == $("#Q111").val().substr(0,2)){
			jAlert("Time should be less then shipment time");
			}
		else{
		
		document.getElementById("whowid").readOnly = true;	
		var voc = document.getElementsByName("visitOutCome");
		voc[1].disabled = true;
		voc[2].disabled = true;
		voc[3].disabled = true;
		voc[4].disabled = true;
		voc[5].disabled = true;
		
		
			
		//document.getElementById("h").readOnly = true;
		//document.getElementById("m").readOnly = true;
		//$("#Q107_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#1_page_button").hide();
		//$("#datePick").hide();
		
		//$("#Q107_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#2_page_button").hide();
		//$("#datePick").hide();
		
		$("#Q107_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#3_page_button").hide();
		$("#datePick").hide();
		
		$("#Q108_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#4_page_button").hide();
		$("#timePick").hide();
		
		$("#Q109_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#5_page_button").hide();
		$("#Q109_numPad").hide();
		
		$("#Q110_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#6_page_button").hide();
		$("#Q110_numPad").hide();
			
		$("#Q111_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#7_page_button").hide();
		
		
		$("#Q112_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#8_page_button").hide();
		
		$("#Q113_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#9_page_button").hide();
		$("#Q113_numPad").hide();
		
		$("#Q114_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#10_page_button").hide();
		
		//$("#Q115_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#11_page_button").hide();
		
		$("#Q201_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#12_page_button").hide();
		
		
		$("#Q202_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#13_page_button").hide();
		
		$("#Q203_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#14_page_button").hide();
		
		$("#Q204_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#15_page_button").hide();
		
		$("#Q205_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#16_page_button").hide();
		$("#Q205_datePick").hide();
		
		
		
		$("#Q206_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#17_page_button").hide();
		$("#timePick_206").hide();
		
		$("#Q207_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#18_page_button").hide();
		
		
		
		$("#Q208_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#19_page_button").hide();
		
		$("#Q209_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#20_page_button").hide();
		$("#Q209_numPad").hide();
		
		$("#Q210_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#21_page_button").hide();
		$("#Q210_numPad").hide();
		
		$("#Q211_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#22_page_button").hide();
		
		$("#Q212_container_for_class").removeClass('QuestionContainer').addClass('After_save_QuestionContainer');
		$("#23_page_button").hide();
		$("#timePick_212").hide();
	
			
			
		$("#page1st").slideDown();
		$("#page2nd").hide();
		$("#page3rd").slideDown();
		$("#page4th").slideDown();
		$("#page5th").slideDown();
		$("#page6th").slideDown();
		$("#page7th").slideDown();
		$("#page8th").slideDown();
		$("#page9th").slideDown();
		$("#page10th").slideDown();
		$("#page11th").slideDown();
		$("#page12th").slideDown();
		$("#page13th").slideDown();
		$("#page14th").slideDown();
		$("#page15th").slideDown();
		$("#page16th").slideDown();
		$("#page17th").slideDown();
		$("#page18th").slideDown();
		$("#page19th").slideDown();
		$("#page20th").slideDown();
		$("#page21st").slideDown();
		$("#page22nd").slideDown();
		$("#page23rd").slideDown();
		
		$("#save_content").slideDown();
		document.getElementById("submit").disabled = false;
		
		var Q114 = document.getElementsByName("Q114");
		if(Q114[0].checked==true){
			Q114[0].disabled = false;
			Q114[1].disabled = true;
			Q114[2].disabled = true;
			}
			else if(Q114[1].checked==true){
			Q114[0].disabled = true;
			Q114[1].disabled = false;
			Q114[2].disabled = true;
				}
			else if(Q114[2].checked==true){
			Q114[0].disabled = true;
			Q114[1].disabled = true;
			Q114[2].disabled = false;
				}	
		
			}
		
    });			
		
	
	    });
		
		





		
		
		
		
		
	function isNumber(evt){
	var charCode= (evt.which) ? evt.which : event.keyCode
	if(charCode>31 && (charCode<48 || charCode>57))
	return false;
	return true;
	}