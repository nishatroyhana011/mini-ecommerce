document.getElementById('products').addEventListener('click', function(event){
    let productName = event.target.parentNode.parentNode.children[0].innerText;
    let productPrice = event.target.parentNode.parentNode.children[1].innerText;
    let table = document.getElementById('tbody');
    let row = document.createElement('tr');
    row.innerHTML=
    `<th></th>
    <td>${productName}</td>
    <td class="price">${productPrice}</td>
    <td>
        <a  class="minus btn btn-sm border-0 bg-rose-500 hover:bg-indigo-600 font-bold">-</a>
        <input value="1" type="text" min="1" class="count w-8 p-2 rounded-md bg-slate-200">
        <a  class="plus btn btn-sm border-0 bg-rose-500 hover:bg-indigo-600 font-bold">+</a>
    </td>
    <th><button class="btn border-0 bg-rose-500 hover:bg-indigo-600 remove-btn">remove</button></th>`; 
    table.appendChild(row); 

let rmvBtn = document.getElementsByClassName('remove-btn');

rmvBtn[rmvBtn.length-1].addEventListener('click', function(event){
        event.target.parentNode.parentNode.remove();
        })
let plus = document.getElementsByClassName('plus');
plus[plus.length-1].addEventListener('click', function(event){
    
        let count = event.target.parentNode.children[1];
        let counter = parseInt(count.value);
        let priceCell = event.target.parentNode.parentNode.children[2];
        let unitPrice = parseInt(priceCell.innerText);

        unitPrice /= counter;
        counter += 1;
        count.value = counter;
        priceCell.innerText = counter*unitPrice;
        cellTotal = counter*unitPrice;
        console.log(cellTotal);
        })
let minus = document.getElementsByClassName('minus');
minus[minus.length-1].addEventListener('click', function(event){

    let count = event.target.parentNode.children[1];
    let counter = parseInt(count.value);

    if(counter>1){
            let priceCell = event.target.parentNode.parentNode.children[2];
            let unitPrice = parseInt(priceCell.innerText);
    
            unitPrice /= counter;
            counter -= 1;
            count.value = counter;  
            priceCell.innerText = counter*unitPrice; 
            cellTotal = counter*unitPrice;
        }
   
    })

})
