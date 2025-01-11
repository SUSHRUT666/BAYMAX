
const Contact = () => {
  return (
    <section className="py-24 bg-section-bg-color" id="section_5">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">Get in touch</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <iframe
              className="w-full h-96 rounded-medium"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.065641062665!2d-122.4230416990949!3d37.80335401520422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858127459fabad%3A0x808ba520e5e9edb7!2sFrancisco%20Park!5e1!3m2!1sen!2sth!4v1684340239744!5m2!1sen!2sth"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="calendly-inline-widget" data-url="https://calendly.com/d/cj9t-7mj-6nt" style={{minWidth:'320px', height:'630px'}}></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;