"use client";
import React from 'react';
import SearchManufacturer from './SearchManufacturer';
import { useState } from 'react';
import { manufacturers } from '@/constants';
import Image from 'next/image';

const SearchBar = () => {
  
  const SearchButton = ({otherClasses} : { otherClasses: string }) => (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image 
        src={"/magnifying-glass.svg"}
        alt="magnigying glass"
        width = {40}
        height = {40}
        className = "object-contain"
      />
    </button>
  )

  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');

  const handleSearch = () => {}
  
  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer  
                manufacturer = {manufacturer}
                setManufacturer = {setManufacturer}
            />
            <SearchButton otherClasses="sm:hidden" />
            <div className="searchbar__item">
                <Image
                  src="/model-icon.png"
                  alt="model icon"
                  width={25}
                  height={25}
                  className="absolute w-[20px] h-[20px] ml-4"
                />
                <input 
                  type="text"
                  name="model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder="Tiguan"
                  className="searchbar__input"
                />
                <SearchButton otherClasses="sm:hidden"/>
            </div>
            <SearchButton otherClasses="max-sm:hidden"/>
        </div>
    </form>
  )
}

export default SearchBar