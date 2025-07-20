'use client'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import dayjs from 'dayjs'
import { SelectPickup } from '@/app/sections/home/filters/fields/select-pickup'
import { getTruncatedValue } from '@/utills/get-truncated-value'
import { locations, timeOptions } from '@/_mockup'
import { IoSearchOutline } from "react-icons/io5";
import { SelectTime } from '@/app/sections/home/filters/fields/select-time'




export const Filters = () => {
  const [state, setState] = useState({
    pickup: locations[0],
    return: locations[1],
    date: '01-01-2025',
    pickupTime: timeOptions[1],
    returnTime: '13:30',

  })

  const handlePickUp = (key: any, value:any ) => {
    setState((prev) => ({...prev, [key]: value }))
  }
  return (
    <div className="shadow-lg relative p-6 px-6 bg-white rounded-2xl flex gap-6 items-center ">
      <SelectPickup
        options={locations}
        value={state.pickup}
        onChange={(val) => handlePickUp('pickup', val)} />
      <Selection  label="Date" value={dayjs(state.date).format('MMM D')} />
      < SelectTime
        options={timeOptions}
        value={state.pickupTime}
        onChange={(val) => handlePickUp('pickupTime', val)} />
      < Divider />
      {/*<Selection isPrimary label="Pickup" value={state.pickup.label} />*/}
      {/*<Selection  label="Date" value={dayjs(state.date).format('MMM D')} />*/}
      {/*<Selection  label="Time" value={state.pickupTime} />*/}
      < Divider />
      {/*<Selection  isPrimary label="Promo" value={state.pickupTime} />*/}
      < SubmitButton />
    </div>
  )
}


export const SubmitButton = () => {
  return (
    <button className="ml-3 text-white font-bold items-center bg-primary
    transition-colors ease-in-out
      rounded-md hover:bg-primary/80 h-11 w-11 flex  justify-center duration-300">
      <IoSearchOutline size={24} />
    </button>
  )
}


type SelectionProps = {
  label: string;
  value: string;
  isPrimary?: boolean;

}
export const Selection = ({label, value, isPrimary = false}: SelectionProps, ) => {
  const truncatedValue = getTruncatedValue(value, 25)
  return (
    <div className="flex flex-col gap-1">
      <span className={cn(
        " text-md text-medium",
        isPrimary ? 'text-primary font-semibold' : 'text-gray-500'
      )}
      >
        {label}
      </span>
      <div>
        <span className="text-foreground text-xl">{truncatedValue}</span>
      </div>
    </div>
  )
}

export const Divider = () => {
  return (
    <div className="self-stretch bg-gray-200 w-[2px]" />
  )
}

