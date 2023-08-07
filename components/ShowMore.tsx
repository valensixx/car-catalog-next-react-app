'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { updateSearchParams } from '@/utils';
import { CustomButton } from "@components";
import { ShowMoreProps } from "@types";


const ShowMore = ({pageNumber, isNext}: ShowMoreProps) => {
    const router = useRouter();

    const handleNavigation = () =>{
        const newLimit = (pageNumber + 1) * 10;

        const newPathName = updateSearchParams('limit',`${newLimit}`);

        router.push(newPathName);
    }
  return (
    <div>ShowMore</div>
  );
};

export default ShowMore;