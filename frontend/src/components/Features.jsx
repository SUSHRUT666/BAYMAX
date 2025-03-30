import SectionSeparator from "./SectionSeparator";

const Features = () => {
  return (
    <div className="container mx-auto px-4 py-16 lg:px-24 bg-gradient-to-b from-green-200 to-bg-green-500">
        <h2 className="text-5xl font-montserrat text-amber-950 font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
            <div className="bg-amber-50 shadow-lg rounded-lg p-6 text-center hover:scale-110 duration-300 border border-black">
            <img src="https://media.istockphoto.com/id/1321617070/vector/health-medical-logo.jpg?s=612x612&w=0&k=20&c=sus8vhG3c__vCdvOBLDhuf2vPUgIAudIAeUBApU_7Ew=" alt="Original coffee" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold font-montserrat mb-2">Predict Disease</h3>
            <p className="text-gray-600 font-montserrat">Instantly predict potential health risks with our AI-powered disease prediction tool, tailored to your unique medical profile.</p>
            </div>
            <div className="bg-amber-50 shadow-lg rounded-lg p-6 text-center hover:scale-110  duration-300 border border-black">
            <img src="https://static.vecteezy.com/system/resources/previews/013/218/336/non_2x/herbal-capsule-pill-leaf-medicine-logo-icon-illustration-template-capsule-pharmacy-medical-logo-template-vector.jpg" alt="23 coffees to choose" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 font-montserrat">Medicine Advice</h3>
            <p className="text-gray-600 font-montserrat">Your trusted guide for personalized medicine advice—empowering healthier choices, one click at a time!</p>
            </div>
            <div className="bg-amber-50 shadow-lg rounded-lg p-6 text-center hover:scale-110 duration-300 border border-black">
            <img src="https://cdn3.f-cdn.com//files/download/204824703/Doctor%20Consult.jpg?width=780&height=780&fit=crop" alt="Pleasant ambient" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 font-montserrat">Doctor appointment</h3>
            <p className="text-gray-600 font-montserrat">"Connecting you to expert care—schedule your doctor’s appointment effortlessly, anytime, anywhere!</p>
            </div>
            <div className="bg-amber-50 shadow-lg rounded-lg p-6 text-center hover:scale-110 duration-300 border border-black">
            <img src="https://i.pinimg.com/originals/30/7e/69/307e6906c251d91bb6202b3dd4736d7a.jpg" alt="Pleasant ambient" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 font-montserrat">keep track</h3>
            <p className="text-gray-600 font-montserrat">"Stay organized and in control—track your health records and appointments with ease, all in one place!.</p>
            </div>
        </div>

    </div>
  );
};

export default Features;
