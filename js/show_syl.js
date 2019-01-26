$(document).ready(function(){

		$("#Syl_CardReceived").click(function() {
		 if($("#Q302").val()=="" || $("#Q302_for_save").val()==""){
			 jAlert("Please select a date.")
			 }
			 else{
		$("#CardReceived").slideUp();
		$("#pageSyl_1st").slideDown();	
		$("#pageSyl_2nd").slideUp();
		$("#pageSyl_3rd").slideUp();
		$("#pageSyl_4th").slideUp();
		$("#pageSyl_5th").slideUp();
		$("#pageSyl_6th").slideUp();
		$("#pageSyl_7th").slideUp();
		$("#pageSyl_8th").slideUp();
		$("#pageSyl_9th").slideUp();
		$("#pageSyl_10th").slideUp();
		$("#pageSyl_11th").slideUp();
			 }

        });
	
	$("#Syl1st_Next").click(function() {
/*		if($("#Q303").val()==""){
			jAlert("Please enter the box ID for whatman card")
			}
			else{
		$("#CardReceived").slideUp();
		$("#pageSyl_1st").slideUp();
		$("#pageSyl_2nd").slideDown();	
		$("#pageSyl_3rd").slideUp();
		$("#pageSyl_4th").slideUp();
		$("#pageSyl_5th").slideUp();
		$("#pageSyl_6th").slideUp();
		$("#pageSyl_7th").slideUp();
		$("#pageSyl_8th").slideUp();
		$("#pageSyl_9th").slideUp();
		$("#pageSyl_10th").slideUp();
		$("#pageSyl_11th").slideUp();
			}
		*/	
        });
		
		
	$("#Syl2nd_Next").click(function() {
/*		if($("#Q303A_freazer").val()=="" || $("#Q303A_freazer").val().length<3){
			jAlert("Please enter freazer number and rack");
			}
		else if($("#Q303B_column").val()=="" || $("#Q303B_column").val().length<3){
			jAlert("Please enter freazer column number");
			}
		else if($("#Q303C_row").val()==""){
			jAlert("Please enter freazer row");
			}
		else{			
		$("#CardReceived").slideUp();
		$("#pageSyl_1st").slideUp();
		$("#pageSyl_2nd").slideUp();
		$("#pageSyl_3rd").slideDown();	
		$("#pageSyl_4th").slideUp();
		$("#pageSyl_5th").slideUp();
		$("#pageSyl_6th").slideUp();
		$("#pageSyl_7th").slideUp();
		$("#pageSyl_8th").slideUp();
		$("#pageSyl_9th").slideUp();
		$("#pageSyl_10th").slideUp();
		$("#pageSyl_11th").slideUp();

		
		var dateGenerator = new Date(); 
		var Day = dateGenerator.getDate();
		var Mon = dateGenerator.getMonth()+1;
		var Yer = dateGenerator.getFullYear();
	
		if (Day < 10){Day = "0"+Day;} else{ Day = Day; }
		if (Mon < 10){ Mon = "0"+Mon; } else{ Mon = Mon; }		
		
		document.getElementById("Q305").value = Day+"-"+Mon+"-"+Yer;
		document.getElementById("Q305_for_save").value = Yer+"-"+Mon+"-"+Day;
		document.getElementById("Q310").value = Day+"-"+Mon+"-"+Yer;
		document.getElementById("Q310_for_save").value = Yer+"-"+Mon+"-"+Day;
		document.getElementById("Q402").value = Day+"-"+Mon+"-"+Yer;
		document.getElementById("Q402_for_save").value = Yer+"-"+Mon+"-"+Day;         
		}
		*/
        });	
			
		$("#Syl3rd_Next").click(function() {
		$("#CardReceived").slideUp();
		$("#pageSyl_1st").slideUp();
		$("#pageSyl_2nd").slideUp();
		$("#pageSyl_3rd").slideUp();
		$("#pageSyl_4th").slideDown();	
		$("#pageSyl_5th").slideUp();
		$("#pageSyl_6th").slideUp();
		$("#pageSyl_7th").slideUp();
		$("#pageSyl_8th").slideUp();
		$("#pageSyl_9th").slideUp();
		$("#pageSyl_10th").slideUp();
		$("#pageSyl_11th").slideUp();

        });	
		
		$("#Syl4th_Next").click(function() {
document.getElementById('Q306').value = document.getElementById('Q306_display').value;		
			
	var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    if (m<10){ m="0"+m;} else{ m=m;}
	if (h<10){ h="0"+h;} else{ h=h; }
	
	var ctime = h+""+m;
	
if ($("#Q306_display").val()==""){
	jAlert("Please enter the time.")
	}
else if ($("#Q306").val().substr(0,2)+$("#Q306").val().substr(3,5) > ctime){
	jAlert("Time cannot be greater then current time")
	}
	else{		
		$("#CardReceived").slideUp();
		$("#pageSyl_1st").slideUp();
		$("#pageSyl_2nd").slideUp();
		$("#pageSyl_3rd").slideUp();
		$("#pageSyl_4th").slideUp();	
		$("#TubeReceived").slideDown();
		$("#pageSyl_5th").slideUp();
		$("#pageSyl_6th").slideUp();
		$("#pageSyl_7th").slideUp();
		$("#pageSyl_8th").slideUp();
		$("#pageSyl_9th").slideUp();
		$("#pageSyl_10th").slideUp();
		$("#pageSyl_11th").slideUp();
	}
	
        });
		
		$("#syl_TubeReceived").click(function() {
			if($("#Q307_TubeReceived").val()=="" || $("#Q307_TubeReceived_for_save").val()==""){
				jAlert("Please select a date.")
				}
				else{
		$("#CardReceived").slideUp();
		$("#pageSyl_1st").slideUp();
		$("#pageSyl_2nd").slideUp();
		$("#pageSyl_3rd").slideUp();
		$("#pageSyl_4th").slideUp();	
		$("#TubeReceived").slideUp();
		$("#pageSyl_5th").slideDown();
		$("#pageSyl_6th").slideUp();
		$("#pageSyl_7th").slideUp();
		$("#pageSyl_8th").slideUp();
		$("#pageSyl_9th").slideUp();
		$("#pageSyl_10th").slideUp();
		$("#pageSyl_11th").slideUp();
				}
        });		

$("#Syl5th_Next").click(function() {			
/*		if($("#Q308").val()==""){
			jAlert("Please enter the box ID for tubes.")
			}
			else{
		$("#CardReceived").slideUp();
		$("#pageSyl_1st").slideUp();
		$("#pageSyl_2nd").slideUp();
		$("#pageSyl_3rd").slideUp();
		$("#pageSyl_4th").slideUp();	
		$("#TubeReceived").slideUp();
		$("#pageSyl_5th").slideUp();
		$("#pageSyl_6th").slideDown();
		$("#pageSyl_7th").slideUp();
		$("#pageSyl_8th").slideUp();
		$("#pageSyl_9th").slideUp();
		$("#pageSyl_10th").slideUp();
		$("#pageSyl_11th").slideUp();
			}
	*/		
        });
	
$("#Syl6th_Next").click(function() {			
/*		if($("#Q309A_freazer").val()=="" || $("#Q309A_freazer").val().length<3){
			jAlert("Please enter freazer number and rack");
			}
		else if($("#Q309B_column").val()=="" || $("#Q309B_column").val().length<3){
			jAlert("Please enter freazer column number");
			}
		else if($("#Q309C_row").val()==""){
			jAlert("Please enter freazer row");
			}
		else{			


		$("#CardReceived").slideUp();
		$("#pageSyl_1st").slideUp();
		$("#pageSyl_2nd").slideUp();
		$("#pageSyl_3rd").slideUp();
		$("#pageSyl_4th").slideUp();	
		$("#TubeReceived").slideUp();
		$("#pageSyl_5th").slideUp();
		$("#pageSyl_6th").slideUp();
		$("#pageSyl_7th").slideDown();
		$("#pageSyl_8th").slideUp();
		$("#pageSyl_9th").slideUp();
		$("#pageSyl_10th").slideUp();
		$("#pageSyl_11th").slideUp();
		}
		*/
        });

$("#Syl7th_Next").click(function() {			
		$("#CardReceived").slideUp();
		$("#pageSyl_1st").slideUp();
		$("#pageSyl_2nd").slideUp();
		$("#pageSyl_3rd").slideUp();
		$("#pageSyl_4th").slideUp();	
		$("#TubeReceived").slideUp();
		$("#pageSyl_5th").slideUp();
		$("#pageSyl_6th").slideUp();
		$("#pageSyl_7th").slideUp();
		$("#pageSyl_8th").slideDown();
		$("#pageSyl_9th").slideUp();
		$("#pageSyl_10th").slideUp();
		$("#pageSyl_11th").slideUp();

        });						

$("#Syl8th_Next").click(function() {
document.getElementById('Q311').value = document.getElementById('Q311_display').value;
	
	var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    if (m<10){ m="0"+m;} else{ m=m;}
	if (h<10){ h="0"+h;} else{ h=h; }
	
	var ctime = h+""+m;
	
if ($("#Q311_display").val()==""){
	jAlert("Please enter the time.")
	}
else if ($("#Q311").val().substr(0,2)+$("#Q311").val().substr(3,5) > ctime){
	jAlert("Time cannot be greater then current time")
	}
	else{
				
		$("#CardReceived").slideUp();
		$("#pageSyl_1st").slideUp();
		$("#pageSyl_2nd").slideUp();
		$("#pageSyl_3rd").slideUp();
		$("#pageSyl_4th").slideUp();	
		$("#TubeReceived").slideUp();
		$("#pageSyl_5th").slideUp();
		$("#pageSyl_6th").slideUp();
		$("#pageSyl_7th").slideUp();
		$("#pageSyl_8th").slideUp();
		$("#pageSyl_9th").slideDown();
		$("#pageSyl_10th").slideUp();
		$("#pageSyl_11th").slideUp();
	}
        });
$("#Syl9th_Next").click(function() {			
		$("#CardReceived").slideUp();
		$("#pageSyl_1st").slideUp();
		$("#pageSyl_2nd").slideUp();
		$("#pageSyl_3rd").slideUp();
		$("#pageSyl_4th").slideUp();	
		$("#TubeReceived").slideUp();
		$("#pageSyl_5th").slideUp();
		$("#pageSyl_6th").slideUp();
		$("#pageSyl_7th").slideUp();
		$("#pageSyl_8th").slideUp();
		$("#pageSyl_9th").slideUp();
		$("#pageSyl_10th").slideDown();
		$("#pageSyl_11th").slideUp();

        });		
$("#Syl10th_Next").click(function() {			
if($("#Q401").val()==""){
	jAlert("User ID cannot be empty")
	}
else{
		$("#CardReceived").slideUp();
		$("#pageSyl_1st").slideUp();
		$("#pageSyl_2nd").slideUp();
		$("#pageSyl_3rd").slideUp();
		$("#pageSyl_4th").slideUp();	
		$("#TubeReceived").slideUp();
		$("#pageSyl_5th").slideUp();
		$("#pageSyl_6th").slideUp();
		$("#pageSyl_7th").slideUp();
		$("#pageSyl_8th").slideUp();
		$("#pageSyl_9th").slideUp();
		$("#pageSyl_10th").slideUp();
		$("#pageSyl_11th").slideDown();
}
        });				
		
				

    $("#Syl1st_Pre").click(function() {

        $("#CardReceived").slideDown();
		$("#pageSyl_1st").slideUp();
		$("#pageSyl_2nd").slideUp();
		$("#pageSyl_3rd").slideUp();
		$("#pageSyl_4th").slideUp();	
		$("#TubeReceived").slideUp();
		$("#pageSyl_5th").slideUp();
		$("#pageSyl_6th").slideUp();
		$("#pageSyl_7th").slideUp();
		$("#pageSyl_8th").slideUp();
		$("#pageSyl_9th").slideUp();
		$("#pageSyl_10th").slideUp();
		$("#pageSyl_11th").slideUp();
    });
	
	
    $("#Syl1st_Pre").click(function() {

        $("#CardReceived").slideDown();
		$("#pageSyl_1st").slideUp();
		$("#pageSyl_2nd").slideUp();
		$("#pageSyl_3rd").slideUp();
		$("#pageSyl_4th").slideUp();	
		$("#TubeReceived").slideUp();
		$("#pageSyl_5th").slideUp();
		$("#pageSyl_6th").slideUp();
		$("#pageSyl_7th").slideUp();
		$("#pageSyl_8th").slideUp();
		$("#pageSyl_9th").slideUp();
		$("#pageSyl_10th").slideUp();
		$("#pageSyl_11th").slideUp();
    });	

	
	
	
	
	
	
	
	
$("#Syl11th_Next").click(function() {			
	
	$("#Q107_container_for_class").removeClass('QuestionContainerSyl').addClass('After_save_QuestionContainerSyl_1st');
		$("#Syl_3_page_button").hide();
		$("#datePick").hide();
		$("#CardReceived").slideDown();
	
	
	$("#Q301_container_for_class").removeClass('QuestionContainerSyl').addClass('After_save_QuestionContainerSyl_1st');
		$("#1_page_button_Syl").hide();
		$("#Q301_numPad").hide();
		$("#pageSyl_1st").slideDown();	
		$("#Q303_details_ID").hide();
		
		
		$("#Q302_container_for_class").removeClass('QuestionContainerSyl').addClass('After_save_QuestionContainerSyl_large');
		$("#2_page_button_Syl").hide();
		$("#Q302_numPad").hide();
		$("#Q302_numPad_col").hide();
		$("#Q302_numPad_row").hide();
		$("#page_2_details").hide();
		$("#pageSyl_2nd").slideDown();	
		
		
		$("#Q303_container_for_class").removeClass('QuestionContainerSyl').addClass('After_save_QuestionContainerSyl');
		$("#3_page_button_Syl").hide();
		$("#page_3_details").hide();
		$("#pageSyl_3rd").slideDown();	
		
		
		$("#Q304_container_for_class").removeClass('QuestionContainerSyl').addClass('After_save_QuestionContainerSyl');
		$("#4_page_button_Syl").hide();
		$("#page_4_details").hide();
		$("#timePick_304").hide();
		$("#pageSyl_4th").slideDown();	
		
		
		$("#Q305_container_for_class").removeClass('QuestionContainerSyl').addClass('After_save_QuestionContainerSyl');
		$("#5_page_button_Syl").hide();
		$("#page_5_details").hide();
		$("#Q305_numPad").hide();
		$("#pageSyl_5th").slideDown();	
		
		
		$("#Q306_container_for_class").removeClass('QuestionContainerSyl').addClass('After_save_QuestionContainerSyl_large');
		$("#6_page_button_Syl").hide();
		$("#page_6_details").hide();
		$("#Q306_numPad").hide();
		$("#Q306_numPad_col").hide();
		$("#Q306_numPad_row").hide();		
		$("#pageSyl_6th").slideDown();	
		
		
		$("#TubeReceived_Q107_container_for_class").removeClass('QuestionContainerSyl').addClass('After_save_QuestionContainerSyl');
		$("#TubeReceived_3_page_button").hide();
		$("#TubeReceivedpage_5_details").hide();		
		$("#TubeReceived").slideDown();	
		
		
		
		$("#Q307_container_for_class").removeClass('QuestionContainerSyl').addClass('After_save_QuestionContainerSyl');
		$("#7_page_button_Syl").hide();
		$("#page_7_details").hide();		
		$("#pageSyl_7th").slideDown();	
		
		
		$("#Q308_container_for_class").removeClass('QuestionContainerSyl').addClass('After_save_QuestionContainerSyl');
		$("#8_page_button_Syl").hide();
		$("#page_8_details").hide();	
		$("#timePick_308").hide();	
		$("#pageSyl_8th").slideDown();	
		
		
		$("#Q309_container_for_class").removeClass('QuestionContainerSyl').addClass('After_save_QuestionContainerSyl_large');
		$("#box_page_button_Syl").hide();
		$("#page_9_details").hide();	
		$("#Q309_numPad_col").hide();	
		$("#Q309_numPad_row").hide();	
		$("#pageSyl_box").slideDown();	
		
		
		$("#Q310_container_for_class").removeClass('QuestionContainerSyl').addClass('After_save_QuestionContainerSyl');
		$("#9_page_button_Syl").hide();
		$("#page_10_details").hide();	
		$("#pageSyl_9th").slideDown();	
		
		
		$("#Q401_container_for_class").removeClass('QuestionContainerSyl').addClass('After_save_QuestionContainerSyl');
		$("#10_page_button_Syl").hide();
		$("#page_11_details").hide();	
		$("#pageSyl_10th").slideDown();	
		
		
		$("#Q402_container_for_class").removeClass('QuestionContainerSyl').addClass('After_save_QuestionContainerSyl');
		$("#11_page_button_Syl").hide();
		$("#page_12_details").hide();	
		$("#pageSyl_11th").slideDown();	
		
		
	$("#Q403_container_for_class").removeClass('QuestionContainerSyl').addClass('After_save_QuestionContainerSyl_VOutCome');
		$("#12_page_button_Syl").hide();
		$("#page_13_details").hide();	
		$("#pageSyl_12th").slideDown();	
		
		
		$("#save_content_syl").slideDown();	
		document.getElementById("submit").disabled = false;
		});
		
		    $("#Syl1st_Pre").click(function() {

        $("#CardReceived").slideDown();
		$("#pageSyl_1st").slideUp();
		$("#pageSyl_2nd").slideUp();
		$("#pageSyl_3rd").slideUp();
		$("#pageSyl_4th").slideUp();	
		$("#TubeReceived").slideUp();
		$("#pageSyl_5th").slideUp();
		$("#pageSyl_6th").slideUp();
		$("#pageSyl_7th").slideUp();
		$("#pageSyl_8th").slideUp();
		$("#pageSyl_9th").slideUp();
		$("#pageSyl_10th").slideUp();
		$("#pageSyl_11th").slideUp();
    });
	
	
    $("#Syl2nd_Pre").click(function() {

        $("#CardReceived").slideUp();
		$("#pageSyl_1st").slideDown();
		$("#pageSyl_2nd").slideUp();
		$("#pageSyl_3rd").slideUp();
		$("#pageSyl_4th").slideUp();	
		$("#TubeReceived").slideUp();
		$("#pageSyl_5th").slideUp();
		$("#pageSyl_6th").slideUp();
		$("#pageSyl_7th").slideUp();
		$("#pageSyl_8th").slideUp();
		$("#pageSyl_9th").slideUp();
		$("#pageSyl_10th").slideUp();
		$("#pageSyl_11th").slideUp();
    });
	
	
$("#Syl3rd_Pre").click(function() {

        $("#CardReceived").slideUp();
		$("#pageSyl_1st").slideUp();
		$("#pageSyl_2nd").slideDown();
		$("#pageSyl_3rd").slideUp();
		$("#pageSyl_4th").slideUp();	
		$("#TubeReceived").slideUp();
		$("#pageSyl_5th").slideUp();
		$("#pageSyl_6th").slideUp();
		$("#pageSyl_7th").slideUp();
		$("#pageSyl_8th").slideUp();
		$("#pageSyl_9th").slideUp();
		$("#pageSyl_10th").slideUp();
		$("#pageSyl_11th").slideUp();
    });		
	
$("#Syl4th_Pre").click(function() {
        $("#CardReceived").slideUp();
		$("#pageSyl_1st").slideUp();
		$("#pageSyl_2nd").slideUp();
		$("#pageSyl_3rd").slideDown();
		$("#pageSyl_4th").slideUp();	
		$("#TubeReceived").slideUp();
		$("#pageSyl_5th").slideUp();
		$("#pageSyl_6th").slideUp();
		$("#pageSyl_7th").slideUp();
		$("#pageSyl_8th").slideUp();
		$("#pageSyl_9th").slideUp();
		$("#pageSyl_10th").slideUp();
		$("#pageSyl_11th").slideUp();
    });			
	
	
$("#Syl_thirdPre").click(function() {

        $("#CardReceived").slideUp();
		$("#pageSyl_1st").slideUp();
		$("#pageSyl_2nd").slideUp();
		$("#pageSyl_3rd").slideUp();	
		$("#pageSyl_4th").slideDown();
		$("#TubeReceived").slideUp();
		$("#pageSyl_5th").slideUp();
		$("#pageSyl_6th").slideUp();
		$("#pageSyl_7th").slideUp();
		$("#pageSyl_8th").slideUp();
		$("#pageSyl_9th").slideUp();
		$("#pageSyl_10th").slideUp();
		$("#pageSyl_11th").slideUp();
    });	
	
	
$("#Syl5th_Pre").click(function() {

        $("#CardReceived").slideUp();
		$("#pageSyl_1st").slideUp();
		$("#pageSyl_2nd").slideUp();
		$("#pageSyl_3rd").slideUp();	
		$("#pageSyl_4th").slideUp();
		$("#TubeReceived").slideDown();
		$("#pageSyl_5th").slideUp();
		$("#pageSyl_6th").slideUp();
		$("#pageSyl_7th").slideUp();
		$("#pageSyl_8th").slideUp();
		$("#pageSyl_9th").slideUp();
		$("#pageSyl_10th").slideUp();
		$("#pageSyl_11th").slideUp();
    });
	
	
$("#Syl6th_Pre").click(function() {

        $("#CardReceived").slideUp();
		$("#pageSyl_1st").slideUp();
		$("#pageSyl_2nd").slideUp();
		$("#pageSyl_3rd").slideUp();	
		$("#pageSyl_4th").slideUp();
		$("#TubeReceived").slideUp();
		$("#pageSyl_5th").slideDown();
		$("#pageSyl_6th").slideUp();
		$("#pageSyl_7th").slideUp();
		$("#pageSyl_8th").slideUp();
		$("#pageSyl_9th").slideUp();
		$("#pageSyl_10th").slideUp();
		$("#pageSyl_11th").slideUp();
    });	
	
	
$("#Syl7th_Pre").click(function() {

        $("#CardReceived").slideUp();
		$("#pageSyl_1st").slideUp();
		$("#pageSyl_2nd").slideUp();
		$("#pageSyl_3rd").slideUp();	
		$("#pageSyl_4th").slideUp();
		$("#TubeReceived").slideUp();
		$("#pageSyl_5th").slideUp();
		$("#pageSyl_6th").slideDown();
		$("#pageSyl_7th").slideUp();
		$("#pageSyl_8th").slideUp();
		$("#pageSyl_9th").slideUp();
		$("#pageSyl_10th").slideUp();
		$("#pageSyl_11th").slideUp();
    });
	
$("#Syl8th_Pre").click(function() {

        $("#CardReceived").slideUp();
		$("#pageSyl_1st").slideUp();
		$("#pageSyl_2nd").slideUp();
		$("#pageSyl_3rd").slideUp();	
		$("#pageSyl_4th").slideUp();
		$("#TubeReceived").slideUp();
		$("#pageSyl_5th").slideUp();
		$("#pageSyl_6th").slideUp();
		$("#pageSyl_7th").slideDown();
		$("#pageSyl_8th").slideUp();
		$("#pageSyl_9th").slideUp();
		$("#pageSyl_10th").slideUp();
		$("#pageSyl_11th").slideUp();
    });	
	
	
$("#Syl9th_Pre").click(function() {

        $("#CardReceived").slideUp();
		$("#pageSyl_1st").slideUp();
		$("#pageSyl_2nd").slideUp();
		$("#pageSyl_3rd").slideUp();	
		$("#pageSyl_4th").slideUp();
		$("#TubeReceived").slideUp();
		$("#pageSyl_5th").slideUp();
		$("#pageSyl_6th").slideUp();
		$("#pageSyl_7th").slideUp();
		$("#pageSyl_8th").slideDown();
		$("#pageSyl_9th").slideUp();
		$("#pageSyl_10th").slideUp();
		$("#pageSyl_11th").slideUp();
    });	
	
$("#Syl10th_Pre").click(function() {

        $("#CardReceived").slideUp();
		$("#pageSyl_1st").slideUp();
		$("#pageSyl_2nd").slideUp();
		$("#pageSyl_3rd").slideUp();	
		$("#pageSyl_4th").slideUp();
		$("#TubeReceived").slideUp();
		$("#pageSyl_5th").slideUp();
		$("#pageSyl_6th").slideUp();
		$("#pageSyl_7th").slideUp();
		$("#pageSyl_8th").slideUp();
		$("#pageSyl_9th").slideDown();
		$("#pageSyl_10th").slideUp();
		$("#pageSyl_11th").slideUp();
    });	
	
$("#Syl11th_Pre").click(function() {

        $("#CardReceived").slideUp();
		$("#pageSyl_1st").slideUp();
		$("#pageSyl_2nd").slideUp();
		$("#pageSyl_3rd").slideUp();	
		$("#pageSyl_4th").slideUp();
		$("#TubeReceived").slideUp();
		$("#pageSyl_5th").slideUp();
		$("#pageSyl_6th").slideUp();
		$("#pageSyl_7th").slideUp();
		$("#pageSyl_8th").slideUp();
		$("#pageSyl_9th").slideUp();
		$("#pageSyl_10th").slideDown();
		$("#pageSyl_11th").slideUp();
    });
	
								
		
		
		




$("#backToAll_Q").click(function() {
        
		
		$("#Q107_container_for_class").removeClass('After_save_QuestionContainerSyl_1st').addClass('QuestionContainerSyl');
		$("#Syl_3_page_button").show();
		$("#datePick").hide();
		$("#CardReceived").slideUp();	

	
	
	$("#Q301_container_for_class").removeClass('After_save_QuestionContainerSyl_1st').addClass('QuestionContainerSyl');
		$("#1_page_button_Syl").show();
		$("#Q301_numPad").hide();
		$("#Q303_details_ID").show();
		$("#pageSyl_1st").slideUp();	
		
		
	$("#Q302_container_for_class").removeClass('After_save_QuestionContainerSyl_large').addClass('QuestionContainerSyl');
		$("#2_page_button_Syl").show();
		$("#Q302_numPad").hide();
		$("#Q302_numPad_col").hide();
		$("#Q302_numPad_row").hide();
		$("#page_2_details").show();
		$("#pageSyl_2nd").slideUp();	
		
		
		$("#Q303_container_for_class").removeClass('After_save_QuestionContainerSyl').addClass('QuestionContainerSyl');
		$("#3_page_button_Syl").show();
		$("#page_3_details").show();
		$("#pageSyl_3rd").slideUp();	
		
		
		$("#Q304_container_for_class").removeClass('After_save_QuestionContainerSyl').addClass('QuestionContainerSyl');
		$("#4_page_button_Syl").show();
		$("#page_4_details").show();
		$("#timePick_304").hide();
		$("#pageSyl_4th").slideUp();	
		
		
		$("#Q305_container_for_class").removeClass('After_save_QuestionContainerSyl').addClass('QuestionContainerSyl');
		$("#5_page_button_Syl").show();
		$("#page_5_details").show();
		$("#Q305_numPad").hide();
		$("#pageSyl_5th").slideUp();	
		
		
	$("#Q306_container_for_class").removeClass('After_save_QuestionContainerSyl_large').addClass('QuestionContainerSyl');
		$("#6_page_button_Syl").show();
		$("#page_6_details").show();
		$("#Q306_numPad").hide();
		$("#Q306_numPad_col").hide();
		$("#Q306_numPad_row").hide();		
		$("#pageSyl_6th").slideUp();	
		
		
$("#TubeReceived_Q107_container_for_class").removeClass('After_save_QuestionContainerSyl').addClass('QuestionContainerSyl');
		$("#TubeReceived_3_page_button").show();
		$("#TubeReceivedpage_5_details").show();		
		$("#TubeReceived").slideUp();	
		
		
		
		$("#Q307_container_for_class").removeClass('After_save_QuestionContainerSyl').addClass('QuestionContainerSyl');
		$("#7_page_button_Syl").show();
		$("#page_7_details").show();		
		$("#pageSyl_7th").slideUp();	
		
		
		$("#Q308_container_for_class").removeClass('After_save_QuestionContainerSyl').addClass('QuestionContainerSyl');
		$("#8_page_button_Syl").show();
		$("#page_8_details").show();	
		$("#timePick_308").hide();	
		$("#pageSyl_8th").slideUp();	
		
		
		$("#Q309_container_for_class").removeClass('After_save_QuestionContainerSyl_large').addClass('QuestionContainerSyl');
		$("#box_page_button_Syl").show();
		$("#page_9_details").show();	
		$("#Q309_numPad_col").hide();	
		$("#Q309_numPad_row").hide();	
		$("#pageSyl_box").slideUp();	
		
		
		$("#Q310_container_for_class").removeClass('After_save_QuestionContainerSyl').addClass('QuestionContainerSyl');
		$("#9_page_button_Syl").show();
		$("#page_10_details").show();	
		$("#pageSyl_9th").slideUp();	
		
		
		$("#Q401_container_for_class").removeClass('After_save_QuestionContainerSyl').addClass('QuestionContainerSyl');
		$("#10_page_button_Syl").show();
		$("#page_11_details").show();	
		$("#pageSyl_10th").slideUp();	
		
		
		$("#Q402_container_for_class").removeClass('After_save_QuestionContainerSyl').addClass('QuestionContainerSyl');
		$("#11_page_button_Syl").show();
		$("#page_12_details").show();	
//		$("#pageSyl_11th").slid
		
		
		
		
		
		
		$("#save_content_syl").hide();	
		document.getElementById("submit").disabled = true;
		
		});
		});
		
		


	