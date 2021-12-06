import React from 'react'

const ProductCard = ({title,cost}) => {
    return (
        <div>
            <p>
                {title} - {`$${cost}`} - <button>Add to Cart</button>
            </p>
        </div>
    )
}

export default ProductCard
