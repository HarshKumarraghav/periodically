import React from 'react';
import Link from 'next/link';
// import styles from '../styles/timeline.module.css';

const TimelineItem = ({data}) => {
    console.log(data);
  return (
    <div className="flex justify-end pr-8 my-4 w-6/12 text-black odd:self-end odd:justify-start odd:pr-0 odd:pl-8 timeline_item">
        <div className="rounded-md bg-white w-8/12 flex flex-col items-end p-4 text-right relative after:content-[''] after:bg-white after:w-4 after:h-4 after:rotate-45 after:absolute after:-right-2 after:top-2/4 timeline_item_content">
            <span className="bg-primary-color py-2 px-4 text-white">
                {data.date}
            </span>
            <h3 className='my-4 font-semibold text-2xl'>{data.Name}</h3>
            <p className='mb-4'>{data.desc.slice(0,120)}...</p>
            <div className='text-xl hover:underline transition-all duration-300 ease-in-out hover:text-primary-color'>
            <Link href={`/tableHistory/${data.slug}`} >view more &rarr;</Link>
            </div>
            <span className="circle bg-white rounded-full absolute w-4 h-4 top-2/4 -right-10"></span>
        </div>
    </div>
  )
}

export default TimelineItem;