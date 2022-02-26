document.querySelector('#form101').addEventListener('submit',signup);

var signupArr = JSON.parse(localStorage.getItem('registerdata'))||[];

function signup(event){
    event.preventDefault()
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#zip").value;

    var signupObj = {
       
        email :email,
        pass : pass,

    };
    //console.log(signupObj)
    signupArr.push(signupObj)
    //console.log(signupArr)
    localStorage.setItem('registerdata',JSON.stringify(signupArr))

    document.querySelector("input[type='submit']").addEventListener("click" , function(){
        window.location.href = "../login/login.html"
    })

}
var toggles = document.querySelectorAll(".faq-toggle");
var titles = document.querySelectorAll(".faq-title");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
titles.forEach((title) => {
  title.addEventListener("click", () => {
    title.parentNode.classList.toggle("active");
  });
});