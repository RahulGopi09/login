$(document).ready(function(){

    

    $("#login").click(function () {

        //alert("Login clicked");

        var user = $("#user").val();
        

        if(user != 0)
        {
            if(usercheck(user,password))
            {
                alert("Success: Username is Valid");
                password();
               // window.location.href = "home.html" 
            } else {
                alert("Sorry: Invalid username");
                 event.preventDefault();
               
            }
        } else {
            alert("Username field is empty..");        
        }
        

    });


 function usercheck(user,password) {
    var un=user;
    if(un=="admin")
    {
        return true;
    }
    else
    {
        return false;
    }
    
   }

   function password()
        {
            var pass = $("#pass").val();
            //alert("Indside password function");
         if(pass!=0)
         {
             if(pass==12345)
             {
                 alert("Success: Password is valid");
                return true;
                
             }
             else{
                 alert("Sorry: Invalid password");
                 event.preventDefault();
                 return false;
             }
         }
         else
         {
             alert("Password field is empty")
         }   
        }



    var showPass = 0;
    $('.btn-show-pass').on('click', function(){
    if(showPass == 0) {
    $(this).next('input').attr('type','text');
    $(this).find('i').removeClass('mdi-eye');
    $(this).find('i').addClass('mdi-eye-off');
    showPass = 1;
    }
    else {
    $(this).next('input').attr('type','password');
    $(this).find('i').addClass('mdi-eye');
    $(this).find('i').removeClass('mdi-eye-off');
    showPass = 0;
    }
    }); // button click ends



    }); // document ready end
