document.querySelector('#form').addEventListener('submit',signup);

var signupArr = JSON.parse(localStorage.getItem('registerdata'))||[];

function signup(event){
    event.preventDefault()

    var name = document.querySelector('#name').value;
    var mobile = document.querySelector("#mobile").value
    var email = document.querySelector("#email").value
    var pass = document.querySelector("#pass").value

    var signupObj = {
        name : name,
        mobile:mobile,
        email :email,
        pass : pass,

    }
    //console.log(signupObj)
    signupArr.push(signupObj)
    //console.log(signupArr)
    localStorage.setItem('registerdata',JSON.stringify(signupArr))

    document.querySelector("input[type='submit']").addEventListener("click" , function(){
        window.location.href = "hear give to link login page "
    })

}