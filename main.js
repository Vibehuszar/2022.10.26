function adatMegjelenites(termekLista){
    let lista = document.getElementById('termekek');
    for(let p of termekLista) {
        let li = document.createElement('li');
        li.innerHTML = p.title + "<br>" + p.description + "<br>" + p.price + "<br>" + p.discountPercentage
        + "<br>" + p.rating + "<br>" + p.stock + "<br>" + p.brand + "<br>" + p.category;
        lista.appendChild(li);
    }
    }

document.addEventListener('DOMContentLoaded', async () => {
    document.getElementById('mind').addEventListener('click', async() => {
        document.getElementById('termekek').innerHTML = "";
        let response = await fetch('/products.json');
        let eredmeny = await response.json();
        adatMegjelenites(eredmeny.products);
    })

    document.getElementById('abc').addEventListener('click', async() => {
        document.getElementById('termekek').innerHTML = "";
        let response = await fetch('/products.json');
        let eredmeny = await response.json();
        let result = eredmeny.products.sort((a, b) => {
            if(a.title < b.title){
                return -1;
            }
            else if(a.title > b.title){
                return 1;
            }
            else{
                return 0;
            };
        });
        adatMegjelenites(result);
    })

    document.getElementById('legdragabb').addEventListener('click', async() => {
        document.getElementById('termekek').innerHTML = "";
        let response = await fetch('/products.json');
        let eredmeny = await response.json();
        let result = eredmeny.products.sort((a, b) => {
            if(a.price > b.price){
                return -1;
            }
            else if(a.price < b.price){
                return 1;
            }
            else{
                return 0;
            };
        });
        adatMegjelenites(result);
    })

    document.getElementById('almasok').addEventListener('click', async() => {
        document.getElementById('termekek').innerHTML = "";
        let response = await fetch('/products.json');
        let eredmeny = await response.json();
        let result = eredmeny.products.filter(e => e.brand === 'Apple');
        adatMegjelenites(result);
    })

    document.getElementById('leiraskeres').addEventListener('click', async() => {
        document.getElementById('termekek').innerHTML = "";
        let response = await fetch('/products.json');
        let eredmeny = await response.json();
        let input = document.getElementById('mezo').value;
        let result = eredmeny.products.filter(e => e.description.includes(input));
        adatMegjelenites(result);
    })

    document.getElementById('ajanlat').addEventListener('click', async() => {
        document.getElementById('termekek').innerHTML = "";
        let response = await fetch('/products.json');
        let eredmeny = await response.json();
        let result = eredmeny.products.filter(e => e.price < 100).sort((a, b) => {
            if(a.rating > b.rating){
                return -1;
            }
            else if(a.rating < b.rating){
                return 1;
            }
            else{
                return 0;
            };
        })
        adatMegjelenites(result);
        
    })
});