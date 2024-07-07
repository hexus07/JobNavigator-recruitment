import logo from "../assets/images/logo.svg";

const FooterContent = () => {
  return (
    <footer className="flex flex-col items-center mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between  md:text-left">
          {/* Column 1 */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <p className="text-gray-400">
              We are a group of students passionate about technology and
              learning. Our goal is to provide resources and tools to help in
              finding solutions to job searching and recruitment.
            </p>
          </div>
          {/* Column 2 */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#" className="hover:text-blue-light">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-light">
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-light">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-light">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-gray-400">
              Email:{" "}
              <a
                href="mailto:info@studentwebsite.com"
                className="hover:text-blue-light"
              >
                info@jobnavigator.com
              </a>
            </p>
            <p className="text-gray-400">
              Phone:{" "}
              <a href="tel:+3706158599" className="hover:text-blue-light">
                +123456789
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="horizontal-line"></div>
      <div className="footer-logo flex flex-row gap-2 items-center justify-center">
        <img src={logo} className="logo h-10 w-10" alt="Logo" />
        <h1 className="text-2xl font-bold">
          JobNavigator <span className="text-sm font-thin">© 2024</span>
        </h1>
      </div>
    </footer>
  );
};

export default FooterContent;
