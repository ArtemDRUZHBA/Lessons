let orderForm = document.getElementById('order-form');
let orderTable = document.getElementById('order-table');

orderForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    if(event.target['dish'].value.length > 3 &&
     event.target['time'].value.length == 5 &&
     event.target['address'].value.length > 5 &&
     event.target['tel'].value.length > 11){
        let order = {
            dish: event.target['dish'].value,
            time: event.target['time'].value,
            address: event.target['address'].value,
            tel: event.target['tel'].value
        }
        event.target.reset();
        console.log(order);
        createOrder(order);
        let text = JSON.stringify(order);
        orders.push(text);

    }
    });
    

function createOrder(newOrder){
    let tr = document.createElement('tr');
    
    let dish = document.createElement('td');
    dish.innerText = newOrder.dish;
    let time = document.createElement('td');
    time.innerText = newOrder.time;
    let address = document.createElement('td');
    address.innerText = newOrder.address;
    let phone = document.createElement('td');
    phone.innerText = newOrder.phone;
    let link = document.createElement('td');
    link.append(createLink(newOrder));

    tr.appendChild(dish);
    tr.appendChild(time);
    tr.appendChild(address);
    tr.appendChild(phone);
    tr.appendChild(link);
    orderTable.appendChild(tr);
}

function createLink(newOrder){
    let text = JSON.stringify(newOrder);
    let download = document.createElement("a");
    download.setAttribute('href','data:text/plane;charset = utf-8,'
    + encodeURIComponent(text));
    download.setAttribute('download','order.json');
    download.innerHTML = 'link';
    return download;
}

let orders;
let url = 'orders.json';
let request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.send();

request.onload = function(){
    orders = request.response;
    console.log(JSON.parse(orders));
}