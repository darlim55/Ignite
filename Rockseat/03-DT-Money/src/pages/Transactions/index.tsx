/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useContext, useEffect, useState } from "react";
import { Header } from "../../componentes/Header";
import { Summary } from "../../componentes/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Transactions() {

  const {transactions} = useContext(TransactionsContext)
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm/>
        <TransactionsTable>
       
          <tbody>

            {transactions.map(transactions => {

              return(
                <tr key={transactions.id}>
                <td width="50%">{transactions.description}</td>
                <td>
                  <PriceHighlight variant={transactions.type}>
                    {transactions.price}
                  </PriceHighlight>
                </td>
                <td>{transactions.category}</td>
                <td>{transactions.createdAt}</td>
              </tr>

              )

            })}
            
            </tbody>
        </TransactionsTable>
    
      </TransactionsContainer>
     
    </div>
  );
}