import { HomeContainer, Product } from "@/styles/pages/home"
import { styled } from "../styles/styles"
import camiseta1 from "../assets/camisetas/1.png"
import camiseta2 from "../assets/camisetas/2.png"
import camisete3 from "../assets/camisetas/3.png"

import Image from "next/image"
import { GetServerSideProps, GetStaticProps } from "next"
import {stripe} from "../lib/stripe"
import {useKeenSlider} from "keen-slider/react"
import 'keen-slider/keen-slider.min.css'
import Stripe from "stripe"
import Link from "next/link"

interface Homeprops{
  products: {
      id: string,
      name:string,
      imageUrl: string,
      price: string,
  }[]
}

export default function Home({products}: Homeprops) {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView:3,
      spacing:48,
    }

  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(product => {
        return (
          // eslint-disable-next-line react/jsx-key
        <Link key={product.id} href={`/Product/${product.id}`} prefetch={false}>
          <Product className="keen-slider__slide">
            <Image src={product.imageUrl} width={520} height={480} alt="" /> 
            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        </Link>
        )
      })}

    </HomeContainer>
  )
}


//stattic baseciamne usado para redenreizacao uima unica vez de informacoes
export const getStaticProps: GetStaticProps = async() => {

  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });


  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount! / 100),
    }
  })

  return {
    props: {
      products
    }
  }

}