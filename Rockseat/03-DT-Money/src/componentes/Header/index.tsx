import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logimg from '../../assets/Logo.svg'

import { NewTransactionModal } from "../NewTransactionModal";
import * as Dialog from "@radix-ui/react-dialog";
export function Header(){
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logimg} alt="" />
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                    <NewTransactionButton>Nova transação</NewTransactionButton>
                    </Dialog.Trigger>

                        <NewTransactionModal />
                    </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
        
    )

}