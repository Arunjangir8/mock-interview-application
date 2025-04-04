import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import RelatedInterviewers from "../Components/RelatedInterviewers";

function Appointment() {
  const { intid } = useParams();
  const { interviewer = [] } = useContext(AppContext);
  const [info, setInterInfo] = useState(null);
  const [slot, setSlot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const DaysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const getAvailableSlots = async () => {
    let today = new Date();
    let newSlots = [];

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      newSlots.push(timeSlots);
    }

    setSlot(newSlots);
  };

  useEffect(() => {
    if (interviewer?.length > 0) {
      const interviewersInfo = interviewer.find((item) => item.id === parseInt(intid));
      setInterInfo(interviewersInfo);
    }
  }, [interviewer, intid]);

  useEffect(() => {
    if (info) {
      getAvailableSlots();
    }
  }, [info]);

  return (
    <div className="w-[100vw] mx-auto">
      {info ? (
        <div className="flex flex-col sm:flex-row gap-4 w-[70vw] mt-32">
          <div>
            <img className="w-full sm:max-w-72 rounded-lg" src={info.image} alt={info.name || "Interviewer Image"} />
          </div>

          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-1 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">{info.name}</p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>{info.Speciality}</p>
              <button className="my-0.5 px-2 border text-xs rounded-full">{info.experience} Year</button>
            </div>
            <p className="text-sm text-gray-600 max-w-[700px] mt-1">{info.about}</p>
            <p className="text-gray-500 mt-4 font-medium">Appointment Fee: $50</p>
          </div>
        </div>
      ) : (
        <p>Loading interviewer details...</p>
      )}

      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p>Booking Slots</p>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {slot.length > 0 ? slot.map((item, index) => (
            <div key={index} onClick={() => setSlotIndex(index)}
              className={`text-center py-6 min-w-16 rounded-full cursor-pointer 
                ${slotIndex === index ? "bg-[#be5959] text-white" : "border border-gray-200"}`}>
              <p>{item[0] && DaysOfWeek[item[0].dateTime.getDay()]}</p>
              <p>{item[0] && item[0].dateTime.getDate()}</p>
            </div>
          )) : <p>No slots available</p>}
        </div>
        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
          {slot.length > 0 && slot[slotIndex].map((item, index) => (
            <p key={index} onClick={() => setSlotTime(item.time)}
              className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer mx-2 
              ${item.time === slotTime ? "bg-[#be5959] text-white" : "text-gray-400 border border-gray-300"}`}>
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>
        <button className="text-center w-44 sm:w-52 h-12 rounded-full bg-[#be5959] shadow-lg transition-all duration-300 
          hover:shadow-xl hover:-translate-y-0.5 active:shadow-md active:translate-y-0.5 my-6 lg:my-7 text-white">
          Book an Appointment
        </button>
      </div>
      <RelatedInterviewers intid={intid} Speciality={info?.Speciality} />
    </div>
  );
}

export default Appointment;