
var registerUserData = JSON.parse(localStorage.getItem('registerdata'));

document.querySelector('#form').addEventListener('submit',login)

var form = document.querySelector('#form')

function login(event){
    event.preventDefault()

        user = form.email.value;
        pass = form.pass.value;

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
            window.location.href = '../ADD TO CART/plan.html';
        })
    
}

