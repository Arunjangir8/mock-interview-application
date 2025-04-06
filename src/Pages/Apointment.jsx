import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import RelatedInterviewers from "../Components/RelatedInterviewers";
import axios from "axios";

function Appointment() {
  const { intid } = useParams();
  const { interviewer = [] } = useContext(AppContext);
  const [info, setInterInfo] = useState(null);
  const [slot, setSlot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const DaysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const getAvailableSlots = () => {
    const today = new Date();
    const newSlots = [];

    for (let i = 1; i <= 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      currentDate.setHours(10, 0, 0, 0);

      const endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      const timeSlots = [];
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
    if (info) getAvailableSlots();
  }, [info]);

  const bookAppointment = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?.id;
    if (!slotTime || !userId) return alert("Please select a time slot and ensure you're logged in");
  
    const selectedSlot = slot[slotIndex]?.find((s) => s.time === slotTime);
    if (!selectedSlot) return alert("Invalid time slot selected.");
    
    try {
      // Send ISO string format instead of locale string
      await axios.post("https://mock-interview-application-backend.onrender.com/appointments", {
        userId,
        interviewerId: parseInt(intid),
        dateTime: selectedSlot.dateTime.toISOString(),
      });
  
      alert("Appointment booked successfully!");
      setSlotTime("");
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Failed to book appointment");
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 mt-32 mb-16">
      {info ? (
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="w-full sm:w-64">
            <img src={info.image} alt={info.name || "Interviewer"} className="w-full rounded-xl shadow-md" />
          </div>

          <div className="flex-1 bg-white border border-gray-200 rounded-xl shadow-sm p-6 lg:pr-60">
            <h2 className="text-2xl font-semibold text-gray-800">{info.name}</h2>
            <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
              <p>{info.speciality}</p>
              <span className="px-2 py-0.5 text-xs border border-gray-300 rounded-full">
                {info.experience} Year
              </span>
            </div>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">{info.about}</p>
            <p className="mt-4 text-[#BE5959] font-semibold">Appointment Fee: $50</p>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-10">Loading interviewer details...</p>
      )}

      {/* Slots */}
      <div className="mt-12 lg:ml-80 lg:w-[50vw]">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Booking Slots</h3>

        {/* Day Picker */}
        <div className="flex gap-3 overflow-x-auto pb-2">
          {slot.length > 0 ? (
            slot.map((item, index) => (
              <div
                key={index}
                onClick={() => setSlotIndex(index)}
                className={`min-w-16 px-4 py-4 text-center rounded-full cursor-pointer text-sm font-medium transition-all ${
                  slotIndex === index
                    ? "bg-[#BE5959] text-white shadow-md"
                    : "border border-gray-300 text-gray-600 hover:bg-gray-100"
                }`}
              >
                <p>{item[0] && DaysOfWeek[item[0].dateTime.getDay()]}</p>
                <p>{item[0] && item[0].dateTime.getDate()}</p>
              </div>
            ))
          ) : (
            <p>No slots available</p>
          )}
        </div>

        {/* Time Picker */}
        <div className="flex gap-3 overflow-x-auto mt-6">
          {slot.length > 0 &&
            slot[slotIndex]?.map((item, index) => (
              <button
                key={index}
                onClick={() => setSlotTime(item.time)}
                className={`px-5 py-2 text-sm rounded-full border transition-all ${
                  item.time === slotTime
                    ? "bg-[#BE5959] text-white shadow"
                    : "border-gray-300 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item.time.toLowerCase()}
              </button>
            ))}
        </div>

        {/* Book Button */}
        <div className="mt-8">
          <button
            onClick={bookAppointment}
            className="w-full sm:w-60 h-12 bg-[#BE5959] text-white font-medium rounded-full shadow-lg transition hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0.5"
          >
            Book an Appointment
          </button>
        </div>
      </div>

      {/* Related Interviewers */}
      <div className="mt-16">
        <RelatedInterviewers intid={intid} Speciality={info?.Speciality} />
      </div>
    </div>
  );
}

export default Appointment;
