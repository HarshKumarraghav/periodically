import React from 'react'
import { useRouter } from 'next/router'
const PeriodicDetail = ({elementDataDetail}) => {
    const router = useRouter();
  return (
<div>
    {elementDataDetail.map((element) => (
        <div className="w-full flex flex-wrap items-center justify-center gap-2 ">
            <div className="w-full text-center p-1 rounded-md text-primary-color z-10 mb-1 text-2xl font-bold font-gara">{element.name}</div>
     <div>
        <button>
previus
        </button>
        <button>
next
        </button>

     </div>
            </div>
    ))}
</div>
  )
}

export default PeriodicDetail