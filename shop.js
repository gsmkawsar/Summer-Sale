
const discount =20;
const discountPrice = document.getElementById('discount'); 
const finalPrice = document.getElementById('total')

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
    finalPrice.innerText = price;

    const discountFinal = price * discount/100;
    const totalFinal = price - discountFinal;



    if(price > 0) {
        btnPurchase.removeAttribute('disabled') 
      
    }

    if( price >= 200  ){

        applyCopse.removeAttribute('disabled')
 
    }

 

    document.getElementById('applyCopse').addEventListener('click', function(){

        
        const couponValue = document.getElementById('coupon').value;
        

        if(" " > couponValue){
            alert('Please Type Coupon');
            return;
        }
    
         else if ( "SELL200" != couponValue ){
            alert('invalid Coupon');
            return;
        }

        discountPrice.innerText = discountFinal;
        finalPrice.innerText = totalFinal;

    })


    document.getElementById('homeBtn').addEventListener('click', function(){

        discountPrice.innerText = 0;
        finalPrice.innerText = 0;
        totalPrice.innerText = 0;
        selectItem.innerHTML = "";
        applyCopse.setAttribute('disabled', true)
        btnPurchase.setAttribute('disabled', true)

    })

}
