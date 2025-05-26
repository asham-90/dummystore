const getProductdetails = async () =>{


    const urlParams2 = new URLSearchParams(window.location.search)
    const productId = urlParams2.get('id')
    const data = await axios.get(`https://dummyjson.com/products/${productId}`);
    return data.data;
    

    


}

const displayProductdetails = async () => {
    const product = await getProductdetails();

        const result = ` 
        <div class="product-details">
                <div class="img-details">
                <img src="${product.thumbnail}" alt=${product.category} />
                </div>
                <div class="detail-content">
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <p>${product.price}$</p>
                    <p>${product.rating}</p>
                    <button class="addBtn" >add to cart </button>
                </div>
            </div>

            
            `

        
    

   
    console.log(result)
    document.querySelector(".details .row").innerHTML=result
    document.querySelector(".looding").classList.add("d-none")
};


displayProductdetails();





