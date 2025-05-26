


const getCategories = async () => {

    const {data} = await axios.get("https://dummyjson.com/products/category-list")
     
    return data

}



const displayCategories = async () => {


    const categoreis = await getCategories();

    const result = categoreis.map((ele) =>{

        return`

        <sectoin class="category" >

        <a href="./details.html?category=${ele}">${ele}</a>
        
    

        </sectoin>
        
        `
    }).join('')
    



    document.querySelector(".nav .categories-box ").innerHTML = result;


}





const button = document.querySelector(".categories-btn");
const menu = document.querySelector(".categories-box");

menu.classList.add("d-none");

button.onclick = function () {
    menu.classList.toggle("d-none");
};





displayCategories();



getCategories()


