import { Container, CounterCar, Header, ImageContainer } from '@/styles/pages/app';
import { globalStyles } from '../styles/global';
import type { AppProps } from 'next/app';
import logoImg from '../assets/logo.svg';
import Image from 'next/image';
import car from '../assets/car.svg'
import { useContext } from 'react';
import { CarContext, CarShopContextProvider } from '@/contexts/useCar';
import { CarShop } from '@/Componentes/CarShop/CarShop';
import * as Dialog from '@radix-ui/react-dialog'
import ModalCar from '@/Componentes/ModalCar/ModalCar';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {  
  return (
    <CarShopContextProvider>
      <Container>
          <Header>
            <Image src={logoImg} alt="" />

            <Dialog.Root>
              <Dialog.Trigger asChild>
                <CarShop/>
              </Dialog.Trigger>
            
            <ModalCar />
        </Dialog.Root>
          
          </Header>
          <Component {...pageProps} />
        </Container>
      </CarShopContextProvider>
  );
}