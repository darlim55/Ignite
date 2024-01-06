import React, { useContext } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import * as Dialog from '@radix-ui/react-dialog'
import { Content, 
DetailsBuy, 
InformationProduct, 
InformationProductClear, 
InformationTotalBuy, 
Overlay, 
Totalbuy, 
TotalbuyQuantify, 
ButtonFinish } from "@/styles/component/modal";
import { CarContext } from "@/contexts/useCar";
import {ShoppingCart, X} from "phosphor-react"
import { Product } from "@/styles/pages/home";
import Image from "next/image";
import { Flex, ScrollArea } from "@radix-ui/themes";
import axios from "axios";
export default function ModalCar() {

  const {Car, removerCarrinho} = useContext(CarContext)
  const totalprice = Car.products.reduce((acm, produto) => {
    const produtoPrice = parseFloat(produto.price.replace(/[^\d,]+/g, '').replace(',', '.'));
    return acm + produtoPrice;
  }, 0);
  const isCarFilled = Car && Car.products && Car.products.length > 0;

  async function handleBuyButton()
  {
    try{
        const response = await axios.post('/api/checkout',{
            Product: Car.products,
        })

        const { checkoutUrl } = response.data;

        window.location.href = checkoutUrl;

    }catch(err){
        alert('Falha ao redirecionar ao checkout!')
    }
  }
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
                    <button onClick={() => removerCarrinho(product.id)}>Remover</button>
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
          

          {isCarFilled && (
          <InformationTotalBuy>
            <TotalbuyQuantify>
              <span>Quantidade</span>
              <span>{Car.products.length} itens</span>
            </TotalbuyQuantify>
            <Totalbuy>
              <p>Valor total </p>
              <p>R$: {totalprice.toFixed(2)}</p>
            </Totalbuy>
            <ButtonFinish onClick={handleBuyButton}>Finalizar compra</ButtonFinish>
          </InformationTotalBuy>
        )}

      </Content>
      
    </Dialog.Portal>
  );
}
