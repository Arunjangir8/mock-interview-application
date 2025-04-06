import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { interviewer } from '../assets/asset';

function Myinterviews() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?.id;

    if (!userId) return;

    const fetchAppointments = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/appointments/${userId}`);
        setAppointments(res.data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  const handleCancel = async (appointmentId) => {
    try {
      await axios.delete(`http://localhost:8000/appointments/${appointmentId}`);
      setAppointments((prev) => prev.filter((item) => item.id !== appointmentId));
    } catch (error) {
      console.error("Failed to cancel appointment:", error);
      alert("Something went wrong while canceling the appointment.");
    }
  };

  const getInterviewerDetails = (id) => {
    return interviewer.find((item) => item.id === id);
  };

  return (
    <div className='mt-32 mx-4 md:mx-auto w-full md:w-[70vw] mb-32'>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b-2'>My Appointments</p>
      <div className="mt-6 space-y-6">
        {appointments.length > 0 ? (
          appointments.map((item, index) => {
            const interviewerDetails = getInterviewerDetails(item.interviewerId);

            return (
              <div
                className='flex flex-col sm:flex-row gap-4 sm:gap-6 py-4 border-b-2'
                key={index}
              >
                <div className="flex justify-center sm:block">
                  <img
                    className='w-36 h-auto rounded-md object-cover'
                    src={interviewerDetails?.image || "/interviewer-placeholder.jpg"}
                    alt={interviewerDetails?.name || "Interviewer"}
                  />
                </div>

                <div className='flex-1 text-sm text-zinc-600'>
                  <p className='text-neutral-800 font-semibold'>Interview with: {interviewerDetails?.name || "Unknown"}</p>
                  <p className='text-zinc-700 font-medium mt-1'>Speciality:</p>
                  <p>{interviewerDetails?.speciality}</p>
                  <p className='text-xs mt-1'>
                    <span className='text-sm text-neutral-700 font-medium'>Date and Time :</span>{' '}
                    {new Date(item.dateTime).toLocaleDateString()} | {new Date(item.dateTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>

                <div className='flex flex-col sm:justify-end gap-2 mt-4 sm:mt-0'>
                  <button className="w-full sm:w-40 h-12 rounded-sm bg-gray-100 shadow-sm hover:bg-[#BE5959] hover:text-white transition">
                    Pay Online
                  </button>

                  <button
                    onClick={() => handleCancel(item.id)}
                    className="w-full sm:w-40 h-12 rounded-sm bg-gray-100 shadow-sm hover:bg-[#BE5959] hover:text-white transition"
                  >
                    Cancel Appointment
                  </button>


                </div>
              </div>
            );
          })
        ) : (
          <p className='text-zinc-600'>No appointments found.</p>
        )}
      </div>
    </div>
  );
}

export default Myinterviews;
