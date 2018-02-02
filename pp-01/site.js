

  $(document).ready(function () {
       
        var dobValue=document.getElementById("dob").value;
        var dob= new Date(dobValue);
        
        var month=dob.getMonth();/*substr(0,2);*/
        var day=dob.getYear();/*substr(3,2);*/
        var year=dob.getYear();/*substr(6,4);*/
        
        var today = new Date();

        var age = today.getYear() - year;
        if(today.getMonth() < month){
          age--;     
        }
        else if(today.getMonth()==month && today.getDay()/1<day){
          age--;     
        }
        if (age < 18) {
          alert("You have to be 18 or older to sign up. Sorry!");
        }
     
  });
    


$('#Contact').on('submit',
  function() {
    console.log('The form was submitted.');
     e.preventDefault();
    
  }
  );

