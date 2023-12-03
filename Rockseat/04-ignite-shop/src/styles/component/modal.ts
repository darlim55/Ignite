import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '../styles'
import { Grid } from '@radix-ui/themes'

export const Overlay = styled(Dialog.Overlay,{

    position: 'fixed',
    width: '40vw',
    height: '100vh',
    inset: '0 0 0 auto',
    background: '$gray800'
})

export const Content = styled(Dialog.Content, {
    minWidth: '32rem',
    borderRadius: '6px',
    position: 'fixed',
    top: '5%',
    right: '5%',
   
    p:{
        fontSize: '2.5rem'
    }
   

})

export const DetailsBuy = styled("div", {
    marginTop: "3rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",

})

export const InformationProduct = styled("div", {
    

})

export const InformationProductClear = styled("div", {

    
    display: 'flex',
    alignItems: 'center',
    margin: '15rem 0 0',
    justifyContent: 'center',
    textAlign: 'center',

    p:{
        fontSize: '2.5rem',
        fontFamily:'Roboto, sans-serif'
    }

})