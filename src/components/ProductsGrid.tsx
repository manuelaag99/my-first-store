import IndividualProduct from "./IndividualProduct";
import SliderForProductsGrid from "./SliderForProductsGrid";

interface props {
    searchQuery: string;
}

const products = [
    {
        title: "Gamer Chair for computer setup",
        price: 19.99,
        description: "A black chair",
        rating: 4,
        imageSource: "https://cdn.moglix.com/p/YZfgS1m8eCbxT-xxlarge.jpg"
    },
    {
        title: "Table",
        price: 24.99,
        description: "A black table",
        rating: 3,
        imageSource: "https://www.ikea.com/mx/en/images/products/ekedalen-extendable-table-dark-brown__0736963_pe740827_s5.jpg?f=s"
    },
]

export default function ProductsGrid ({ searchQuery }: props) {

    return (
        <div className='middle-right-container'>
            {(searchQuery === "") ? <SliderForProductsGrid /> : 
            <div className="products-grid">
                {products.map((product, index) => {
                    return <IndividualProduct key={index} title={product.title} price={product.price} imageSource={product.imageSource} />
                })}
            </div>}
        </div>
    )
}