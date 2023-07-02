"use client"

import Image from 'next/image';
import { SearchManufacturerProps } from '@/types';
import React from 'react';
import { Combobox, Transition } from '@headlessui/react';

const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufacturerProps) => {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image 
              src="/car-logo.svg"
              width ={20}
              height={20}
              className = "ml-4"
              alt = "Car logo"
            />
          </Combobox.Button>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer