import { Container, CounterCar, Header, ImageContainer } from '@/styles/pages/app';
import { globalStyles } from '../styles/global';
import type { AppProps } from 'next/app';
import logoImg from '../assets/logo.svg';
import Image from 'next/image';
import car from '../assets/car.svg'
import { useContext } from 'react';
import { CarContext, CarShopContextProvider } from '@/contexts/useCar';
import { CarShop } from '@/Componentes/CarShop/CarShop';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {  
  return (
    <CarShopContextProvider>
      <Container>
          <Header>
            <Image src={logoImg} alt="" />
            <CarShop/>
          
          </Header>
          <Component {...pageProps} />
        </Container>
      </CarShopContextProvider>
  );
}