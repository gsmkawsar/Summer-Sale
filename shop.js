function itemClick(target){
    const selectItem = document.getElementById('selectItem')
    const itemName = (target.childNodes[3].innerText);
    const li = document.createElement('li');
    li.innerText = itemName;
    selectItem.appendChild(li);

    const itemPrice = (target.childNodes[5].innerText.split(" ")[0]);
    const priceNumber = parseFloat(itemPrice);


    const totalPrice = document.getElementById('totalPrice');
    const priceString = totalPrice.innerText;
    const priceTotal = parseFloat(priceString);

    const price = priceTotal + priceNumber ;

    totalPrice.innerText = price;


    if(price > 0){
        btnPurchase.removeAttribute('disabled') 
    }

    else if( price > 200){

        applyCopse.removeAttribute('disabled')

    }

}
