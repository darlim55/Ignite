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
    minWidth: '33vw',
    minHeight: '100vh',
    height: '100%',
    borderRadius: '6px',
    position: 'fixed',
    top: '5%',
    right: '1%',
   
    p:{
        fontSize: '2.5rem'
    }
   

})

export const DetailsBuy = styled("div", {
    marginTop: "3rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",


    img: {
        borderRadius: 8,
        background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

    }
})

export const InformationProduct = styled("div", {
    display: 'flex',
    flexDirection: 'column',
    
    p:{
        margin: '0',
        fontFamily:'Roboto, sans-serif',
        "&:first-of-type": {
            color: "$graysacle",
            fontWeight: 'bold',
            fontSize: '2.0rem',
        },

        fontSize: "1.5rem"
    },

    button:{
        cursor: 'pointer',
        border: 'none',
        width: '3rem',
        height: '2rem',
        fontSize: '$lg',
        fontFamily:'Roboto, sans-serif',
        color: "$green500",
        background: 'none',
        margin: 'auto 0 0',
        
    }

})

export const InformationProductClear = styled("div", {

    
    display: 'flex',
    alignItems: 'center',
    margin: '15rem 0 0',
    justifyContent: 'center',
    textAlign: 'center',

    p:{
        fontSize: '2.0rem',
        fontFamily:'Roboto, sans-serif'
    },
    '& .ModalCarScroll': {
        maxHeight: '100% !important',
        overflowY: 'auto !important',
        color: 'Green'
      },

})

export const InformationTotalBuy = styled("div", {
    marginTop: '10rem',
    display: 'flex',



})