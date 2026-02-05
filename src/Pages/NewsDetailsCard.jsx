import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    const {image_url,title,details,category_id}= news;
    console.log(news)
  return (
    <div className='space-y-5'>
        <img className='w-full object-cover h-[350px]' src={image_url} alt="" />
        <h2 className='font-bold text-2xl'>{title}</h2>
        <p className='text-accent'>{details}</p>
        <Link className='btn btn-secondary' to = {`/catagory/${category_id}`}><FaArrowLeftLong />All news in this category</Link>
    </div>
  )
}

export default NewsDetailsCard