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
    const handleSearch = () => {}


  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer  
                manufacturer = {manufacturer}
                setManufacturer = {setManufacturer}
            />
            <SearchButton otherClasses="sm:hidden" />
        </div>
    </form>
  )
}

export default SearchBar