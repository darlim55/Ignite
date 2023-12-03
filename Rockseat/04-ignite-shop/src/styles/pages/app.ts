import { relative } from 'path'
import {styled} from '../styles'


export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between'
})

export const ImageContainer = styled('div',{
  position: 'relative',
  cursor: 'pointer',
  background: 'none',
  border: 0
})

export const CounterCar = styled('div', {

  position: "absolute",
  top: "-0.5rem",
  alignItems: 'center',
  right: "-0.5rem",
  background: "$green500",
  color: 'White',
  padding: "5px 10px",
  borderRadius: "60%",
  borderColor: '$grey700',
  border: '1px solid $gray800 '


})
  
