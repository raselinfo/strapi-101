import Link from "next/link";

const Product = ({
    image,
    price,
    description,
    title,
    slug,
    category,
    size,
    color,
    available_qty
}) => {
    
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <img
          className="h-40 rounded w-full object-cover object-center mb-6"
          src={image ? image : "https://dummyimage.com/720x400"}
          alt="content"
        />
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          ${price} | {category} | {size} | {color} | stock: {available_qty}
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
         {title}
        </h2>
        <p className="leading-relaxed text-base">
         {description}
        </p>
    <Link href={`/products/${slug}`}>
      <button className="bg-blue-400 py-3 px-4">Buy Now</button>
        </Link>
      </div>
    </div>
  
  );
};


export default Product;