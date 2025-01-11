import React, { useEffect, useRef } from 'react';

const TimelineItem = React.forwardRef(({ title, description, icon }, ref) => (
  <li className="mb-12 relative pl-36" ref={ref}>
    <h4 className="text-black mb-3 font-bold">{title}</h4>
    <p className="text-black text-lg">{description}</p>
    <div className="absolute left-0 top-0 w-24 h-24 bg-blue-900 rounded-full flex justify-center items-center transition-transform transition-background-color duration-300">
      <i className={`bi ${icon} text-2xl text-white`}></i>
    </div>
  </li>
));

const HowItWorks = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      itemsRef.current.forEach((elem) => {
        if (elem) {
          const rect = elem.getBoundingClientRect();
          const circle = elem.querySelector('.absolute');
          const elemTop = rect.top;
          const elemBottom = elemTop + window.innerHeight * 0.8;

          if (elemBottom <= window.innerHeight && elemTop >= 0) {
            circle.style.transform = 'scale(1.10)';
            circle.style.backgroundColor = 'rgb(1, 0, 900)'; // Dark blue
          } else {
            circle.style.transform = 'scale(1)';
            circle.style.backgroundColor = 'rgb(96, 165, 250)'; // Light blue
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineItems = [
    {
      title: "Login and get your personalized dashboard",
      description: "This section of the dashboard contains user's exercise and calorie intake data that user puts in as well as medical records",
      icon: "bi-search"
    },
    {
      title: "Keeping your data",
      description: "This section of the dashboard contains user's exercise and calorie intake data that user puts in as well as medical record.",
      icon: "bi-bookmark"
    },
    {
      title: "Consultation",
      description: "Baymax is no certified doctor however it can suggest the best doctors around depending on your illness and Baymax's predictions. It also has the feature of personalized alerts regarding exercise reminder etc.",
      icon: "bi-book"
    }
  ];

  return (
    <section className="relative pb-24 pt-12 bg-gradient-to-t from-blue-200 to-bg-blue-500 font-montserrat text-2xl" id="section_3">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-black text-3xl font-bold mb-12">How does it work?</h2>
        <div className="max-w-3xl mx-auto">
          <ul className="relative">
            <div className="absolute left-12 top-0 w-2 h-full bg-blue-200"></div>
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
                ref={el => itemsRef.current[index] = el}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
