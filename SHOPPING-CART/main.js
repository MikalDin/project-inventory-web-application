let shop = document.getElementById("shop");
let shopItemsData = [{
    id:"jhbbkhjb",
    name:"Trucker Hat",
    price: 45,
    desc: "lorem8 upsom sjdbkfsknflekjlwmn.",
    img: "images/img-1.jpg"
},
{ id:"jhbbkhjb",
name:"Jacket,
price: 45,
desc: "lorem8 upsoujuuujylekjlwmn.",
img: "images/img-2.jpg"},
{
id:"hjkhbkhjb",
name:"Trucker Hat",
price: 45,
desc: "lorem8 upshntgflekjlwmn.",
img: "images/img-3.jpg"},
{ 
id:"jhbgng",
name:"Trucker Hat",
price: 25,
desc: "lorem8 upsofgnnghflekjlwmn.",
img: "images/img-4.jpg",
    },
];


let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let {id, name , price, desc, img } = x;
        return `
        <div id=product-id-${id} class="item">
    
        <img width="220" src=${img} alt="">    
    <div class="details">
        <h3>${name} </h3>
        <p>${desc}</p>
        <div class="price-quantity">
            <h2>${price}</h2>
            <div class="buttons">
                <i class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">0</div>
                <i class="bi bi-plus-lg"></i>   
            </div>        
            </div>
            /div>
            </div>
            `;
    }).join(""));
};


generateShop();