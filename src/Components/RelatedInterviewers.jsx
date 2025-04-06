import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from "../context/AppContext";
import { useNavigate } from 'react-router-dom';

function RelatedInterviewers({ intid, Speciality }) {
  const navigate = useNavigate();
  const { interviewer = [] } = useContext(AppContext);
  const [relInt, setrelInt] = useState([]);

  useEffect(() => {
    if (interviewer.length > 0 && Speciality) {
      const InterviewersData = interviewer.filter(
        (item) => item.speciality === Speciality && Number(item.id) !== Number(intid)
      );
      setrelInt(InterviewersData);
    }
  }, [interviewer, Speciality, intid]);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10" id="interviewers">
      <h1 className="text-3xl font-medium">Top Interviewers To Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of interviewers
      </p>

      {/* Horizontal Scroll Container */}
      <div className="w-full overflow-x-auto">
        <div className="flex gap-6 pt-5 px-3 sm:px-10 min-w-max">
          {relInt.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/appointment/${item.id}`)}
              className="min-w-[250px] border border-rose-100 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[250px] h-96 object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium text-green-600">Available</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-gray-900 text-lg font-semibold mb-1">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          navigate("/interviewer");
          scrollTo(0, 0);
        }}
        className="text-center w-44 sm:w-52 h-12 rounded-full bg-[#e8d6d6] shadow-lg shadow-[#be5959]/50 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-[#be5959]/70 hover:-translate-y-0.5 active:shadow-md active:shadow-[#be5959]/50 active:translate-y-0.5 my-6 lg:my-7 text-gray-600"
      >
        More
      </button>
    </div>
  );
}

export default RelatedInterviewers;
