import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logimg from '../../assets/Logo.svg'

export function Header(){
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logimg} alt="" />
                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
        
    )

}