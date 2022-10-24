import React from 'react';
import TimelineItem from './TimelineItem';
// import styles from '../styles/timeline.module.css';
import data from './timelinedata';


const Timeline = () =>
  data.length > 0 && (
    <div className="flex flex-col text-white mt-8 bg-primary after:content-[''] after:bg-white after:absolute after:w-1 after:h-full after:left-2/4">
        {
            data.map((item, idx) => (
                <TimelineItem data={item} key={idx}/>
            ))
        }
    </div>
  );

export default Timeline;