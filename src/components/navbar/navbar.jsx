import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navbarRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    const debounce = (fn, delay) => {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
      };
    };

    const debouncedScroll = debounce(handleScroll, 50);
    window.addEventListener("scroll", debouncedScroll);
    return () => window.removeEventListener("scroll", debouncedScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const sectionIds = ["home", "company", "services", "contact-us", "blog"];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#", id: "home" },
    { name: "About", href: "#company", id: "company" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Projects", href: "#blog", id: "blog" },
    { name: "Contact", href: "#contact-us", id: "contact-us" },
  ];

  const handleNavLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
    } else if (href.startsWith("#")) {
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement && navbarRef.current) {
        const navbarHeight = navbarRef.current.offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.scrollY -
          navbarHeight;

        window.scrollTo({ top: targetPosition, behavior: "smooth" });
        setActiveSection(targetId);
      }
    }
  };

  const renderNavLinks = (isMobile = false) =>
    navLinks.map(({ name, href, id }) => {
      const isActive = activeSection === id;
      const baseClasses = isMobile
        ? `block text-[#fbfada] hover:underline hover:underline-offset-4 transition hover:text-[#78f6cb] ${
            isActive ? "text-[#78f6cb] font-semibold" : ""
          }`
        : `relative group cursor-pointer py-1 ${
            isActive
              ? "text-[#78f6cb] font-semibold"
              : "text-[#fbfada] hover:text-[#78f6cb]"
          }`;

      return (
        <a
          key={name}
          href={href}
          onClick={(e) => handleNavLinkClick(e, href)}
          className={baseClasses}
        >
          {name}
          {!isMobile && isActive && (
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#78f6cb] transition-all duration-300" />
          )}
          {!isMobile && !isActive && (
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#78f6cb] group-hover:w-full transition-all duration-300" />
          )}
        </a>
      );
    });

  return (
    <nav
      ref={navbarRef}
      role="navigation"
      aria-label="Main"
      className={`sticky top-0 z-50 px-9 py-3 shadow-md ${
        scrolled ? "bg-[rgba(25,25,43,20%)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        <div className="z-10 flex flex-col items-center">
          <span
            className={`font-semibold text-xl ${
              scrolled ? "text-[#fbfada]" : "text-[#fbfada]"
            }`}
          >
            Praise⚡Chinedu
          </span>
        </div>

        <div className="hidden md:flex md:space-x-4 lg:space-x-8">
          {renderNavLinks()}
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none border p-1 rounded-lg border-[#c7b7a3"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6 text-[#c7b7a3]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-16 left-0 w-full bg-[#12372a]/50 backdrop-blur-2xl z-40"
        >
          <div className="flex flex-col space-y-4 p-6">
            {renderNavLinks(true)}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
