import React from 'react'
import { ClipLoader, PuffLoader } from 'react-spinners'
import '../index.css';

const Loading = () => {
  return (
    <div className="h-screen w-full fixed inset-0 bg-white flex justify-center items-center">
        <div className="relative">
            <PuffLoader color={'#25b09b'} loading={true} size={200} />
            <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>Loading</p>
        </div>
    </div>
  )
}

export default Loading