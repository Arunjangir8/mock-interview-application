import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/asset';
import { Footer } from '../Components/Footer';
import StatCard from '../Components/StatCard';

function About() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/interviewer");
    scrollTo(0, 0);
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6 lg:px-16 lg:pt-52 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Our mission is to help everyone <span className="text-[#be5959]">ace their interviews</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We believe that everyone deserves access to quality interview preparation. Our platform is designed to help job seekers practice, improve, and succeed in their career journeys.
              </p>
              <button
                onClick={goToHome}
                className="px-8 py-3 rounded-full bg-[#be5959] text-white font-medium shadow-lg shadow-[#be5959]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#be5959]/50 hover:-translate-y-0.5"
              >
                Start Practicing Now
              </button>
            </div>
            <div className="md:w-6/12">
              <img
                src={assets.groupPhot}
                alt="People collaborating"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We started in 2023 with a simple idea: make interview preparation accessible, effective, and less stressful.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center mb-20 lg:mt-32 gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">From Struggle to Solution</h3>
              <p className="text-lg text-gray-600 mb-4">
                Our founder experienced firsthand how nerve-wracking and unpredictable job interviews can be. After missing out on several opportunities despite having the right skills, they realized that interview preparation was the missing piece.
              </p>
              <p className="text-lg text-gray-600">
                That's when Interview Warmup was born – a platform to help job seekers practice real interview scenarios, receive constructive feedback, and enter their interviews with confidence.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={assets.groupWork} alt="Team working together" className="rounded-lg shadow-lg" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center lg:mt-24 gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Growth and Impact</h3>
              <p className="text-lg text-gray-600 mb-4">
                Since our launch, we've helped over 100,000 job seekers prepare for interviews across various industries and roles. Our users report an average 68% increase in confidence and a 40% higher success rate in their job interviews.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're continually expanding our question database, enhancing our AI-powered feedback systems, and creating tailored practice experiences for different career paths.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={assets.growth} alt="Growth chart" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-20 px-6 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Commitments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're guided by our core values as we build tools that help people succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CommitmentCard icon="https://www.svgrepo.com/show/521876/target.svg" title="Quality Practice" description="We ensure our interview questions and scenarios reflect real-world hiring practices." />
            <CommitmentCard icon="https://www.svgrepo.com/show/501336/reset.svg" title="Continuous Learning" description="Our platform adapts to your performance, helping you focus on areas that need improvement." />
            <CommitmentCard icon="https://www.svgrepo.com/show/500529/data-line.svg" title="Data-Driven Feedback" description="Get insights on your responses backed by research and industry best practices." />
            <CommitmentCard icon="https://www.svgrepo.com/show/425600/growth-report-graph.svg" title="Growth Mindset" description="We encourage users to see interviews as opportunities to learn and improve." />
            <CommitmentCard icon="https://www.svgrepo.com/show/532392/user-shield.svg" title="Privacy First" description="Your practice data and responses are protected and never shared without permission." />
            <CommitmentCard icon="https://www.svgrepo.com/show/399613/accessibility.svg" title="Accessibility" description="Our platform is designed to be usable by everyone, regardless of ability." />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a diverse group of career experts, developers, and designers passionate about helping people succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember name="Alex Morgan" role="Founder & CEO" image={assets.img1} />
            <TeamMember name="James Wilson" role="CTO" image={assets.img2} />
            <TeamMember name="Sarah Chen" role="Head of Content" image={assets.img3} />
            <TeamMember name="Miguel Rodriguez" role="Lead Developer" image={assets.img4} />
            <TeamMember name="Priya Patel" role="UX Designer" image={assets.img5} />
            <TeamMember name="David Kim" role="Career Expert" image={assets.img6} />
            <TeamMember name="Emma Watson" role="AI Specialist" image={assets.img7} />
            <TeamMember name="Thomas Greene" role="Marketing Director" image={assets.img8} />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-6 lg:px-16 bg-[#be5959] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-xl mb-12">The numbers that drive us to do more every day</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard mainheading="100000" desHeading="Users Helped" ending="+" />
            <StatCard mainheading="500000" desHeading="Practice Interviews" ending="+" />
            <StatCard mainheading="78" desHeading="Interview Success Rate" ending="%" />
            <StatCard mainheading="50" desHeading="Industries Covered" ending="+" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to transform your interview experience?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join thousands of job seekers who've improved their interview skills and landed their dream jobs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={goToHome}
              className="px-8 py-3 rounded-full bg-[#be5959] text-white font-medium shadow-lg shadow-[#be5959]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#be5959]/50 hover:-translate-y-0.5"
            >
              Start Practicing
            </button>
            <button
              onClick={() => { navigate("/home"); scrollTo(0, 0); }}
              className="px-8 py-3 rounded-full border-2 border-gray-300 text-gray-700 font-medium transition-all duration-300 hover:border-gray-400 hover:-translate-y-0.5"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      
    </div>
  );
}

function CommitmentCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center">
      <img src={icon} alt={title} className="mx-auto w-[80px] h-[80px] mb-4" />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TeamMember({ name, role, image }) {
  return (
    <div className="text-center">
      <div className="w-32 h-32 mx-auto mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h3 className="text-lg font-bold text-gray-800">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
}

export default About;
