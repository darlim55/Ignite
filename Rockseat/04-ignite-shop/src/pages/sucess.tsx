import Link from "next/link";
import { ImageContainer, ImageSucess, SuccessContainer } from "../styles/pages/sucess";
import Image from "next/image";
import { GetServerSideProps } from "next";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import Head from "next/head";
import { Product } from "@/styles/pages/home";

interface SuccessProps {
  costumerName: string;
  product: {
    name: string;
    imageUrl: string;
  }[]
}

export default function success({costumerName, product}: SuccessProps) {
  return (

    <>
    <Head>
      <title>Compra efetuada | Ignite Shop</title>

      <meta name="robots" content="noindex" />
    </Head>
    
    
    <SuccessContainer>
        <h1>Compra efetuada</h1>

        <ImageSucess>
          {product?.map((productJ, index) => (
              <ImageContainer key={index}>    
              <Image src={productJ.imageUrl} width={120} height={110} alt="" />
              </ImageContainer>
          ))}

        </ImageSucess>
        <p>
          Uhuul <strong>{costumerName}</strong>, sua compra de <strong>{product?.length} camisa(s)</strong> já está a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer></>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
 
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id);
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const costumerName = session.customer_details!.name;
  const product = session.line_items?.data?.map((item: any, index) => {
    const price = item.price?.product as Stripe.Product;
    return {
      name: price.name,
      imageUrl: price.images[0],
    };
  });
  return {
    props: {
      costumerName,
      product
  }
  }
}