
 var giftedMeals = [
    { name: "Steak Peppercorn", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319dbcfa7088dc3_production-meal-image-29fee2e7-8e88-4cd3-aad9-0e7d25671f7f.jpeg", },
    { name: "Homestyle Chicken", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8686c6708c070e7d41_production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpeg",  },
    { name: "Cauliflower Shell Beef Bolognese", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b89b735739065897a4f_production-meal-image-c9eef45a-97a9-487c-9550-71488e5f639a.jpeg", },
    { name: "Sausage Baked Penne", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8bdf3b65081fd159c6_production-meal-image-f0de55be-d691-4ade-bc26-b4a8aedaa1fe.jpeg",  },
    { name: "Savory-Sweet Chicken Teriyaki Bowl", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8e6dd23b60cb122654_production-meal-image-92ec0fc1-d352-4720-9b83-96798ab8d2de.jpeg", },
    { name: "Protein-Packed Chicken Parm", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/610640046931cb5d54bd5472_production-meal-image-7a62bb89-9bcb-4f1f-9f0f-d8372698d48e.jpeg",  },
    { name: "Golden Oven-Fried Chicken & Mash", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b94f03e50f2e0d2b7f3_production-meal-image-bc1b24c8-f62a-4756-a40e-173a8b67a590.jpeg",  },
    { name: "Zingy Buffalo Chicken", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b9a85b43c3383a0a3b3_production-meal-image-ef64cbd3-cc91-4c5f-9865-b9ff0442572e.jpeg",  },
    { name: "White Baan Turkey Chili Bowl", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106401a005f9f6781262949_production-meal-image-17ade4a4-7351-4ff8-95c6-765d70e5ea5d.jpeg", },
    { name: "Pork Carnitas", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6ba186c67063830ea67a_production-meal-image-7bfd44a5-38ec-4893-a0ff-d93693b1deb9.jpeg",  },
    { name: "Sesame-Ginger Chicken & Noodles", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6ba5f589fe69d6562dee_production-meal-image-a4feff11-ec91-43e8-bab5-e6daf8b55eea.jpeg",},
    { name: "Sautéed French Green Beans (11 oz)", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6ba8406d133a498de788_production-meal-image-e184440d-cfea-4806-b7e3-1e5856975959.jpeg", },
    // { name: "Hearty Chipotle-Chicken Stew", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106401eb621bbc28987f309_production-meal-image-53e1a296-8d48-4ba8-acb3-0d9032960be2.jpeg",},
    // { name: "Chicken Tikka Masala", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bb12037c27177184b97_production-meal-image-fa07e0dc-cb7f-43d7-a669-d35dc3fbcf93.jpeg",},
    // { name: "Masterful Mash (16 oz)", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/610640562b4a8d4304d8cd7f_production-meal-image-736d13f8-813c-47a9-91e3-e11eecfeb4ef.jpeg",},
    
 ];

 giftedMeals.map(function (elem, index) {
   
    var div = document.createElement("div");
    var avatar = document.createElement("img");
    avatar.setAttribute("src", elem.image);
    var name = document.createElement("h4");
    name.innerText = elem.name;

    div.append(avatar, name);
    document.querySelector("#gift_choice").append(div);
 });

 