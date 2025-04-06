import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { ChevronRight } from 'lucide-react';

// ...imports remain unchanged...

function Interviewer() {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { interviewer = [] } = useContext(AppContext);
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
    <div className="mt-28 mx-4 md:mx-8 flex flex-col md:flex-row gap-6 mb-20 md:mb-32">
      {/* Sidebar */}
      <CategorySidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      {/* Interviewers List */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredInterviewers.length > 0 ? (
          filteredInterviewers.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                navigate(`/appointment/${item.id}`);
                scrollTo(0, 0);
              }}
              className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-96 object-cover rounded-t-2xl"
                />
                <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 shadow">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-green-600">Available</span>
                </div>
              </div>
              <div className="p-4 min-h-[120px] flex flex-col justify-center">
                <h3 className="text-base font-semibold text-gray-800 mb-1">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.speciality}</p>
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
    { name: "Software Development & IT", sep: "Software-Development-&-IT" },
    { name: "Law & Legal Services", sep: "Law-&-Legal-Services" },
    { name: "Healthcare & Medicine", sep: "Healthcare-&-Medicine" },
    { name: "Marketing & Sales", sep: "Marketing-&-Sales" },
    { name: "Finance & Banking", sep: "Finance-&-Banking" },
  ];

  return (
    <div className="w-full md:w-64">
      <div className="flex flex-col gap-2 text-sm bg-white rounded-lg shadow-md p-4 border border-gray-200">
        <div className="mb-4">
          <h3 className="font-bold text-gray-800 text-lg">Categories</h3>
          <div className="h-1 w-16 bg-[#BE5959] mt-1 rounded" />
        </div>

        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex items-center w-full px-3 py-3 rounded-md transition-all cursor-pointer ${
              selectedCategory === category.name
                ? 'bg-[#FDE8E8] text-[#BE5959] font-medium shadow-sm'
                : 'hover:bg-gray-50 text-gray-600'
            }`}
            onClick={() => {
              setSelectedCategory(category.name);
              navigate(`/interviewer/${category.sep}`);
            }}
          >
            <span className="flex-grow">{category.name}</span>
            <ChevronRight
              size={16}
              className={`transition-transform ${
                selectedCategory === category.name ? 'text-[#BE5959]' : 'text-gray-400'
              }`}
            />
          </div>
        ))}

        <div className="mt-4 pt-4 border-t border-gray-200">
          <button
            onClick={() => {
              setSelectedCategory(null);
              navigate("/interviewer");
            }}
            className="w-full py-2 px-3 bg-[#BE5959] hover:bg-[#d96060] text-white rounded-md font-medium transition-colors"
          >
            Browse All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Interviewer;