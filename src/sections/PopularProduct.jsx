import PopularProductCard from "../components/PopularProductCard.jsx";
import {products} from "../constants/index.js";

const PopularProduct = () => {
    return (
        <section
            id={"products"}
            className={"max-container max-sm:mt-12"}
        >
            <div className={"flex flex-col  justify-start gap-5"}>
                <h2 className={"text-4xl font-palanquin font-bold"}>
                    <span>
                        <span className={"text-coral-red"}>
                            Popular
                        </span> Products
                    </span>
                </h2>
                <p className={"lg:max-w-lg mt-2 font-montserrat text-slate-gray"}>
                    Experience top-notch quality and style with our sought-after selections. Discover a world of comfor, design, and value
                </p>
                <div className={"mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14"}>
                    {
                        products.map((product) => (
                            <PopularProductCard key={product.name} {...product} />
                        ))
                    }
                </div>
            </div>


        </section>
    )
}

export default PopularProduct;
