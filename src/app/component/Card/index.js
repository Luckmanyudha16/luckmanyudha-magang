import Image from "next/image"

const Card = (title, thumbnail) => {
    return (
        <div className="grid grid-cols-3 gap-2 h-32">
        <div> 
            <Image src={thumbnail} alt="..." width={600} height={600}/> 
        <h1></h1>
        </div>
        <div> 
        <h1>KOTAK</h1>
        </div>
        <div> 
        <h1>KOTAK</h1>
        </div>
        <div>
        <h1>KOTAK</h1>
        </div>  
        </div>
    )
}

export default Card
