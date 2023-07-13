import SliderForProductsGrid from "./SliderForProductsGrid";

interface props {
    searchQuery: string;
}

export default function ProductsGrid ({ searchQuery }: props) {

    return (
        <div className='middle-right-container'>
            {(searchQuery === "") ? <SliderForProductsGrid /> : 
            <div>HELLO</div>}
            

        </div>
    )
}