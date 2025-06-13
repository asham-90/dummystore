const getAllProducts = async () => {

 

    const data = await axios.get(`https://dummyjson.com/products`);
    return data;
    
}







const displayAllProducts = async () => {

    const data = await getAllProducts();

    const id = data.data.products.id

    const allproducts = data.data.products;

    const result = allproducts.map((ele) =>{

        return`

        <div class="products" >
        <div class='product'>
        <div class="product-img" >
        <img src="${ele.thumbnail}" class="img-m" />
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
    }).join(" ")

    document.querySelector(".allProducts .row").innerHTML=result

    ProductModal();

}


displayAllProducts();


const ProductModal = () => {


    const images = Array.from( document.querySelectorAll(".img-m"))

    const modal = document.querySelector(".modal")

    const modalImg = document.querySelector(".modal-img")

    const RightArrow = document.querySelector(".r-arrow")

    const leftArrow = document.querySelector(".l-arrow")

    const closeButton = document.querySelector(".close-mark")

    let currentIndex = 0

    

    images.forEach( (i) =>{

        i.onclick = (e)=>{

            modal.classList.remove("d-none")

             currentImg = e.target

            currentImgSrc = e.target.getAttribute("src")

           modalImg.setAttribute("src" , currentImgSrc)

        
           currentIndex = images.indexOf(currentImg)

        
        }
    } )



    RightArrow.onclick = () =>{

        ++currentIndex

       if(currentIndex>=images.length){
        currentIndex=0
       }

       modalImg.setAttribute("src" , images[currentIndex].getAttribute("src"))
        
    }

 

    leftArrow.onclick = () =>{

        --currentIndex
     
        if (currentIndex === 0){

            currentIndex = 0
        }else{

            modalImg.setAttribute("src" , images[currentIndex].getAttribute("src"))

        }

        
    }

    closeButton.onclick= () => {
        modal.classList.add("d-none")
    }


    document.onkeydown = (e)=>{


        if(e.code == "Escape"){
            modal.classList.add("d-none")
        }


        if(e.code == "ArrowRight"){


        ++currentIndex

        if(currentIndex>=images.length){
         currentIndex=0
        }
 
        modalImg.setAttribute("src" , images[currentIndex].getAttribute("src"))
            
        }


        if(e.code == "ArrowLeft"){
            
        --currentIndex
     
        if (currentIndex === 0){

            currentIndex = 0
        }else{

            modalImg.setAttribute("src" , images[currentIndex].getAttribute("src"))

        }
        }

    }
}