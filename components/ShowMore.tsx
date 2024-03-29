'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { updateSearchParams } from '@/utils';
import { CustomButton } from "@/components";
import { ShowMoreProps } from '@/types';


const ShowMore = ({pageNumber, isNext}: ShowMoreProps) => {
    const router = useRouter();

    const handleNavigation = () =>{
        const newLimit = (pageNumber + 1) * 10;

        const newPathName = updateSearchParams('limit',`${newLimit}`);

        router.push(newPathName);
    }
  return (
    <div className="w-full flex-center gap-5 mt-10">
    {!isNext && (
      < CustomButton
        btnType="button"
        title="Show More"
        containerStyles="bg-primary-blue rounded-full text-white"
        handleClick={handleNavigation}
      />
    )}
  </div>
  );
};

export default ShowMore;