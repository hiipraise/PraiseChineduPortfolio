import React, { useState } from "react";
import ArrowRight2 from "../../assets/icons/ArrowRight2";
import Checked from "../../assets/icons/checked";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    services: [],
    // budget: 1500,
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  // const handleBudgetChange = (e) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     budget: parseInt(e.target.value),
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const services = [
    "Mobile App",
    "Web Development",
    "Blockchain Development",
    "CTP/Automation",
    "AI/ML",
    "Cyber Security",
    "Automation",
    "Team Augmentation",
    "Others",
  ];

  return (
    <div className="bg-[rgba(25,25,43,20%)] backdrop-blur-2xl flex flex-col lg:flex-row justify-center p-8 gap-8">
      <div className="relative bg-contact bg-cover bg-center border rounded border-[#A3E2BB] text-white p-8 flex flex-col lg:w-2/5 xl:w-1/3 space-y-48">
        <div className="absolute inset-0 bg-[rgba(25,25,43,80%)] rounded pointer-events-none">
          <div>
            <p className="text-2xl lg:text-3xl font-light mt-5 leading-tight text-center">
              Get in Touch
            </p>
            <p className="text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight tracking-wide bg-gradient-to-r from-[#A3E2BB] via-[#A3E2BB] to-[#EEEEFF] bg-clip-text text-transparent font-orbitron">
              WE WOULD LOVE TO HEAR FROM YOU
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-5 text-sm flex-1">
          <div className="bg-[#3F5153] text-white w-full px-3 py-4  rounded flex-grow text-center">
            info.praisechinedu@gmail.com
          </div>
          <div className="bg-[#3F5153] text-white w-full px-3 py-4  rounded flex-grow text-center">
            +2347059053757
          </div>
        </div>
        <hr className="border-[#A3E2BB63] mb-5" />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#3F5153] p-2 rounded">
              <label className="block text-white text-sm font-medium mb-2 ">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Type here"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-teal-400"
              />
            </div>
            <div className="bg-[#3F5153] p-2 rounded">
              <label className="block text-white text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Type here"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-teal-400"
              />
            </div>
          </div>

          <div className="bg-[#3F5153] rounded p-3">
            <label className="block text-white text-sm font-medium mb-4">
              What service do you need?
            </label>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {services.map((service) => (
                <label
                  key={service}
                  className="flex items-center gap-2 cursor-pointer p-2 rounded hover:bg-[#1f1f2e] transition"
                >
                  <input
                    id={service}
                    type="checkbox"
                    name="service"
                    value={service}
                    checked={formData.services.includes(service)}
                    onChange={() => handleServiceChange(service)}
                    className="relative peer h-4 w-4 outline-none appearance-none shrink-0 border-2 border-[#A3E2BB] bg-[#19192B] checked:bg-[#A3E2BB]
                    focus:outline-none focus:ring-offset-0 focus:ring-1  rounded-full focus:ring-[#A3E2BB] transition duration-200
                    checked:border-0"
                  />
                  <Checked />
                  <span className="text-white text-sm">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="bg-[#3F5153] p-3 rounded">
            <label className="block text-white text-sm font-medium mb-2">
              Your Message
            </label>
            <p className="text-slate-400 text-xs mb-2">
              You've any note or message for us? Type here
            </p>
            <input
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-teal-400 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="relative w-full bg-[#19192B] border border-[#A3E2BB] text-white font-medium py-3 px-6 rounded transition-colors duration-200 flex items-center justify-center space-x-2 before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:bg-[#78f6cb20] before:z-[1] before:transition-[height] before:duration-300 hover:before:h-full"
          >
            <span className="text-[#A3E2BB]">Submit</span>
            <ArrowRight2 />
          </button>
        </form>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #a3e2bb;
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #a3e2bb;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
}
