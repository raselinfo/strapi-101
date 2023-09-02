import Product from "@/components/Product";
import SectionWrapper from "./SectionWrapper";
import Link from "next/link";
const getAllProducts = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/products?populate=*`;
  const res = await fetch(url);

  if (res.ok) {
    const data = await res.json();
    return data;
  }

  throw new Error(res.statusText);
};

const page = async () => {
  try {
    const products = await getAllProducts();
    
    return (
      <SectionWrapper>
        {products?.data?.map((product) => {
          const pd_obj = {
            id: product.id,
            ...product.attributes,
            // image: product.attributes?.image?.data[0]
            ...(product.attributes?.image?.data ? {
              image: `${process.env.NEXT_PUBLIC_API_URL}${product.attributes?.image?.data[0]?.attributes?.url}`,
            }:{image: null}),
          };

          return <Product key={product.id} {...pd_obj} />;
        })}
      </SectionWrapper>
    );
  } catch (err) {
    console.log("error", err);
  }
};

export default page;
