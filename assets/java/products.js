const getDetails = async  ()  =>{

    const urlParams = new URLSearchParams(window.location.search);
    const categoryName = urlParams.get('category');

    const data= await axios.get(`https://dummyjson.com/products/category/${categoryName}/`);
    return data.data.products;
}


const displayDetails = async () => {

    const details = await getDetails();

    const result = details.map( (ele) => {


        return `


        <div class="bg-Beige" >
        <div class='product'>
        <div class="product-img" >
        <img src="${ele.thumbnail}" class="img-m" />
        </div>

        <div class="product-contant" >
        <p class="z1">${ele.category}</p>
        <p>${ele.title}</p>
        <p>${ele.price}</p>
        <p>${ele.rating}</p>
        <button class="addBtn" >add to cart </button>
        <a href="./productDetails.html?category=${ele.category}&id=${ele.id}">more details</a>
        </div>
        


        </div>
        </div>
        
          
        
        `

    

    }).join(' ')
    
    document.querySelector(".productss .row").innerHTML = result;
    document.querySelector(".looding").classList.add("d-none")
}





displayDetails();








