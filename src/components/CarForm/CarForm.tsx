// export {}

import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseCar_brand, chooseCar_model } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@mui/material';

// access API
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface CarFormProps {
    id?: string;
    data?: {}
}

interface CarState {
    car_brand: string;
    car_model: string;
}

export const CarForm = (props:CarFormProps) =>{
    const dispatch = useDispatch()
    let { carData, getData } = useGetData();
    const store = useStore()
    const car_brand = useSelector<CarState>(state => state.car_brand)
    const car_model = useSelector<CarState>(state => state.car_model)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = async (data:any, event:any) =>{
        console.log(props.id)
        
        if( props.id!){
            await server_calls.update(props.id!, data)
            console.log(`Updated: ${data} ${props.id}`)
            window.location.reload()
            event.target.reset();

        } else {
            dispatch(chooseCar_brand(data.car_brand))
            dispatch(chooseCar_model(data.car_model))
            await server_calls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="car_brand">Brand</label>
                    <Input {...register('car_brand')} name="car_brand" placeholder='Brand' />
                </div>
                <div>
                    <label htmlFor="car_color">Color</label>
                    <Input {...register('car_color')} name="car_color" placeholder="Color"/>
                </div>
                <div>
                    <label htmlFor="car_description">Description</label>
                    <Input {...register('car_description')} name="car_description" placeholder="Description"/>
                </div>
                <div>
                    <label htmlFor="car_model">Model</label>
                    <Input {...register('car_model')} name="car_model" placeholder="Model"/>
                </div>
                <div>
                    <label htmlFor="car_price">Price</label>
                    <Input {...register('car_price')} name="car_price" placeholder="Price"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}