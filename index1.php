<?php
error_reporting(E_ALL ^ E_NOTICE);
   class MyDB extends SQLite3
   {
      function __construct()
      {
         $this->open('database.db');
      }
   }
   $db = new MyDB();
   if(!$db){
      echo $db->lastErrorMsg();
   } else {
      echo "";
   }

 

?>

<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
<link rel="stylesheet" type="text/css" href="css/reset.css"/>
<link rel="stylesheet" type="text/css" href="css/style_main_BM.css"/>




<script type="text/javascript" src="js/jquery.min.js"></script>
<script src="js/mask1_3.js" type="text/javascript"></script>
<script src="js/inputType.js" type="text/javascript"></script>


<script src="js/jquery.ui.draggable.js" type="text/javascript"></script>
<script src="js/jquery.alerts.js" type="text/javascript"></script>
<link href="css/jquery.alerts.css" rel="stylesheet" type="text/css" media="screen" />


<script>
$(document).ready(function() {


$("#save").click(function() {
	if($("#caseID").val()=="" || $("#usDate").val()=="" || $("#gesWeek").val()==""|| $("#edd").val()==""){
		jAlert("Please enter valid data")
return false;
		}
		else{
			return true;
			}
});

	

});

</script>
</head>

<body>
<form  action="" method="POST" enctype="multipart/form-data" onSubmit="formSubmit()">
<!---headder-->
<div class="Headder">
Action Trial Calculation
</div>
<!---/headder-->

<!--main body container-->
<div class="mainBody">

<fieldset class="caseID">
<legend>Case ID</legend>
<input type="text" class="caseIDInput" name="caseID" id="caseID"/>

</fieldset>

<fieldset class="ultrasound">
<legend>Ultrasound</legend>

<div style="height:4vw; width:100%; float:left; overflow:hidden; margin-bottom:1.5vw;">
<div style="width:14vw; float:left; height:3vw; line-height:3.2vw; font-size:1.5vw;">U/S Date</div><input type="text" class="CalDate" id="usDate" name="usDate" onClick="showNumPad();" readonly>
</div>

<div style="height:4vw; width:100%; float:left; overflow:hidden; margin-bottom:1.5vw;">
<div style="width:14vw; float:left; height:3vw; line-height:3.2vw; font-size:1.5vw;">GA on report</div>
<input onClick="showNumPadWeek();" type="text" class="CalDate" style="width:9vw;" id="gesWeekOnReport" name="gesWeekOnReport" placeholder="weeks" readonly>
<input type="text" class="CalDate" style="width:9vw; margin-left:1vw;" id="gesDaysOnReport" name="gesDaysOnReport" placeholder="days">
<input type="Button" class="CalDate" style=" text-align:center; font-size:1vw; width:6vw; height:3.8vw; margin-left:0.5vw;" id="getGA" name="getGA" value="Get GA" readonly/>
</div>


<div style="height:4vw; width:100%; float:left; overflow:hidden;">
<div style="width:14vw; float:left; height:3vw; line-height:3.2vw; font-size:1.5vw;">Current GA</div>
<input type="text" class="CalDate" style="width:9vw; background-color:#FFEEAC;" id="gesWeek" name="gesWeek" placeholder="weeks" >
<input type="text" class="CalDate" style="width:9vw; margin-left:1vw; background-color:#FFEEAC;" id="gesDays" name="gesDays" placeholder="days" >
</div>

<div style="height:4vw; width:100%; float:left; overflow:hidden; margin-bottom:1vw; margin-top:1vw;">
<div style="width:14vw; float:left; height:3vw; line-height:3.2vw; font-size:1.5vw;">EDD available</div>
<div style="float:left; font-size:2vw; line-height:3.6vw;">Yes</div>
<input type="radio" class="radio" name="eddAvailable" id="eddAvailableYes" value="1" onClick="radioCheck();"/> 
<div style="float:left; font-size:2vw; line-height:3.6vw; margin-left:2vw;">No</div>
<input type="radio" class="radio" name="eddAvailable" id="eddAvailableNo" value="2" onClick="radioCheck();"/> 
</div>

<div style="height:4vw; width:100%; float:left; overflow:hidden; margin-bottom:1vw;">
<div style="width:14vw; float:left; height:3vw; line-height:3.2vw; font-size:1.5vw;">EDD</div><input type="text" class="CalDate" id="edd" name="edd" onClick="showNumPadEDD();" style="width:14vw;" readonly>
</div>




</fieldset>


<fieldset class="LMP">
<legend>LMP</legend>

<div style="height:5vw; width:100%; float:left; overflow:hidden; margin-bottom:1vw;">
<div style="width:14vw; float:left; height:3vw; line-height:3.2vw; font-size:1.5vw;">LMP</div><input onClick="showNumPadLMP();" type="text" class="CalDate" style="width:13vw;" id="lmp" name="lmp" readonly>
<input type="Button" class="CalDate" style=" text-align:center; font-size:1vw; width:6vw; height:3.8vw; margin-left:0.5vw;" id="getEDD" name="getGA" value="Get EDD" readonly/>
</div>

<div style="height:5vw; width:100%; float:left; overflow:hidden; margin-bottom:1vw;">
<div style="width:14vw; float:left; height:3vw; line-height:3.2vw; font-size:1.5vw;">EDD</div><input type="text" class="CalDate" id="LMP_edd" name="LMP_edd" readonly>
</div>

<div style="height:5vw; width:100%; float:left; overflow:hidden;">
<div style="width:14vw; float:left; height:3vw; line-height:3.2vw; font-size:1.5vw;">Gestational age</div>
<input type="text" class="CalDate" style="width:9vw;" id="LMP_gesWeek" name="LMP_gesWeek" placeholder="weeks" readonly>
<input type="text" class="CalDate" style="width:9vw; margin-left:1vw;" id="LMP_gesDays" name="LMP_gesDays" placeholder="days" readonly>
</div>
</fieldset>

<fieldset class="result">
<legend>Result</legend>
<input type="text" id="result" name="result" class="resultBox"/>
</fieldset>


<fieldset class="buttonContainer">
<input type="button" class="button" value="Get eligible trial" style="margin-left:11vw;" id="calculate"/>
<input type="submit" class="button" value="Save" id="save"/>
<a href="sendData.php">
<input type="button" class="button" value="Database" id="database" style="width:13vw;"/>
</a>
<a href="index.php">
<input type="button" class="button" value="Reset" id="database" style="width:8vw;"/>
</a>
</fieldset>

</div>
<!--/main body container-->


<script>
$(document).ready(function() {
	$("#gesWeekOnReport").click(function() {
        document.getElementById("eddAvailableNo").checked = false;
		document.getElementById("eddAvailableYes").checked = false;
		document.getElementById("edd").value="";
		
    });
	
	$("#gesWeekOnReport").change(function() {
        document.getElementById("eddAvailableNo").checked = false;
		document.getElementById("eddAvailableYes").checked = false;
		document.getElementById("edd").value="";
    });
	
	$("#gesDaysOnReport").click(function() {
        document.getElementById("eddAvailableNo").checked = false;
		document.getElementById("eddAvailableYes").checked = false;
		document.getElementById("edd").value="";
    });
	$("#gesDaysOnReport").change(function() {
        document.getElementById("eddAvailableNo").checked = false;
		document.getElementById("eddAvailableYes").checked = false;
		document.getElementById("edd").value="";
    });
    
});
</script>

<script>


function radioCheck(){
	if(document.getElementById("eddAvailableYes").checked==true){

		
			
		
		if($("#edd").val()!=""){
			$("#edd").val("")
			}

		}
		
		
	if(document.getElementById("eddAvailableNo").checked==true){		
		var usd= $("#usDate").val();
		var gsd;
		if( $("#gesDays").val()==""){
			gsd = parseInt($("#gesWeek").val())*7;
			}	
			else if( $("#gesDays").val()!=""){
				gsd = (parseInt($("#gesWeekOnReport").val())*7+parseInt($("#gesDaysOnReport").val()));
			}
   	  var dateUS = $("#usDate").val()
	  var USDay = dateUS.substring(0,2)
	  var USMonth = dateUS.substring(3,5)
	  var USYear = dateUS.substring(6,11)
	  var US_date = new Date(USMonth+'/'+USDay+'/'+USYear)
	  var days = parseInt(gsd);
	  
	  if(!isNaN(US_date.getTime())){
            US_date.setDate(US_date.getDate() - days + 280);
            $("#edd").val(US_date.toInputFormat());

			
        } else {
            alert("Invalid Date");  
        }
			
			}	
		
		
		


	}

</script>


<script>

$(document).ready(function() {

;(function($, window, document, undefined){
    $("#getEDD").on("click", function(){
       var dateLMP = $("#lmp").val()
	  var LmpDay = dateLMP.substring(0,2)
	  var LmpMonth = dateLMP.substring(3,5)
	  var LmpYear = dateLMP.substring(6,11)
	  var date = new Date(LmpMonth+'/'+LmpDay+'/'+LmpYear)
	   ,

           days = parseInt("280");
        
        if(!isNaN(date.getTime())){
            date.setDate(date.getDate() + days);
            
            $("#LMP_edd").val(date.toInputFormat());
        } else {
            alert("Invalid Date");  
        }
    });
    
    Date.prototype.toInputFormat = function() {
       var yyyy = this.getFullYear().toString();
       var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
       var dd  = this.getDate().toString();
       return (dd[1]?dd:"0"+dd[0]) + "-" + (mm[1]?mm:"0"+mm[0]) + "-" + yyyy ; // padding
    };
})(jQuery, this, document);
    
});

</script>





<script>

$(document).ready(function() {
	$("#calculate").click(function() {

var c = $("#caseID").val();
var u = $("#usDate").val();
var gw = $("#gesWeek").val();

var ed = $("#edd").val();

if(c=="" || u=="" || gw==""  || ed==""){
	jAlert("Please enter all required field");
	}
	else{
		
 $('#caseID').attr('readonly', 'true');
 $('#gesWeek').attr('readonly', 'true');
 $('#gesDays').attr('readonly', 'true');
         
if($("#lmp").val()!=""){

var lmp = document.getElementById("lmp").value;
//var us = document.getElementById("usDate").value;c
var us = new(Date);


var LmpDay = lmp.substring(0,2);
var LmpMonth = lmp.substring(3,5);
var LmpYear = lmp.substring(6,11);

var lmpDateForCal = new Date(LmpMonth+'/'+LmpDay+'/'+LmpYear);


//var uspDay = us.substring(0,2);
//var usMonth =us.substring(3,5);
//var usYear = us.substring(6,11);

var uspDay = us.getDate();
var usMonth =us.getMonth()+1;
var usYear = us.getFullYear();

var usDateForCal = new Date(usMonth+'/'+uspDay+'/'+usYear);




var weeks = (((( (usDateForCal-lmpDateForCal) / (1000 * 60 * 60 * 24))+1)/7)).toString().split(".")[0];
var days = ((((usDateForCal-lmpDateForCal)/ (24 * 60 * 60 * 1000))%7)).toString().split(".")[0];
//var weeks_days = (((lmpDateForCal-usDateForCal) / (1000 * 60 * 60 * 24))+1)/7;


document.getElementById("LMP_gesWeek").value= weeks;
document.getElementById("LMP_gesDays").value= days;





var LMP_EDD = document.getElementById("LMP_edd").value;
var US_EDD = document.getElementById("edd").value;


var L_EDD_Day = LMP_EDD.substring(0,2);
var L_EDD_Month = LMP_EDD.substring(3,5);
var L_EDD_Year = LMP_EDD.substring(6,11);

var Lmp_EDD_Date = new Date(L_EDD_Month+'/'+L_EDD_Day+'/'+L_EDD_Year);


var U_EDD_Day = US_EDD.substring(0,2);
var U_EDD_Month =US_EDD.substring(3,5);
var U_EDD_Year = US_EDD.substring(6,11);

var US_EDD_Date = new Date(U_EDD_Month+'/'+U_EDD_Day+'/'+U_EDD_Year);
    
var EDD_Diff;
	
if(US_EDD_Date>Lmp_EDD_Date){
EDD_Diff = ((((US_EDD_Date-Lmp_EDD_Date) / (1000 * 60 * 60 * 24)))).toFixed(0);	

	}
else{
EDD_Diff = ((((Lmp_EDD_Date-US_EDD_Date) / (1000 * 60 * 60 * 24)))).toFixed(0);

	}		
	





var USGesAge;
if($("#gesDaysOnReport").val()!=""){
	USGesAge= ( parseInt($("#gesWeekOnReport").val())*7+parseInt($("#gesDaysOnReport").val()));
	}
else{
	USGesAge= ( parseInt($("#gesWeekOnReport").val())*7);
	}
	

var USGesAgeForCal;
if($("#gesDays").val()!=""){
	USGesAgeForCal= ( parseInt($("#gesWeek").val())*7+parseInt($("#gesDays").val()));
	}
else{
	USGesAgeForCal= ( parseInt($("#gesWeek").val())*7);
	}		
	

var LMPGesAge
if(days!=""){
	LMPGesAge = ((weeks*7)+parseInt(days))


	}
	else{
		LMPGesAge = (weeks*7)


		}



//alert("US"+USGesAge);
//alert("LMP"+LMPGesAge);
//jAlert("Difference between two EDD is "+EDD_Diff+". The system will take ");


if(USGesAge>=0 && USGesAge<=62)
{
	
			if(EDD_Diff<=5){
		
					if(LMPGesAge>=182 && LMPGesAge<=237){
					document.getElementById("result").value = "Eligible for TRIAL 1";
					document.getElementById("result").style.backgroundColor = "#0fdd5b";
					}
					else if(LMPGesAge>=238 && LMPGesAge<=252){
					document.getElementById("result").value = "Eligible for TRIAL 2";
					document.getElementById("result").style.backgroundColor = "#f2e93e";
					}
					else{document.getElementById("result").value = "Not Eligible for any TRIAL";
					document.getElementById("result").style.backgroundColor = "#FFF";
					}
					jAlert("Difference between EDD is "+EDD_Diff+" days. Gestational age from LMP is accepted" );

						   }
		
			else if(EDD_Diff>5){
		
					if(USGesAgeForCal>=182 && USGesAgeForCal<=237){
					document.getElementById("result").value = "Eligible for TRIAL 1";
					document.getElementById("result").style.backgroundColor = "#0fdd5b";
					}
					else if(USGesAgeForCal>=238 && USGesAgeForCal<=252){
					document.getElementById("result").value = "Eligible for TRIAL 2";
					document.getElementById("result").style.backgroundColor = "#f2e93e";
					}
					else{document.getElementById("result").value = "Not Eligible for any TRIAL";
					document.getElementById("result").style.backgroundColor = "#FFF";
					}
				
					jAlert("Difference between EDD is "+EDD_Diff+" days. Gestational age from Ultrasound is accepted" );

								}	
	
}




else if(USGesAge>=63 && USGesAge<=111)
{
	
			if(EDD_Diff<=7){
		
					if(LMPGesAge>=182 && LMPGesAge<=237){
					document.getElementById("result").value = "Eligible for TRIAL 1";
					document.getElementById("result").style.backgroundColor = "#0fdd5b";
					}
					else if(LMPGesAge>=238 && LMPGesAge<=252){
					document.getElementById("result").value = "Eligible for TRIAL 2";
					document.getElementById("result").style.backgroundColor = "#f2e93e";
					}
					else{document.getElementById("result").value = "Not Eligible for any TRIAL";
					document.getElementById("result").style.backgroundColor = "#FFF";
					}
					jAlert("Difference between EDD is "+EDD_Diff+" days. Gestational age from LMP is accepted" );
						   }
		
			else if(EDD_Diff>7){
		
					if(USGesAgeForCal>=182 && USGesAgeForCal<=237){
					document.getElementById("result").value = "Eligible for TRIAL 1";
					document.getElementById("result").style.backgroundColor = "#0fdd5b";
					}
					else if(USGesAgeForCal>=238 && USGesAgeForCal<=252){
					document.getElementById("result").value = "Eligible for TRIAL 2";
					document.getElementById("result").style.backgroundColor = "#f2e93e";
					}
					else{document.getElementById("result").value = "Not Eligible for any TRIAL";
					document.getElementById("result").style.backgroundColor = "#FFF";
					}
					jAlert("Difference between EDD is "+EDD_Diff+" days. Gestational age from Ultrasound is accepted" );

								}	
	
}



else if(USGesAge>=112 && USGesAge<=153)
{

			if(EDD_Diff<=10){


					if(LMPGesAge>=182 && LMPGesAge<=237){
					document.getElementById("result").value = "Eligible for TRIAL 1";
					document.getElementById("result").style.backgroundColor = "#0fdd5b";
					}
					else if(LMPGesAge>=238 && LMPGesAge<=252){
					document.getElementById("result").value = "Eligible for TRIAL 2";
					document.getElementById("result").style.backgroundColor = "#f2e93e";
					}
					else{document.getElementById("result").value = "Not Eligible for any TRIAL";
					document.getElementById("result").style.backgroundColor = "#FFF";
					}
					jAlert("Difference between EDD is "+EDD_Diff+" days. Gestational age from LMP is accepted" );

						   }
		
			else if(EDD_Diff>10){
		
					if(USGesAgeForCal>=182 && USGesAgeForCal<=237){
					document.getElementById("result").value = "Eligible for TRIAL 1";
					document.getElementById("result").style.backgroundColor = "#0fdd5b";
					}
					else if(USGesAgeForCal>=238 && USGesAgeForCal<=252){
					document.getElementById("result").value = "Eligible for TRIAL 2";
					document.getElementById("result").style.backgroundColor = "#f2e93e";
					}
					else{document.getElementById("result").value = "Not Eligible for any TRIAL";
					document.getElementById("result").style.backgroundColor = "#FFF";
					}
					jAlert("Difference between EDD is "+EDD_Diff+" days. Gestational age from Ultrasound is accepted" );

								}	
	
}



else if(USGesAge>=154 && USGesAge<=195)
{
	
			if(EDD_Diff<=14){
		
					if(LMPGesAge>=182 && LMPGesAge<=237){
					document.getElementById("result").value = "Eligible for TRIAL 1";
					document.getElementById("result").style.backgroundColor = "#0fdd5b";
					}
					else if(LMPGesAge>=238 && LMPGesAge<=252){
					document.getElementById("result").value = "Eligible for TRIAL 2";
					document.getElementById("result").style.backgroundColor = "#f2e93e";
					}
					else{document.getElementById("result").value = "Not Eligible for any TRIAL";
					document.getElementById("result").style.backgroundColor = "#FFF";
					}
					jAlert("Difference between EDD is "+EDD_Diff+" days. Gestational age from LMP is accepted" );

						   }
		
			else if(EDD_Diff>14){
		
					if(USGesAgeForCal>=182 && USGesAgeForCal<=237){
					document.getElementById("result").value = "Eligible for TRIAL 1";
					document.getElementById("result").style.backgroundColor = "#0fdd5b";
					}
					else if(USGesAgeForCal>=238 && USGesAgeForCal<=252){
					document.getElementById("result").value = "Eligible for TRIAL 2";
					document.getElementById("result").style.backgroundColor = "#f2e93e";
					}
					else{document.getElementById("result").value = "Not Eligible for any TRIAL";
					document.getElementById("result").style.backgroundColor = "#FFF";
					}
					jAlert("Difference between EDD is "+EDD_Diff+" days. Gestational age from Ultrasound is accepted" );

								}	
	
}


else if(USGesAge>=196)
{
	
			if(EDD_Diff<=21){
		
					if(LMPGesAge>=182 && LMPGesAge<=237){
					document.getElementById("result").value = "Eligible for TRIAL 1";
					document.getElementById("result").style.backgroundColor = "#0fdd5b";
					}
					else if(LMPGesAge>=238 && LMPGesAge<=252){
					document.getElementById("result").value = "Eligible for TRIAL 2";
					document.getElementById("result").style.backgroundColor = "#f2e93e";
					}
					else{document.getElementById("result").value = "Not Eligible for any TRIAL";
					document.getElementById("result").style.backgroundColor = "#FFF";
					}
					jAlert("Difference between EDD is "+EDD_Diff+" days. Gestational age from LMP is accepted" );

						   }
		
			else if(EDD_Diff>21){
		
					if(USGesAgeForCal>=182 && USGesAgeForCal<=237){
					document.getElementById("result").value = "Eligible for TRIAL 1";
					document.getElementById("result").style.backgroundColor = "#0fdd5b";
					}
					else if(USGesAgeForCal>=238 && USGesAgeForCal<=252){
					document.getElementById("result").value = "Eligible for TRIAL 2";
					document.getElementById("result").style.backgroundColor = "#f2e93e";
					}
					else{document.getElementById("result").value = "Not Eligible for any TRIAL";
					document.getElementById("result").style.backgroundColor = "#FFF";
					}
					jAlert("Difference between EDD is "+EDD_Diff+" days. Gestational age from Ultrasound is accepted" );

								}	
	
}
}
else{
	
	var USGesAgeIFLMPNULL;
if($("#gesDays").val()!=""){
	USGesAgeIFLMPNULL= ( parseInt($("#gesWeek").val())*7+parseInt($("#gesDays").val()));
	}
else{
	USGesAgeIFLMPNULL= ( parseInt($("#gesWeek").val())*7);
	}
	

if(USGesAgeIFLMPNULL>=182 && USGesAgeIFLMPNULL<=237){
					document.getElementById("result").value = "Eligible for TRIAL 1";
					document.getElementById("result").style.backgroundColor = "#0fdd5b";
					}
					else if(USGesAgeIFLMPNULL>=238 && USGesAgeIFLMPNULL<=252){
					document.getElementById("result").value = "Eligible for TRIAL 2";
					document.getElementById("result").style.backgroundColor = "#f2e93e";
					}
					else{document.getElementById("result").value = "Not Eligible for any TRIAL";
					document.getElementById("result").style.backgroundColor = "#FFF";
					}	
	
	}
	}
	});
	
	
	
	
});

</script>
</form>



<script>

$(document).ready(function() {
	$("#getGA").click(function() {

var gaWeek = document.getElementById("gesWeekOnReport").value;		
var gaDay = document.getElementById("gesDaysOnReport").value;		
var gsTotalDays;
if(gaDay==""){
	gsTotalDays = parseInt(gaWeek)*7;
	}
	else{
		gsTotalDays = (parseInt(gaWeek)*7)+parseInt(gaDay);
		}

	//alert(gsTotalDays);	
		
		var LMP_EDD = document.getElementById("usDate").value;
		
		var US_EDD = new Date();



var L_EDD_Day = LMP_EDD.substring(0,2);
var L_EDD_Month = LMP_EDD.substring(3,5);
var L_EDD_Year = LMP_EDD.substring(6,11);

var Lmp_EDD_Date = new Date(L_EDD_Month+'/'+L_EDD_Day+'/'+L_EDD_Year);


var U_EDD_Day = US_EDD.getDate();
var U_EDD_Month =US_EDD.getMonth()+1;
var U_EDD_Year = US_EDD.getFullYear();

var US_EDD_Date = new Date(U_EDD_Month+'/'+U_EDD_Day+'/'+U_EDD_Year);


if(!isNaN(Lmp_EDD_Date.getTime())){
            Lmp_EDD_Date.setDate(Lmp_EDD_Date.getDate() - parseInt(gsTotalDays));
//            alert(Lmp_EDD_Date.toInputFormat());	
				
        }
		
		
    
var EDD_Diff;
	
if(US_EDD_Date>Lmp_EDD_Date){
EDD_Diff = ((((US_EDD_Date-Lmp_EDD_Date) / (1000 * 60 * 60 * 24)))).toFixed(0);	
	}
else{
EDD_Diff = ((((Lmp_EDD_Date-US_EDD_Date) / (1000 * 60 * 60 * 24)))).toFixed(0);	
	}
	


	var weeks = ((EDD_Diff)/7).toString().split(".")[0];
	var days = (((EDD_Diff))%7).toString().split(".")[0];

$("#gesWeek").val(weeks);
$("#gesDays").val(days);

//	alert(weeks);
//		alert(days);

        
    });

    
	
});



</script>




<script>
function showNumPad(){
	document.getElementById('numpadUS').style.display = 'block';
		document.getElementById('numpadWeek').style.display = 'none';
		document.getElementById('numpadUSLMP').style.display = 'none';
		document.getElementById('numpadUSEDD').style.display = 'none';
	}
function closeNumPad(){
	document.getElementById('numpadUS').style.display = 'none';
	}

function showNumPadWeek(){
	document.getElementById('numpadWeek').style.display = 'block';
	document.getElementById('numpadUS').style.display = 'none';
	document.getElementById('numpadUSLMP').style.display = 'none';
	document.getElementById('numpadUSEDD').style.display = 'none';
	}		
function closeNumPadWeek(){
	document.getElementById('numpadWeek').style.display = 'none';
	}

function showNumPadLMP(){
	document.getElementById('numpadUSLMP').style.display = 'block';
	document.getElementById('numpadWeek').style.display = 'none';
	document.getElementById('numpadUS').style.display = 'none';
	document.getElementById('numpadUSEDD').style.display = 'none';
	}
function closeNumPadLMP(){
	document.getElementById('numpadUSLMP').style.display = 'none';
	}				
	
	
function showNumPadEDD(){
	document.getElementById('numpadUSEDD').style.display = 'block';
	document.getElementById('numpadUSLMP').style.display = 'none';
	document.getElementById('numpadWeek').style.display = 'none';
	document.getElementById('numpadUS').style.display = 'none';
	}
function closeNumPadEDD(){
document.getElementById('numpadUSEDD').style.display = 'none';
	}					
	
	

</script>
<!--number pad container-->
<div id="numpadUS" style=" display:none; margin-top:25vw; height:27vw; width:100%; float:left; position:fixed; background-color:rgba(0,0,0,0.5);">
<div style="height:100%; width:40vw; float:left; margin-left:33vw; padding:1vw;">

<div style="width:100%; float:left;">
<input type="button" onClick="num(this)" value="1" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw;"/>
<input type="button" onClick="num(this)" value="2" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
<input type="button" onClick="num(this)" value="3" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
</div>

<div style="width:100%; float:left; margin-top:1vw;">
<input type="button" onClick="num(this)" value="4" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw;"/>
<input type="button" onClick="num(this)" value="5" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
<input type="button" onClick="num(this)" value="6" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
</div>

<div style="width:100%; float:left; margin-top:1vw;">
<input type="button" onClick="num(this)" value="7" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw;"/>
<input type="button" onClick="num(this)" value="8" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
<input type="button" onClick="num(this)" value="9" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
</div>

<div style="width:100%; float:left; margin-top:1vw;">
<input type="button" onClick="num(this)" value="0" style="text-align:center; color:#333; height:4vw; width:22.3vw; font-size:1.3vw;"/>

<input type="button" onClick="clr(this)" value="<" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
</div>

</div>

<div style=" height:10vw; width:10vw; float:left; margin-left:3vw; background-color:#CCC; line-height:10vw; font-size:2vw; text-align:center; margin-top:5vw;" onClick="closeNumPad();">Close</div>

</div>
<!--/number pad container-->















<!--number pad container week-->
<div id="numpadWeek" style=" display:none; margin-top:25vw; height:27vw; width:100%; float:left; position:fixed; background-color:rgba(0,0,0,0.5);">
<div style="height:100%; width:40vw; float:left; margin-left:33vw; padding:1vw;">

<div style="width:100%; float:left;">
<input type="button" onClick="numWeek(this)" value="1" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw;"/>
<input type="button" onClick="numWeek(this)" value="2" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
<input type="button" onClick="numWeek(this)" value="3" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
</div>

<div style="width:100%; float:left; margin-top:1vw;">
<input type="button" onClick="numWeek(this)" value="4" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw;"/>
<input type="button" onClick="numWeek(this)" value="5" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
<input type="button" onClick="numWeek(this)" value="6" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
</div>

<div style="width:100%; float:left; margin-top:1vw;">
<input type="button" onClick="numWeek(this)" value="7" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw;"/>
<input type="button" onClick="numWeek(this)" value="8" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
<input type="button" onClick="numWeek(this)" value="9" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
</div>

<div style="width:100%; float:left; margin-top:1vw;">
<input type="button" onClick="numWeek(this)" value="0" style="text-align:center; color:#333; height:4vw; width:22.3vw; font-size:1.3vw;"/>

<input type="button" onClick="clrWeek(this)" value="<" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
</div>

</div>

<div style=" height:10vw; width:10vw; float:left; margin-left:3vw; background-color:#CCC; line-height:10vw; font-size:2vw; text-align:center; margin-top:5vw;" onClick="closeNumPadWeek();">Close</div>

</div>
<!--number pad container week-->

















<!--number pad containerLMP-->
<div id="numpadUSLMP" style=" display:none; margin-top:25vw; height:27vw; width:100%; float:left; position:fixed; background-color:rgba(0,0,0,0.5);">
<div style="height:100%; width:40vw; float:left; margin-left:33vw; padding:1vw;">

<div style="width:100%; float:left;">
<input type="button" onClick="numLMP(this)" value="1" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw;"/>
<input type="button" onClick="numLMP(this)" value="2" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
<input type="button" onClick="numLMP(this)" value="3" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
</div>

<div style="width:100%; float:left; margin-top:1vw;">
<input type="button" onClick="numLMP(this)" value="4" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw;"/>
<input type="button" onClick="numLMP(this)" value="5" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
<input type="button" onClick="numLMP(this)" value="6" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
</div>

<div style="width:100%; float:left; margin-top:1vw;">
<input type="button" onClick="numLMP(this)" value="7" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw;"/>
<input type="button" onClick="numLMP(this)" value="8" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
<input type="button" onClick="numLMP(this)" value="9" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
</div>

<div style="width:100%; float:left; margin-top:1vw;">
<input type="button" onClick="numLMP(this)" value="0" style="text-align:center; color:#333; height:4vw; width:22.3vw; font-size:1.3vw;"/>

<input type="button" onClick="clrLMP(this)" value="<" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
</div>

</div>

<div style=" height:10vw; width:10vw; float:left; margin-left:3vw; background-color:#CCC; line-height:10vw; font-size:2vw; text-align:center; margin-top:5vw;" onClick="closeNumPadLMP();">Close</div>

</div>
<!--/number pad container-->

















<!--number pad containerLMP-->
<div id="numpadUSEDD" style=" display:none; margin-top:25vw; height:27vw; width:100%; float:left; position:fixed; background-color:rgba(0,0,0,0.3);">
<div style="height:100%; width:37vw; float:left; margin-left:40vw; padding:1vw;">

<div style="width:100%; float:left;">
<input type="button" onClick="numEDD(this)" value="1" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw;"/>
<input type="button" onClick="numEDD(this)" value="2" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
<input type="button" onClick="numEDD(this)" value="3" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
</div>

<div style="width:100%; float:left; margin-top:1vw;">
<input type="button" onClick="numEDD(this)" value="4" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw;"/>
<input type="button" onClick="numEDD(this)" value="5" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
<input type="button" onClick="numEDD(this)" value="6" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
</div>

<div style="width:100%; float:left; margin-top:1vw;">
<input type="button" onClick="numEDD(this)" value="7" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw;"/>
<input type="button" onClick="numEDD(this)" value="8" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
<input type="button" onClick="numEDD(this)" value="9" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
</div>

<div style="width:100%; float:left; margin-top:1vw;">
<input type="button" onClick="numEDD(this)" value="0" style="text-align:center; color:#333; height:4vw; width:22.3vw; font-size:1.3vw;"/>

<input type="button" onClick="clrEDD(this)" value="<" style="text-align:center; color:#333; height:4vw; width:10vw; font-size:1.3vw; margin-left:2vw;"/>
</div>

</div>

<div style=" height:10vw; width:10vw; float:left; margin-left:1vw; background-color:#CCC; line-height:10vw; font-size:2vw; text-align:center; margin-top:5vw;" onClick="closeNumPadEDD();">Close</div>

</div>
<!--/number pad container-->






<script>
function clrLMP(){
	document.getElementById('lmp').value = document.getElementById('lmp').value.substring(0, document.getElementById('lmp').value.length - 1);;
	}

function numLMP(u){
	var usdate = document.getElementById('lmp').value;

	if(usdate.length==0){
	document.getElementById('lmp').value = u.value;
	}
	else if(usdate.length==1){
		document.getElementById('lmp').value =usdate+u.value+'-';
		}
		
	else if(usdate.length==3){
		document.getElementById('lmp').value =usdate+u.value;
		}
	else if(usdate.length==4){
		document.getElementById('lmp').value =usdate+u.value+'-';
		}
	else if(usdate.length==6){
		document.getElementById('lmp').value =usdate+u.value;;
		}
	else if(usdate.length==7){
		document.getElementById('lmp').value =usdate+u.value;;
		}
	else if(usdate.length==8){
		document.getElementById('lmp').value =usdate+u.value;;
		}
	else if(usdate.length==9){
		document.getElementById('lmp').value =usdate+u.value;;
		}							
		

		
		
		else{
			document.getElementById('lmp').value ="";
			}
	}
</script>




<script>
function clrEDD(){
	document.getElementById('edd').value = document.getElementById('edd').value.substring(0, document.getElementById('edd').value.length - 1);;
	}

function numEDD(u){
	var usdate = document.getElementById('edd').value;

	if(usdate.length==0){
	document.getElementById('edd').value = u.value;
	}
	else if(usdate.length==1){
		document.getElementById('edd').value =usdate+u.value+'-';
		}
		
	else if(usdate.length==3){
		document.getElementById('edd').value =usdate+u.value;
		}
	else if(usdate.length==4){
		document.getElementById('edd').value =usdate+u.value+'-';
		}
	else if(usdate.length==6){
		document.getElementById('edd').value =usdate+u.value;;
		}
	else if(usdate.length==7){
		document.getElementById('edd').value =usdate+u.value;;
		}
	else if(usdate.length==8){
		document.getElementById('edd').value =usdate+u.value;;
		}
	else if(usdate.length==9){
		document.getElementById('edd').value =usdate+u.value;;
		}							
		

		
		
		else{
			document.getElementById('edd').value ="";
			}
	}
</script>









<script>
function clr(){
	document.getElementById('usDate').value = document.getElementById('usDate').value.substring(0, document.getElementById('usDate').value.length - 1);;
	}

function num(u){
	var usdate = document.getElementById('usDate').value;

	if(usdate.length==0){
	document.getElementById('usDate').value = u.value;
	}
	else if(usdate.length==1){
		document.getElementById('usDate').value =usdate+u.value+'-';
		}
		
	else if(usdate.length==3){
		document.getElementById('usDate').value =usdate+u.value;
		}
	else if(usdate.length==4){
		document.getElementById('usDate').value =usdate+u.value+'-';
		}
	else if(usdate.length==6){
		document.getElementById('usDate').value =usdate+u.value;;
		}
	else if(usdate.length==7){
		document.getElementById('usDate').value =usdate+u.value;;
		}
	else if(usdate.length==8){
		document.getElementById('usDate').value =usdate+u.value;;
		}
	else if(usdate.length==9){
		document.getElementById('usDate').value =usdate+u.value;;
		}							
		

		
		
		else{
			document.getElementById('usDate').value ="";
			}
	}
</script>




<script>
function clrWeek(){
	var usdate = document.getElementById('gesWeekOnReport').value;
	var usdateDay = document.getElementById('gesDaysOnReport').value;

if(usdateDay.length>0){
	document.getElementById('gesDaysOnReport').value = document.getElementById('gesDaysOnReport').value.substring(0, document.getElementById('gesDaysOnReport').value.length - 1);	
	}
	else{
			document.getElementById('gesWeekOnReport').value = document.getElementById('gesWeekOnReport').value.substring(0, document.getElementById('gesWeekOnReport').value.length - 1);	
		}
	
	}

function numWeek(u){
	var usdate = document.getElementById('gesWeekOnReport').value;
	var usdateDay = document.getElementById('gesDaysOnReport').value;

	if(usdate.length==0){
	document.getElementById('gesWeekOnReport').value = u.value;
	}
	else if(usdate.length==1){
		document.getElementById('gesWeekOnReport').value =usdate+u.value;
		}
		
		
	if(usdate.length==2){

	if(usdateDay.length == 0){	
		document.getElementById('gesDaysOnReport').value =u.value;
		}
	else if(usdateDay.length==1){
		document.getElementById('gesDaysOnReport').value =usdateDay+u.value;
		}	
		
}

		
			
		
	}
</script>
</body>

</html>

 <?php 
if((isset($_POST["caseID"]))) {
    $caseID=$_REQUEST['caseID']; 
    $usDate=$_REQUEST['usDate']; 
    $gesWeek=$_REQUEST['gesWeek']; 
    $gesDays=$_REQUEST['gesDays']; 
	$edd=$_REQUEST['edd']; 
	$lmp=$_REQUEST['lmp']; 	
	$LMP_edd=$_REQUEST['LMP_edd']; 
	$LMP_gesWeek=$_REQUEST['LMP_gesWeek']; 
	$LMP_gesDays=$_REQUEST['LMP_gesDays']; 
	$result=$_REQUEST['result']; 	

   $sql =<<<EOF
  INSERT INTO action (caseID,US_Date,Ges_week,Ges_day,EDD,LMP_Date,LMP_EDD, LMP_Ges_Week,LMP_Ges_Day, Eligibility)
VALUES ('$caseID', '$usDate', '$gesWeek', '$gesDays', '$edd', '$lmp', '$LMP_edd', '$LMP_gesWeek', '$LMP_gesDays', '$result' );

      
EOF;

   $ret = $db->exec($sql);
   if(!$ret){
    echo $db->lastErrorMsg();
   } else {
     echo "";
   }
   $db->close();
}
?>




