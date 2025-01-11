
const Footer = () => {
  return (
    <footer className="bg-cover bg-center text-white pt-10 pb-16 bg-blue-950 rounded-t-[25px]" >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-8 md:mb-0 pl-7">
            <h2 className="text-4xl font-bold pl-10">Baymax</h2>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pl-10">

            <div>
              <h3 className="text-lg font-semibold mb-4">Terms and Security</h3>
              <ul>
                <li><a href="/terms" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Terms</a></li>
                <li><a href="/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Privacy</a></li>
              </ul>
            </div>

            {/* Technical Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Technical Support</h3>
              <ul>
                <li><a href="/support" className="hover:text-gray-300">Support</a></li>
                <li><a href="/faq" className="hover:text-gray-300">Frequently Asked Questions</a></li>
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacts</h3>
              <p>Email: support@example.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul>
                <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
                <li><a href="/blog" className="hover:text-gray-300">Blog</a></li>
                <li><a href="/news" className="hover:text-gray-300">News</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        
      </div>

      {/* Fixed Support Button */}
     
    </footer>
  );
};

export default Footer;