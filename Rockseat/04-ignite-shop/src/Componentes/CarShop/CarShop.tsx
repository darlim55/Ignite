import { CounterCar, ImageContainer } from "@/styles/pages/app"
import Image from "next/image"
import car from '../../assets/car.svg'
import { useContext } from "react"
import { CarContext } from "@/contexts/useCar"
import React, { forwardRef } from 'react';

export function CarShop(){

    const {Car} = useContext(CarContext)
    return(
        <ImageContainer>
        <Image src={car} alt =""/>
        {Car.products.length > 0 && (
          <CounterCar>{Car.products.length}</CounterCar>
        )}

      </ImageContainer>
    )
}