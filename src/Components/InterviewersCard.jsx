import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function InterviewersCard() {
  const navigate = useNavigate();
  const { interviewer } = useContext(AppContext);

  return (
    <section
      className="flex flex-col items-center gap-4 my-16 text-gray-900   py-10 rounded-xl shadow-sm"
      id="interviewers"
    >
      <h1 className="text-3xl font-semibold text-center text-gray-800">Top Interviewers To Book</h1>
      <p className="sm:w-1/3 text-center text-sm text-gray-600">
        Simply browse through our extensive list of interviewers.
      </p>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 pt-5 px-4 sm:px-10 lg:px-24">
        {interviewer.slice(13, 21).map((item) => (
          <div
            key={item.id}
            onClick={() => {
              navigate(`/appointment/${item.id}`);
              scrollTo(0, 0);
            }}
            className="cursor-pointer group rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[360px] object-cover"
              />
              <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 shadow">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-green-600">Available</span>
              </div>
            </div>
            <div className="p-5 min-h-[140px] flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate("/interviewer");
          scrollTo(0, 0);
        }}
        className="mt-8 w-44 sm:w-52 h-12 rounded-full bg-white text-gray-800 font-medium border border-gray-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-300 ease-in-out"
      >
        View More
      </button>
    </section>
  );
}

export default InterviewersCard;
