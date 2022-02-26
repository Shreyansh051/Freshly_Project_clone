//<<<<<<< HEAD
var registerUserData = JSON.parse(localStorage.getItem('registerdata'));

document.querySelector('#form').addEventListener('submit',login)

var form = document.querySelector('#form')

function login(event){
    event.preventDefault()

        user = form.email.value;
        pass = form.pass.value

        for(var i = 0 ; i<registerUserData.length ; i++)
        {
            var flag = false
            if(registerUserData[i].email==user && registerUserData[i].pass == pass){
                flag = true;
                break;
            }
        }
        if(flag==true){
            alert("login successfuly")
        }
        else{
            alert("user id password wrong")
        }
        document.querySelector('input[type="submit"]').addEventListener('click',function(){
            window.location.href = '../Plan&Menu/Plans&Menu.html';
        })
    
}
// //=======
// function plansMenu() {
//     var email1 = document.getElementById("email1").value;
//     email1 = JSON.stringify(email1);
//     //   var password1 = document.getElementById("password1").value;
//     var email = localStorage.getItem("Email");
//     //   var password = localStorage.getItem("Password");
//     console.log(email, email1);
//     if (email == email1) {
//       alert("Login Successful");
//       window.location.href = "../Main Landing Page/index.html";
//     } else {
//       alert("Plz enter correct email & password");
//     }
//   }
// //>>>>>>> 7a4d5353d879ae6d8dc475d360b4371408f3c290
