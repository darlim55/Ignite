import React, { useContext } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import * as Dialog from '@radix-ui/react-dialog'
import { Content, DetailsBuy, InformationProduct, InformationProductClear, InformationTotalBuy, Overlay, Totalbuy, TotalbuyQuantify } from "@/styles/component/modal";
import { CarContext } from "@/contexts/useCar";
import {ShoppingCart, X} from "phosphor-react"
import { Product } from "@/styles/pages/home";
import Image from "next/image";
import { Flex, ScrollArea } from "@radix-ui/themes";
export default function ModalCar() {

  const {Car} = useContext(CarContext)
  const totalprice = Car.products.reduce((acm, produto) => {
    return acm + Number(produto.price);
  }, 0);
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
            <TotalbuyQuantify>
                <span>Quantidade</span>
                <span>{Car.products.length} itens</span>
            </TotalbuyQuantify>
            <Totalbuy>
                <p>Valor total </p>
                <p>R$: {totalprice}</p>
            </Totalbuy>
            <Button>Finalizar compra</Button>
          </InformationTotalBuy>    

      </Content>
      
    </Dialog.Portal>
  );
}
