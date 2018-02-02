

  /*$(document).ready(function () {
      $('#Contact').submit( */
      
      function function_by_id(){
       
        var dobValue=document.getElementById("dob").value;
        var month=dobValue.value.substr(0,2);
        var day=dobValue.value.substr(3,2);
        var year=dobValue.value.substr(6,4);
        
        var today = new Date();

        var age = today.getYear() - year;
        if(today.getMonth()/1 < month){
          age--;     
        }
        else if(today.getMonth()/1==month && today.getDay()/1<=day){
          age--;     
        }
        if (age < 18) alert("You have to be 18 or older to sign up. Sorry!");
     
  };
    


$('#Contact').on('submit',
  function() {
    console.log('The form was submitted.');
     e.preventDefault();
    
  }
  );

