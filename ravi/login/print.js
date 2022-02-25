
   

var loginuser=JSON.parse(localStorage.getItem("sign.updetails"));
console.log(loginuser);

var form=document.querySelector("#form");
document.querySelector("#form").addEventListener("submit",formSubmit);

function formSubmit(event){
    event.preventDefault();

    email=form.email.value;
    pass=form.password.value;

    console.log(email,pass);


    for(var i=0;i<loginuser.length;i++){
        if(loginuser[i].email==email && loginuser[i].password==pass){
          
            document.querySelector("input[type='submit']").addEventListener("click",function(){
           window.location.href="";
          });
          alert("Login Success")
        }
         else {
             
            document.querySelector("input[type='submit']").addEventListener("click",function(){
           window.location.href="login.html";
          
          });
        }
      
    }

}
