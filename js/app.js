const cart = [];
let totalplayerexpanse=0;
function displayPlayerName() {
    const cartContainer = document.getElementById("players-cart");
    cartContainer.textContent = '';
    for (let i = 0; i < cart.length; i++) {

        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${cart[i].pdName}</td>
        `;
        cartContainer.appendChild(tr);
    }

}

function addToCart(element) {
    const pdName = element.parentNode.children[1].children[0].innerText;

    const pd = {
        pdName: pdName,
    }
    
    if (cart.length < 5) {

        cart.push(pd);
        element.style.background = '#000000';
        element.disabled = true;
    }
    

    displayPlayerName();
}

document.getElementById('calculate-btn').addEventListener('click',function(){
    const perPlayerPriceString=document.getElementById('per-player-price').value;
    const perPlayerPrice=parseFloat(perPlayerPriceString);
    // console.log(perPlayerPrice);
    const totalPlayer=cart.length;
    const playerExpanses=document.getElementById('player-expanses');
    totalplayerexpanse=totalPlayer*perPlayerPrice;
    playerExpanses.innerText=(totalPlayer*perPlayerPrice);
    
})
document.getElementById('calculate-total-btn').addEventListener('click',function(){
    const managerPriceString=document.getElementById('manager-price').value;
    const managerPrice=parseFloat(managerPriceString);

    const coachPriceString=document.getElementById('coach-price').value;
    const coachPrice=parseFloat(coachPriceString);
    const totalPrice=totalplayerexpanse+managerPrice+coachPrice;
    
    const totalWaste=document.getElementById('total-waste');
    totalWaste.innerText=totalPrice;

})