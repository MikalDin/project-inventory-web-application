
let ShoppingCart = document.getElementById("shopping-cart");
let label = document.getElementById("label");

// basket to hold all selected items
// the getItem is retieving data from the local storage
// if local storage is blank, basket becomes an empty array


/**
 * 
 * ! to calculate the total amount of selected items 
 */

let calculation = () => {
        let cartIcon = document.getElementById("cartAmount");
            cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x + y, 0);
};

calculation();

/**
 * generates the cart page with products displayed with images, title, price, buttons 
 * & total price. 
 *  when basket is blank --> cart is empty
 */
let generateCartItems = () => {
    if (basket.length !== 0) {
        return (ShoppingCart.innerHTML = basket
            .map((x) => {
                let { id, item } = x;
                let search = shopItemsData.find((x) => x.id === id || []);
                let { img, price, name} = search;
                return`
              
                
                
                <div class = "cart-item">
                <img width ="100" src=${img}  alt=""/>
                <div class = "details">
                <div class ="title-price-x">
                <h4 class="title-price">
                <p>${name} </p>
                <p class = "cart-item-price">${price}</p>
            <h4>
            <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
            </div>    

            <div class="cart-buttons">
            <div class="buttons">
               <i onclick = "decrement(${id}" class="bi bi-dash-lg"></i>
               <div id=${id} class="quantity">${item}</div>
               <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
               </div>
           </div>
           
           <h3>$ ${item * price}</h3>
           </div>
           </div>
           `;
           })
           .join(""));
       } else {
           ShoppingCart.innerHTML = "";
           label.innerHTML = `
           <h2>Cart is empty</h2>
           <a href="index.html">
           <button class="HomeBtn">Back to Home</button>
       </a>
       `;
       }
   };
       

 generateCartItems();
 /**
  * 
  * used to increment the selected product item quantity by 1
  */

 let increment = (id) => {
     let selecetedItem = id;
     let search = basket.find((x) => x.id === selectedItem.id);




    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
    });
     } else {
        search.item += 1;
     }

     generateCartItems();
     update(selectedItem.id);
     localStorage.setItem("data", JSON.stringify(basket));
};
    let decrement = (id) => {
        let selectedItem = id;
        let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item -= 1;
        }

    update(selectedItem.id);
    basket = basket.filter((x) => x.item != 0);
    localStorage.setItem("data", JSON.stringify(basket));
    generateCartItems();
   
    };

    /** to update  the digits of selseced istems on each item card
     * 
     */

    let update = (id) => {
        let search = basket.find((x) => x.id === id);
        // console.log(search.item);
        document.getElementById(id).innerHTML = search.item;
        calculation();
        TotalAmount();
        generateCartItems();
    };

    let removeItem = (id) => {
        let SelectedItem = id;
        basket = basket.filter((x) => x.id !== selectedItem.id);
        calculation();
        TotalAmount();
        //generateCartItems();
        localStorage.setItem("data", JSON.stringify(basket));
    };
        
/**
 * used to calculate the total amount of selected products
 * with sppcific quantity
 * 
 */

    let TotalAmount = () => {
        if(basket.length  !== 0){
            let amount = basket 
            .map((x) => {
               let { id, item } = x;
               let filterData = shopItemsData.find((x) => x.id === id)
         
               return filterData.price * item;

            })
            .reduce ((x,y) => x + y, 0);
            //console.log(amount);
            return (label.innerHTML = `
            <h2> Total Amount : $ ${amount}</h2>
            <button class="checkout">Checkout</button>
            <button onclick="clearCart()" class="removeAll">Clear Cart</button>
            `);
        } else return;
    };
    TotalAmount();


    let clearCart = () => {
        basket = [];
        generateCartItems();
        calculation();
        localStorage.setItem("data", JSON.stringify(basket));
    };




