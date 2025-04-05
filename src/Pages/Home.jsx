import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../Components/Footer';
import StatCard from "../Components/StatCard";
import { assets } from '../assets/asset';
import InterviewersCard from '../Components/InterviewersCard';

function Home() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/interviewer");
  };

  return (
    <>
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#F9FAFB] h-auto lg:h-screen">
        <div className="flex items-center py-32 lg:py-0">
          <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 w-full">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold pb-4 lg:pb-6 lg:mr-11">
              Before you <span className="text-[#BE5959]">interview</span>, get <span className="text-[#BE5959]">warmed up</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-700 font-medium pb-2.5 leading-relaxed">
              If interviewing makes you nervous, you're not alone. Like any skill, it requires practice. Interview Warmup helps you become familiar with key questions, refine your answers, and get more comfortable with the interview process.
            </p>
            <button
              className="text-center w-44 sm:w-52 h-12 rounded-full bg-[#BE5959] shadow-md shadow-[#be5959]/40 transition-all duration-300 ease-in-out hover:bg-[#d96060] hover:shadow-lg hover:shadow-[#be5959]/50 hover:-translate-y-0.5 active:bg-[#a14a4a] active:shadow-[#be5959]/30 active:translate-y-0.5 my-6 lg:my-7 text-white font-medium"
              onClick={goToHome}
            >
              Get Started Now
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center py-10 lg:py-0 px-6">
          <img
            src={assets.homepageimg}
            alt="Interview preparation"
            className="w-full max-w-[620px] h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <InterviewersCard />

      {/* Programs Section */}
      <section id="programs" className="bg-white py-16 lg:py-20 px-6 lg:px-[5%] text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-10 lg:mb-16 text-gray-800">Level up with online interview prep</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <Card
            mainheading={"Build interview confidence"}
            desHeading={"From entry-level to executive roles, practice for any interview type with realistic, tailored questions."}
            link={"https://myinterviewpractice.com/images/build_interview_confidence.svg"}
          />
          <Card
            mainheading={"Get hired faster"}
            desHeading={"Cut preparation time in half by rehearsing key interview scenarios, boosting your chances of landing your dream job."}
            link={"https://myinterviewpractice.com/images/get_hired_faster.svg"}
          />
          <Card
            mainheading={"Land the job you want"}
            desHeading={"Prepare answers that make hiring managers eager to hire you. If you don't secure a job, we'll refund your investment."}
            link={"https://myinterviewpractice.com/images/land_job_dreaming.svg"}
          />
          <Card
            mainheading={"Develop lifelong interview skills"}
            desHeading={"Perfect your techniques now and open doors to better opportunities and higher earnings throughout your career."}
            link={"https://myinterviewpractice.com/images/accelerate_career.svg"}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#be5959] text-gray-800 text-center py-12 lg:py-16 px-6 lg:px-[5%]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-white">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
            <StatCard mainheading={"100000"} desHeading={"Program Graduates"} ending={"+"} />
            <StatCard mainheading={"50"} desHeading={"Career Programs"} ending={"+"} />
            <StatCard mainheading={"78"} desHeading={"Success Rate"} ending={"%"} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="py-16 lg:py-20 px-6 flex flex-col items-center justify-center ">
        <h1 className="text-3xl lg:text-4xl font-bold mb-10 text-gray-800">Our Services</h1>
        <Cards />
      </div>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-20 px-6 lg:px-[5%] bg-white flex justify-center">
        <div className="max-w-[800px] text-center">
          <h2 className="text-3xl lg:text-4xl mb-8 text-gray-800">Success Stories</h2>
          <div className="bg-gray-50 p-8 rounded-xl shadow-md mb-6">
            <blockquote className="text-xl lg:text-2xl italic text-gray-700 mb-8 leading-relaxed">
              "This program transformed my career prospects completely. I went from being uncertain about my future to landing a job at a top tech company within months."
            </blockquote>
            <div className="testimonial-author">
              <p className="m-1"><strong>Sarah Johnson</strong></p>
              <p className="m-1 text-gray-600">Web Developer, Tech Solutions Inc</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Card({ mainheading, desHeading, link }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 lg:p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-t-4 border-[#BE5959]">
      <div className="flex justify-center mb-8" style={{ marginBottom: "60px" }}>
        <img src={link} alt="" className="w-auto h-auto max-h-24" />
      </div>
      <h3 className="text-xl lg:text-2xl mb-4 text-gray-800 font-semibold">{mainheading}</h3>
      <p className="text-gray-600">{desHeading}</p>
    </div>
  );
}

const Cards = () => {
  const cardData = [
    {
      title: "Practice without the pressure",
      description: "Build your interview skills in a judgment-free zone. Answer practice questions and refine your delivery at your own pace.",
      icon: "https://storage.googleapis.com/grow-with-goog-publish-prod-media/images/Background_questions-icon.format-webp.webp"
    },
    {
      title: "Expert questions for any interview",
      description: "Designed by industry professionals, the questions cover technical assessments, problem-solving, and behavioral discussions.",
      icon: "https://storage.googleapis.com/grow-with-goog-publish-prod-media/images/Situational_questions-icon.format-webp.webp"
    },
    {
      title: "Real-time, personalized feedback",
      description: "Get instant feedback with insights on pacing, word choice, and clarity. Then identify ways you can improve your responses.",
      icon: "https://storage.googleapis.com/grow-with-goog-publish-prod-media/images/Technical_questions-icon.format-webp.webp"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl w-full px-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-[#BE5959] transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col"
        >
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-red-100 flex items-center justify-center p-6">
              <img src={card.icon} alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl font-medium mb-4 text-center text-gray-800">{card.title}</h2>
          <p className="text-gray-600 text-center">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
