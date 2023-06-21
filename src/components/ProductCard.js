function ProductCard({ product }) {
    const { name, price, description, image } = product;

    return (
        <div className="bg-white p-4 h-[300px]">
            <img src={image} alt={name} className="w-full h-[200px] object-cover mb-4" />
            <div className="flex justify-between">
                <div>
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <p className="text-gray-500">{description}</p>
                    <p className="text-green-600 font-semibold">${price}</p>
                </div>
                <div>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mt-5">
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;