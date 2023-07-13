interface props {
    title: string;
    price: number;
    imageSource: string;
}

export default function IndividualProduct ({ title, price, imageSource }: props) {
    return (
        <div className="grid-product-container">
            <div className="grid-product-image">
                <img className="product-image" src={imageSource} alt="product-picture" />
            </div>
            <div className="grid-product-text">
                <div className="grid-product-title">
                    {title}
                </div>
                <div className="grid-product-price">
                    ${price}
                </div>
            </div>
        </div>
    )
}