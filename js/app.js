const cart = [];
// for total money spend calculation this variable
let totalplayerexpanse=0;

// this function will display player name to selected-v
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
let count=0;
// this will organize player selection
function addToCart(element) {
    count++;
    const pdName = element.parentNode.children[1].children[0].innerText;

    const pd = {
        pdName: pdName,
    }
    if(count>=6)
    {
        alert("You already selected your Five Player!!!Koyda lage");
        return;
    }
    if (cart.length < 5) {

        cart.push(pd);
        element.style.background = '#000000';
        element.disabled = true;
    }
    
    displayPlayerName();
}

//this will execute after calcute button pressed
document.getElementById('calculate-btn').addEventListener('click',function(){
    const perPlayerPriceString=document.getElementById('per-player-price').value;
    const perPlayerPrice=parseFloat(perPlayerPriceString);
    // console.log(perPlayerPrice);
    const totalPlayer=cart.length;
    const playerExpanses=document.getElementById('player-expanses');
    totalplayerexpanse=totalPlayer*perPlayerPrice;
    playerExpanses.innerText=(totalPlayer*perPlayerPrice);
    
})

// this will execute after calculate total button pressed
document.getElementById('calculate-total-btn').addEventListener('click',function(){
    const managerPriceString=document.getElementById('manager-price').value;
    const managerPrice=parseFloat(managerPriceString);

    const coachPriceString=document.getElementById('coach-price').value;
    const coachPrice=parseFloat(coachPriceString);
    const totalPrice=totalplayerexpanse+managerPrice+coachPrice;
    
    const totalWaste=document.getElementById('total-waste');
    totalWaste.innerText=totalPrice;

})