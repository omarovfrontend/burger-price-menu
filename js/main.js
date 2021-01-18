document.querySelector('#result').onclick = getResult;

// ф-я должна выводить результат и подсчитывать выбранные элементы
function getResult() {
    const menu = document.getElementsByClassName('menu');
    let cost = 0;
    let kkal = 0;
    for(let i = 0; i < menu.length; i++) {
        if (menu[i].checked) {
            cost += parseFloat(menu[i].getAttribute('data-cost'));
            kkal += parseFloat(menu[i].getAttribute('data-kkal'));
        }
    }
    document.querySelector('#cost').innerHTML = cost;
    document.querySelector('#kkal').innerHTML = kkal;
}

getResult();
