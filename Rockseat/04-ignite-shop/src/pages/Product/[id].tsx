import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import Stripe from "stripe"
import { stripe } from "../../lib/stripe";
import Image from "next/image";
import { useContext, useState } from "react";
import axios, { Axios } from "axios";
import Head from "next/head";
import { CarContext } from "@/contexts/useCar";
import { Box, Flex, Heading, ScrollArea } from "@radix-ui/themes";


interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  description: string;
  priceId: string;
  quantity: number;
}

interface ProductProps {
  product: Product;
}

export default function Product({product}: ProductProps) {
  
  const {adicionarItemAoCarrinho} = useContext(CarContext)
  const router = useRouter();
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  const handleAddProducy = () => {
    adicionarItemAoCarrinho(product);
    router.push('/');
  };


  /* async function handleBuyButton()
  {
    try{
        setIsCreatingCheckoutSession(true)
        const response = await axios.post('/api/checkout',{
            priceId: product.defaultPriceId,
        })

        const { checkoutUrl } = response.data;

        window.location.href = checkoutUrl;

    }catch(err){
        setIsCreatingCheckoutSession(false);

        alert('Falha ao redirecionar ao checkout!')
    }
  }*/
  return (

    <>
    <Head>
      <title>{product.name} | Ignite Shop</title>
    </Head>

    <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} height={480} width={520} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
         
          <p>{product.description}</p>

          <button onClick={handleAddProducy}>
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer></>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params!.id;
  
    const product = await stripe.products.retrieve(productId, {
      expand: ['default_price']
    });
  
    const price = product.default_price as Stripe.Price;

    return {
      props: {
        product: {
          id: product.id,
          name: product.name,
          imageUrl: product.images[0],
          price: new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(price.unit_amount! / 100),
          description: product.description,
          priceId: price.id
        }
      },
      revalidate: 60 * 60 * 1 // 1 hours
    }
  }