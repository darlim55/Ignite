import { Product } from "@/styles/pages/home";
import { Children, ReactNode, createContext, useState } from "react"


interface Product {
    id: number;
    name: string;
    Imageurl: string;
    price: string;
    description: string;
    priceId: string;
    quantity: number;
  }

interface CarShopData {

    products: Product[]

}

const initialCarState: CarShopData = {
    products: [],
  };

interface CarShopContextType{
  Car: CarShopData;
  adicionarItemAoCarrinho: (product: Product) => void;
}


interface CarShopProviderProps {
    children: ReactNode
}

export const CarContext = createContext({} as CarShopContextType)


export function CarShopContextProvider({children} : CarShopProviderProps){

    const [Car, setCar] = useState<CarShopData>(initialCarState);

    function adicionarItemAoCarrinho(priceId:string, quantity: number ) {
      // Cria uma cópia do estado atual do carrinho
      const novoCar = { ...Car };

      // Verifica se o item já está no carrinho
      const itemExistente = novoCar.products.find(item => item.priceId === priceId);

      if (itemExistente) {
        // Se o item já existir, incrementa a quantidade
        itemExistente.quantity += quantity;
      } else {
        
        // Se o item não existir, adiciona ao carrinho
         novoCar.products.push({ priceId, quantity });
      }

      // Atualiza o estado do carrinho
      setCar(novoCar);
      };
    
    function esvaziarCarrinho () {
    
    };

    return (
      <CarContext.Provider 
      value={{Car, adicionarItemAoCarrinho}}>{children}</CarContext.Provider>
    )

}