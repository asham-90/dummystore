const best = async  ()  =>{

    const data = await axios.get(`https://dummyjson.com/products/category/smartphones?limit=5`);
    console.log(data.data)
    return data.data.products;
}

const addTobestselling = async () => {

    const details = await best();

   

    const result = details.map( (ele) => {


        return `

        <div class="products" >
        <div class='product'>
        <div class="product-img  img-m" >
        <img src="${ele.thumbnail}"/>
        </div>

        <div class="product-contant" >
        <p>${ele.category}</p>
        <p>${ele.title}</p>
        <p>${ele.price}</p>
        <p>${ele.rating}</p>
        <button class="addBtn" >add to cart </button>
        <a href="./productDetails.html?id=${ele.id}">more details</a>
        </div>
        


        </div>
        </div>
        
          
        
        `

    

    }).join(' ')


   
    document.querySelector(".bestSelling .row").innerHTML = result;



}

addTobestselling();


