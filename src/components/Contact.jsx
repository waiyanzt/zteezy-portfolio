import bannerImage from "../assets/banner.jpg";

const XIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const LinkedInIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const EmailIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const ContactItem = ({ Icon, mainText, subText, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center text-center hover:text-[#7aa2f7] transition-colors duration-300 w-full md:w-1/3 p-4"
  >
    <Icon className="h-10 w-10 mb-3" />
    <div className="font-bold text-xl mb-1">{mainText}</div>
    <div className="text-sm">{subText}</div>
  </a>
);

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-[#1a1b26] text-[#a9b1d6]">
      <div
        className="w-full h-64 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      />

      <div className="w-full max-w-4xl mx-auto px-4 py-12">
        <p className="text-3xl md:text-4xl text-center italic font-serif text-[#7aa2f7] mb-12">
          "The mind is everything. What you think you become."
          <span className="block text-xl md:text-2xl mt-2 text-[#ffc777]">
            - Siddhartha Gautama Buddha
          </span>
        </p>

        <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0">
          <ContactItem
            Icon={XIcon}
            mainText="@ztzdotdev"
            subText="Ask me anything"
            link="https://x.com/ztzdotdev"
          />
          <ContactItem
            Icon={LinkedInIcon}
            mainText="Hire Me"
            subText="Available"
            link="https://www.linkedin.com/in/wai-yan-zaw-tin/"
          />
          <ContactItem
            Icon={EmailIcon}
            mainText="Email Me"
            subText="What's up?"
            link="mailto:zteezy.dev@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
