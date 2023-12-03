import React, { useContext } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import * as Dialog from '@radix-ui/react-dialog'
import { Content, DetailsBuy, InformationProduct, InformationProductClear, Overlay } from "@/styles/component/modal";
import { CarContext } from "@/contexts/useCar";
import {ShoppingCart, X} from "phosphor-react"
import { Product } from "@/styles/pages/home";
import Image from "next/image";
export default function ModalCar() {

  const {Car} = useContext(CarContext)
  const isCarFilled = Car && Car.products && Car.products.length > 0;
  console.log(Car.products)
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title></Dialog.Title>
          <p>
           Sacola de compras
          </p>

          {isCarFilled ? (
             Car.products.map(product => {
              return (
                <DetailsBuy key={product.priceId}>
                 <Image src={product.}
                <InformationProduct>
                <p>Camiseta teste</p>
                <p>valor</p>
                <button>Remover</button>
                </InformationProduct>
                </DetailsBuy>
              )
            })

          ): (
            <InformationProductClear>
              <ShoppingCart size={55}/>
              <p>Carrinho Vazio</p>
            </InformationProductClear>
          )}
        
          
      </Content>
    </Dialog.Portal>
  );
}
