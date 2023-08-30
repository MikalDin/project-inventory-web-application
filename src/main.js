let shop = document.getElementById("shop");

//** ! basket to hold all of the selected items
// the getItem part is retrieving data from the local storage
//if the local storage is blank, basket becomes an empty array
// let shopItemsData = [{
//     id:"Ahgdfgj",
//     name:"Trucker Hat",
//     price: 45,
//     desc: "lorem8 upsom sjdbkfsknflekjlwmn.",
//     img: "images/img-1.jpg"
// },
// { id:"SSASbmc",
// name:"Jacket",
// price: 45,
// desc: "lorem8 upsoujuuujylekjlwmn.",
// img: "images/img-2.jpg"},
// {
// id:"LssPKkb",
// name:"Trucker Hat",
// price: 45,
// desc: "lorem8 upshntgflekjlwmn.",
// img: "images/img-3.jpg"},
// { 
// id:"gOihgnq",
// name:"Trucker Hat",
// price: 25,
// desc: "lorem8 upsofgnnghflekjlwmn.",
// img: "images/img-4.jpg",
//     },
// ];   

// let basket = [{
//     id:"jrnjdfU",
//     item: 1
// }];

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
        let { id, name,desc, img, price } = x;
         let search = basket.find((y) => y.id === id) || [];
         return`
         <div id=product-id-${id} class="item">
         <img width="220" src=${img} alt="">    
         <div class="details">
             <h3>${name} </h3>
             <p>${desc}</p>
             <div class="price-quantity">
                 <h2>$${price}</h2>
                 <div class="buttons">
                     <i onClick="decrement(${id})" class="bi bi-dash-lg"></i>
                         <div id=${id} class="quantity">${
                            search.item === undefined ? 0 : search.item
                         }</div>
                     <i onClick="increment(${id})"  class="bi bi-plus-lg"></i>   
                        </div>        
                     </div>
                </div>
            </div>
                 
                 `;
                  })
         .join(""));
     };
     
     generateShop();

     /**
      *  used to increase the selected Item property
      * quantity by 1 
      */


let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
    
    
    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item:1,
        });
    }else {
        search.item += 1;
    }  
         
    console.log(basket);
   update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};    
/**
 * 
 *  used to decrease the selected product item quantity by 1  
 */
         
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) =>x.id === selectedItem.id);

    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item -= 1;

    }

    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);   
    console.log(basket);
    localStorage.setItem("data", JSON.stringify(basket));
};

/*
 ! to update the digits of picked items on each item card
*/



let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
}; 
/** to calculate total amount of selected Items 
 *   
 */

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

