import { Product } from "@/styles/pages/home";
import { Children, ReactNode, createContext, useState } from "react"


interface Product {
    id: string;
    name: string;
    imageUrl: string;
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
  removerCarrinho: (id: string) => void
}


interface CarShopProviderProps {
    children: ReactNode
}

export const CarContext = createContext({} as CarShopContextType)


export function CarShopContextProvider({children} : CarShopProviderProps){

    const [Car, setCar] = useState<CarShopData>(initialCarState);

    function adicionarItemAoCarrinho(product: Product
       ) {
      // Cria uma cópia do estado atual do carrinho
      const novoCar = { ...Car };

      // Verifica se o item já está no carrinho
      const itemExistente = novoCar.products.find(item => item.priceId === product.priceId);

      if (itemExistente) {
        // Se o item já existir, incrementa a quantidade
        itemExistente.quantity += 1
      } else {
        
        // Se o item não existir, adiciona ao carrinho
         novoCar.products.push({ ...product, quantity:1 });
      }

      // Atualiza o estado do carrinho
      setCar(novoCar);
      };
    
    function esvaziarCarrinho () {
    
    };


  function removerCarrinho(id: string) {
    const novosCarros = { ...Car };
    novosCarros.products = Car.products.filter((item) => item.id !== id);

    setCar(novosCarros);
  }


    return (
      <CarContext.Provider 
      value={{Car, adicionarItemAoCarrinho, removerCarrinho}}>{children}</CarContext.Provider>
    )

}