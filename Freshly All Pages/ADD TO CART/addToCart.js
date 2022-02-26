var addToCartArr = JSON.parse(localStorage.getItem("addToCartObj")) || [];
// console.log(addToCartArr);
addToCartArr.map(function (elem, index, array) {
    // image, name , company logo image , role
    var div = document.createElement("div");
    var avatar = document.createElement("img");

    avatar.setAttribute("src", elem.image);
    avatar.setAttribute('id',"avatar")    
    var name = document.createElement("h4");
    name.innerText = elem.name;
    var cal = document.createElement("p");
    cal.innerText = elem.cal;
    cal.setAttribute("id", "bigparagraph");

   
    div.append(avatar, name, cal);
    document.querySelector("#cartPage").append(div);


});