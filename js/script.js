const box = document.querySelector('.box')


async function Allert() {
    try {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        console.log(data);

        data.products.forEach(info => {
            const card = document.createElement('div')
            card.classList.add('card')
            // console.log(card);
            let brand = document.createElement('h2')
            brand.classList.add('brand')
            let category = document.createElement('h3')
            category.classList.add('category')
            let price = document.createElement('p')
            price.classList.add('price')
            let img = document.createElement('img')
            let title = document.createElement('h3')
            title.classList.add('title')
            
            
            

            brand.innerHTML = `Brand :${info.brand}`
            category.innerHTML = `category :${info.category}`
            price.innerHTML = `price :${info.price}`
            title.innerHTML = `title :${info.title}`
            img.setAttribute('src', `${info.thumbnail}`)
            // img.setAttribute('src', `${info.thumbnail}`)


            card.append(img)
            card.append(title)
            card.append(brand)
            card.append(category)
            card.append(price)
            console.log(img );

            
            box.append(card)
            // console.log(card);
                        // console.log(price);
        })
    }

    catch (error) {

    }

}
Allert() 
