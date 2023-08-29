/* eslint-disable @typescript-eslint/no-unsafe-argument */
//contexto criado para facilitar a disitribuicao dos dados da tabela 
//transactions sem precisar ficar chamando a rota

import { ReactNode, createContext, useEffect, useState } from "react";

interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
  }
  
  interface TransactionContextType {
    transactions: Transaction[];
  }

  //aceitar tudo que vem depois do codigo retorno
  interface TransactionsProviderProps {
    children: ReactNode
  }
//cria contexto
export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({children}: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    async function loadTransactions() {
      const response = await fetch('http://localhost:3333/transactions')
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = await response.json()
  
      setTransactions(data)
    }
  
    useEffect(() => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      loadTransactions()
    }, []);

    return (
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider>

    )

}
