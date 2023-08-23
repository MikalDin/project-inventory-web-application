let shop = document.getElementById("shop");

let shopItemsData = [{
    id:"Ahgdfgj",
    name:"Trucker Hat",
    price: 45,
    desc: "lorem8 upsom sjdbkfsknflekjlwmn.",
    img: "images/img-1.jpg"
},
{ id:"SSASbmc",
name:"Jacket",
price: 45,
desc: "lorem8 upsoujuuujylekjlwmn.",
img: "images/img-2.jpg"},
{
id:"LssPKkb",
name:"Trucker Hat",
price: 45,
desc: "lorem8 upshntgflekjlwmn.",
img: "images/img-3.jpg"},
{ 
id:"gOihgnq",
name:"Trucker Hat",
price: 25,
desc: "lorem8 upsofgnnghflekjlwmn.",
img: "images/img-4.jpg",
    },
];
let basket = [{
    id:"jrnjdfU",
    item: 1
}];

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
                <i onCLick="decrement(${id})" class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">0</div>
                <i onClick="increment(${id})"  class="bi bi-plus-lg"></i>   
            </div>        
            </div>
            /div>
            </div>
            `;
    })
    .join(""));
};


generateShop();

let increment = (id) => {
    let selecetedItem = id;
    basket.push({
        id: selecetedItem.id,
        item: 1,
    });    
    console.log(basket);
};    
         
let decrement = (id) => {
    let selecetedItem = id;
    console.log(selectedItem.id);
};
let update = () => {}; 