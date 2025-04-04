import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { ChevronRight } from 'lucide-react';

function Interviewer() {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { interviewer = [] } = useContext(AppContext); // Default to empty array
  const [filteredInterviewers, setFilteredInterviewers] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (speciality) {
      setFilteredInterviewers(interviewer.filter(inter => inter.speciality === speciality));
    } else {
      setFilteredInterviewers(
        selectedCategory
          ? interviewer.filter(inter => inter.speciality === selectedCategory)
          : interviewer
      );
    }
  }, [interviewer, speciality, selectedCategory]);

  return (
    <div className="mt-24 mx-8 flex">
      {/* Sidebar */}
      <CategorySidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      {/* Interviewers List */}
      < div className='w-[70vw] grid grid-cols-auto gap-4 gap-y-6 m-10'>
        {filteredInterviewers.length > 0 ? (
          filteredInterviewers.map((item) => (
            <div
              key={item.id}
              onClick={() => {navigate(`/appointment/${item.id}`); scrollTo(0,0)}}
              className="border border-rose-100 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[300px] object-cover"
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
          ))
        ) : (
          <p className="text-gray-500 text-lg font-medium col-span-full text-center">
            No interviewers found.
          </p>
        )}
      </div>
    </div>
  );
}

const CategorySidebar = ({ selectedCategory, setSelectedCategory }) => {
  const navigate = useNavigate();
  const categories = [
    { name: "Software Development & IT", icon: "💻",sep:"Software-Development-&-IT" },
    { name: "Law & Legal Services", icon: "⚖️",sep:"Law-&-Legal-Services" },
    { name: "Healthcare & Medicine", icon: "🩺" , sep:"Healthcare-&-Medicine"},
    { name: "Marketing & Sales", icon: "📈" ,sep:"Marketing-&-Sales" },
    { name: "Finance & Banking", icon: "💰" ,sep:"Finance-&-Banking" },
  ];

  return (
    <div className="w-64">
      <div className="flex flex-col gap-2 text-sm bg-white rounded-lg shadow-md p-4 border border-gray-200">
        <div className="mb-4">
          <h3 className="font-bold text-gray-800 text-lg">Categories</h3>
          <div className="h-1 w-16 bg-red-500 mt-1 rounded"></div>
        </div>

        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex items-center w-full px-3 py-3 rounded-md transition-all cursor-pointer ${
              selectedCategory === category.name
                ? 'bg-red-50 text-red-700 font-medium shadow-sm'
                : 'hover:bg-gray-50 text-gray-600'
            }`}
            onClick={() => {setSelectedCategory(category.name); navigate(`/interviewer/${category.sep}`)}}
          >
            <span className="mr-3 text-lg">{category.icon}</span>
            <span className="flex-grow">{category.name}</span>
            <ChevronRight
              size={16}
              className={`transition-transform ${
                selectedCategory === category.name ? 'text-red-500' : 'text-gray-400'
              }`}
            />
          </div>
        ))}

        <div className="mt-4 pt-4 border-t border-gray-200">
          <button
            onClick={() => {setSelectedCategory(null); navigate("/interviewer")} }
            className="w-full py-2 px-3 bg-red-600 hover:bg-red-700 text-white rounded-md font-medium transition-colors flex items-center justify-center"
          >
            <span>Browse All</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Interviewer;



