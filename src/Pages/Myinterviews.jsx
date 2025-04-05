import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Myinterviews() {
  const { interviewer = [] } = useContext(AppContext);
  console.log(interviewer)

  return (
    <div className='mt-32 mx-4 md:mx-auto w-full md:w-[70vw] mb-32'>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b-2'>My Appointment</p>
      <div className="mt-6 space-y-6">
        {interviewer.slice(5, 8).map((item, index) => (
          <div
            className='flex flex-col sm:flex-row gap-4 sm:gap-6 py-4 border-b-2'
            key={index}
          >
            <div className="flex justify-center sm:block">
              <img className='w-36 h-auto rounded-md object-cover' src={item.image} alt={item.name} />
            </div>

            <div className='flex-1 text-sm text-zinc-600'>
              <p className='text-neutral-800 font-semibold'>{item.name}</p>
              <p>{item.speciality}</p>
              <p className='text-zinc-700 font-medium mt-1'>Address :</p>
              <p>{item.address}</p>
              <p className='text-xs mt-1'>
                <span className='text-sm text-neutral-700 font-medium'>Date and Time :</span>{' '}
                25 July, 2025 | 8:00 AM
              </p>
            </div>

            <div className='flex flex-col sm:justify-end gap-2 mt-4 sm:mt-0'>
              <button className="w-full sm:w-40 h-12 rounded-sm bg-gray-100 shadow-sm shadow-black/50 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-black/70 hover:-translate-y-0.5 active:shadow-md hover:bg-[#BE5959] hover:text-white active:translate-y-0.5 text-gray-700">
                Pay Online
              </button>

              <button className="w-full sm:w-40 h-12 rounded-sm bg-gray-100 shadow-sm shadow-black/50 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-black/70 hover:-translate-y-0.5 active:shadow-md hover:bg-[#BE5959] hover:text-white active:translate-y-0.5 text-gray-700">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Myinterviews
