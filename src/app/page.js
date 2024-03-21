import Card from "./component/Card"


const Home = async () => {
  const response = await fetch('https://dummyjson.com/products')
  const products = await response.json()
  console.log(products)
  return (
        <div>
           <h1>INI BARIS BARU</h1>
          
        
    
          
        </div> 
    )
}

export default Home