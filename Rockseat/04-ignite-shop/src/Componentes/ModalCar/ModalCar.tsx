import React, { useContext } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import * as Dialog from '@radix-ui/react-dialog'
import { Content, DetailsBuy, InformationProduct, InformationProductClear, InformationTotalBuy, Overlay } from "@/styles/component/modal";
import { CarContext } from "@/contexts/useCar";
import {ShoppingCart, X} from "phosphor-react"
import { Product } from "@/styles/pages/home";
import Image from "next/image";
import { ScrollArea } from "@radix-ui/themes";
export default function ModalCar() {

  const {Car} = useContext(CarContext)
  const isCarFilled = Car && Car.products && Car.products.length > 0;
  return (
    <Dialog.Portal>
      <Overlay />
      <Content style={{maxHeight: '100%'}}>
        <Dialog.Title></Dialog.Title>
          <p>
           Sacola de compras
          </p>
            <ScrollArea  type="always" scrollbars="vertical" style={{ maxHeight: 500, marginTop: '1rem' }}>
            {isCarFilled ? (
              Car.products.map(product => {
                return (
                  <DetailsBuy key={product.priceId}>
                  <Image src={product.imageUrl} width={200} height={200} alt=""/>
                  <InformationProduct>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
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
          </ScrollArea>   

          <InformationTotalBuy>
            teste
          </InformationTotalBuy>    

      </Content>
      
    </Dialog.Portal>
  );
}
