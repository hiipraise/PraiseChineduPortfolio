import React, { useState } from "react";
import ArrowRight2 from "../../assets/icons/ArrowRight2";
import Checked from "../../assets/icons/checked";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    services: [],
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (formData.services.length === 0)
      errors.services = "At least one service is required";
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((s) => s !== value)
        : [...prev[field], value],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setSubmitStatus({
        type: "error",
        message: "Please fix the errors above",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mqadgngy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you for your message! I've received your inquiry and will get back to you shortly.",
        });
        setFormData({
          fullName: "",
          email: "",
          services: [],
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message:
            "Oops! Something went wrong. Please check your internet connection and try submitting the form again. If the problem persists, please contact me directly at info.praisechinedu@gmail.com.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
        error,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "Custom Full-Stack Development",
    "Front-End Development",
    "Back-End Development",
    "UI/UX Design & Prototyping",
    "Cross-Platform Mobile Apps",
    "Cloud & DevOps Solutions",
    "Technical Consulting & Team Augmentation",
  ];

  return (
    <div className="bg-[rgba(25,25,43,20%)] backdrop-blur-2xl flex flex-col lg:flex-row justify-center p-8 gap-8">
      <div className="flex flex-col flex-1">
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-5 text-sm flex-1">
          <div className="bg-[#3F5153] text-[#fbfada] w-full px-3 py-4 rounded flex-grow text-center">
            info.praisechinedu@gmail.com
          </div>
          <div className="bg-[#3F5153] text-[#fbfada] w-full px-3 py-4 rounded flex-grow text-center">
            +2347059053757
          </div>
        </div>
        <hr className="border-[#A3E2BB63] mb-5" />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#3F5153] p-2 rounded">
              <label className="block text-[#fbfada] text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Type here"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full bg-transparent text-[#fbfada] border-b border-gray-500 focus:outline-none focus:border-teal-400"
              />
              {errors.fullName && (
                <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>
            <div className="bg-[#3F5153] p-2 rounded">
              <label className="block text-[#fbfada] text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Type here"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-transparent text-[#fbfada] border-b border-gray-500 focus:outline-none focus:border-teal-400"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="bg-[#3F5153] rounded p-3">
            <label className="block text-[#fbfada] text-sm font-medium mb-4">
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
                    onChange={() => handleServiceChange("services", service)}
                    aria-label={`Select ${service}`}
                    className="relative peer h-4 w-4 outline-none appearance-none shrink-0 border-2 border-[#A3E2BB] bg-[#19192B] checked:bg-[#A3E2BB] focus:outline-none focus:ring-offset-0 focus:ring-1 rounded-full focus:ring-[#A3E2BB] transition duration-200 checked:border-0"
                  />
                  {formData.services.includes(service) && <Checked />}
                  <span className="text-[#fbfada] text-sm">{service}</span>
                </label>
              ))}
            </div>
            {errors.services && (
              <p className="text-red-400 text-xs mt-2">{errors.services}</p>
            )}
          </div>

          <div className="bg-[#3F5153] p-3 rounded">
            <label className="block text-[#fbfada] text-sm font-medium mb-2">
              Your Message
            </label>
            <p className="text-slate-400 text-xs mb-2">
              You've any note or message for us? Type here
            </p>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full bg-transparent border-b text-[#fbfada] border-gray-500 focus:outline-none focus:border-teal-400 resize-none"
            />
          </div>

          {submitStatus && (
            <p
              className={`text-sm mt-4 ${
                submitStatus.type === "success"
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {submitStatus.message}
            </p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[#19192B] border border-[#A3E2BB] text-[#fbfada] font-medium py-3 px-6 rounded transition-colors duration-200 flex items-center justify-center space-x-2 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <span className="text-[#A3E2BB]">
              {isSubmitting ? "Submitting..." : "Submit"}
            </span>
            {!isSubmitting && <ArrowRight2 />}
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
