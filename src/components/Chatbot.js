import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GITHUB_URL, LINKEDIN_URL } from "../utils/constants";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [isChatOpen, setisChatOpen] = useState(false);
  const [chatMessage, SetChatMessage] = useState([
    { sender: "Bot", message: "Hello! Welcome to Hariharen's Portfolio 😊" },
  ]);
  const navigate = useNavigate();

  const displayChatBot = () => {
    setisChatOpen(!isChatOpen);
  };

  const closeChatBot = () => {
    setisChatOpen(false);
  };

  const userImage =
    "https://res.cloudinary.com/dhr74n4vu/image/upload/v1737369966/user_1_drq1io.png";
  const botImage =
    "https://res.cloudinary.com/dhr74n4vu/image/upload/v1737370023/technical-support_egyfl5.png";

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const messages = [...chatMessage, { sender: "User", message: `${input}` }];
    let chatResponse = "";

    if (input.toLowerCase().includes("hi".toLowerCase())) {
      chatResponse = `Hello, How can I assist you today? 😊`;
    } else if (input.toLowerCase().includes("hello".toLowerCase())) {
      chatResponse = "Hello! How can I help you today? 😄";
    } else if (input.toLowerCase().includes("hey".toLowerCase())) {
      chatResponse = "Hey! How can I help you today? 😄";
    } else if (input.toLowerCase().includes("good morning".toLowerCase())) {
      chatResponse = "Good Morning! How can I assist you today? 😄";
    } else if (input.toLowerCase().includes("good afternoon".toLowerCase())) {
      chatResponse = "Good Afternoon! How can I assist you today? 😄";
    } else if (input.toLowerCase().includes("good evening".toLowerCase())) {
      chatResponse = "Good Evening! How can I assist you today? 😄";
    } else if (
      input.toLowerCase().includes("introduce".toLowerCase()) ||
      input.toLowerCase().includes("tell me about hariharen".toLowerCase()) ||
      input.toLowerCase().includes("about".toLowerCase()) ||
      input.toLowerCase().includes("who are you".toLowerCase()) ||
      input.toLowerCase().includes("what do you do".toLowerCase()) ||
      input.toLowerCase().includes("tell me about yourself".toLowerCase()) ||
      input.toLowerCase().includes("who is hariharen".toLowerCase()) ||
      input.toLowerCase().includes("what is your background".toLowerCase()) ||
      input.toLowerCase().includes("your story".toLowerCase()) ||
      input.toLowerCase().includes("describe yourself".toLowerCase()) ||
      input.toLowerCase().includes("tell me more about you".toLowerCase()) ||
      input.toLowerCase().includes("what's your role".toLowerCase()) ||
      input
        .toLowerCase()
        .includes("give me some information about you".toLowerCase())
    ) {
      chatResponse =
        "I am a full-stack developer with a passion for technology and a strong drive to create innovative solutions. My journey in software development began with a comprehensive Full Stack Development course at NxtWave, where I gained hands-on experience working with Python, Django, React, JavaScript, Git, HTML5 and CSS3, which allows me to build end-to-end web applications that are both functional and user-friendly. In addition to my technical skills, I have practical experience in software testing from my internship at NatWest Digital Services, where I worked to ensure the quality and functionality of web applications. I was involved in writing test cases, conducting manual testing, and identifying bugs, which helped improve the overall user experience. In addition to my technical experience, I had the opportunity to serve as a Volunteer Teaching Assistant at NxtWave for six months. This role allowed me to teach and guide students through complex concepts in full-stack development, reinforcing my own understanding while also improving my communication and leadership skills. I am constantly eager to learn new technologies and approaches, and I thrive in collaborative, problem-solving environments. My goal is to build software that not only works well but also provides a meaningful impact to users. I am excited to apply my technical expertise and passion for development to a new role, where I can continue learning, contribute to exciting projects, and work with a team that values creativity and innovation. I am actively looking for new opportunities where I can grow and make a meaningful impact in the world of software development.";
      setTimeout(() => navigate("/about"), 1000);
    } else if (
      input.toLowerCase().includes("skills".toLowerCase()) ||
      input.toLowerCase().includes("what are your skills".toLowerCase()) ||
      input.toLowerCase().includes("tell me your skills".toLowerCase()) ||
      input.toLowerCase().includes("what can you do".toLowerCase()) ||
      input.toLowerCase().includes("skills you possess".toLowerCase()) ||
      input.toLowerCase().includes("your expertise".toLowerCase()) ||
      input.toLowerCase().includes("what are you good at".toLowerCase()) ||
      input.toLowerCase().includes("what's your skill set".toLowerCase()) ||
      input
        .toLowerCase()
        .includes("what's your area of expertise".toLowerCase()) ||
      input.toLowerCase().includes("what do you specialize in".toLowerCase()) ||
      input.toLowerCase().includes("skills and abilities".toLowerCase()) ||
      input.toLowerCase().includes("what do you know".toLowerCase()) ||
      input.toLowerCase().includes("what skills do you have".toLowerCase()) ||
      input.toLowerCase().includes("tell me about your skills".toLowerCase()) ||
      input
        .toLowerCase()
        .includes("which technologies do you know".toLowerCase()) ||
      input
        .toLowerCase()
        .includes("technologies you're familiar with".toLowerCase()) ||
      input
        .toLowerCase()
        .includes("what are your technical skills".toLowerCase()) ||
      input.toLowerCase().includes("your technical expertise".toLowerCase())
    ) {
      chatResponse = "Navigating to Skills page...";
      setTimeout(() => navigate("/skills"), 1000);
    } else if (
      input.toLowerCase().includes("portfolio".toLowerCase()) ||
      input.toLowerCase().includes("projects".toLowerCase()) ||
      input.toLowerCase().includes("work".toLowerCase()) ||
      input.toLowerCase().includes("work samples".toLowerCase()) ||
      input.toLowerCase().includes("show me your work".toLowerCase()) ||
      input.toLowerCase().includes("portfolio details".toLowerCase()) ||
      input.toLowerCase().includes("portfolio showcase".toLowerCase()) ||
      input.toLowerCase().includes("project showcase".toLowerCase()) ||
      input.toLowerCase().includes("past projects".toLowerCase()) ||
      input.toLowerCase().includes("work experience".toLowerCase()) ||
      input.toLowerCase().includes("show your projects".toLowerCase()) ||
      input.toLowerCase().includes("what have you built".toLowerCase()) ||
      input
        .toLowerCase()
        .includes("what projects have you worked on".toLowerCase()) ||
      input.toLowerCase().includes("project gallery".toLowerCase()) ||
      input.toLowerCase().includes("examples of your work".toLowerCase()) ||
      input.toLowerCase().includes("work you've done".toLowerCase()) ||
      input.toLowerCase().includes("portfolio items".toLowerCase())
    ) {
      chatResponse =
        "Here are some of the projects I've worked on. Navigating to the portfolio page...";
      setTimeout(() => navigate("/portfolio"), 1000);
    } else if (
      input.toLowerCase().includes("certificates".toLowerCase()) ||
      input.toLowerCase().includes("certificate".toLowerCase()) ||
      input
        .toLowerCase()
        .includes("what certificates do you have".toLowerCase()) ||
      input.toLowerCase().includes("show me your certificates".toLowerCase()) ||
      input.toLowerCase().includes("certificate details".toLowerCase()) ||
      input
        .toLowerCase()
        .includes("have you earned any certificates".toLowerCase()) ||
      input
        .toLowerCase()
        .includes("what certifications do you hold".toLowerCase()) ||
      input.toLowerCase().includes("certification".toLowerCase()) ||
      input.toLowerCase().includes("certified in".toLowerCase()) ||
      input.toLowerCase().includes("share your certificates".toLowerCase()) ||
      input
        .toLowerCase()
        .includes("provide certificate information".toLowerCase()) ||
      input.toLowerCase().includes("show your certifications".toLowerCase()) ||
      input.toLowerCase().includes("list of certificates".toLowerCase()) ||
      input
        .toLowerCase()
        .includes("what certifications have you obtained".toLowerCase()) ||
      input
        .toLowerCase()
        .includes("where are your certificates".toLowerCase()) ||
      input
        .toLowerCase()
        .includes("tell me about your certifications".toLowerCase()) ||
      input.toLowerCase().includes("any certificates".toLowerCase()) ||
      input.toLowerCase().includes("certificate information".toLowerCase())
    ) {
      chatResponse = "Navigating to Certificates page...";
      setTimeout(() => navigate("/certificate"), 1000);
    } else if (
      input.toLowerCase().includes("contact".toLowerCase()) ||
      input.toLowerCase().includes("how to contact".toLowerCase()) ||
      input.toLowerCase().includes("get in touch".toLowerCase()) ||
      input.toLowerCase().includes("reach out".toLowerCase()) ||
      input.toLowerCase().includes("contact me".toLowerCase()) ||
      input.toLowerCase().includes("how can I reach you.toLowerCase()") ||
      input.toLowerCase().includes("contact information".toLowerCase()) ||
      input.toLowerCase().includes("how do I contact you".toLowerCase()) ||
      input.toLowerCase().includes("where to contact".toLowerCase()) ||
      input.toLowerCase().includes("contact details".toLowerCase()) ||
      input.toLowerCase().includes("how to reach out linkedin".toLowerCase()) ||
      input.toLowerCase().includes("Linkedin url".toLowerCase()) ||
      input.toLowerCase().includes("Linkedin".toLowerCase())
    ) {
      chatResponse = (
        <span>
          Here is Hari's LinkedIn:
          <a
            href={LINKEDIN_URL}
            target="_blank"
            className="underline mt-2 ml-2"
          >
            LinkedIn URL
          </a>
        </span>
      );
    } else if (input.toLowerCase().includes("github".toLowerCase())) {
      chatResponse = (
        <span>
          Here is Hari's Github:
          <a href={GITHUB_URL} target="_blank" className="underline mt-2 ml-2">
            Github URL
          </a>
        </span>
      );
    } else if (
      input.toLowerCase().includes("thanks".toLowerCase()) ||
      input.toLowerCase().includes("thank you".toLowerCase()) ||
      input.toLowerCase().includes("thank".toLowerCase())
    ) {
      chatResponse = "You're welcome! Let me know if you need any more help.";
    } else if (input.toLowerCase().includes("Bye".toLowerCase())) {
      chatResponse = "Thank you for chatting with me! Goodbye!";
    } else if (input.toLowerCase().includes("see you".toLowerCase())) {
      chatResponse =
        "Goodbye, and feel free to reach out if you need help again!";
    } else if (input.toLowerCase().includes("see ya".toLowerCase())) {
      chatResponse = "It was a pleasure assisting you. Take care!";
    } else {
      chatResponse = "Sorry, I did not understand that. Can you try again?";
    }

    SetChatMessage([...messages, { sender: "Bot", message: chatResponse }]);
    setInput("");
  };

  return (
    <>
      <div
        className="fixed bottom-5 right-5 bg-white-600 text-white p-3 rounded-full cursor-pointer"
        onClick={displayChatBot}
      >
        <BsFillChatLeftTextFill size={30} />
      </div>

      {isChatOpen && (
        <div className="fixed bottom-5 right-5 w-[90%] sm:w-[400px] p-5 bg-[#171730] rounded-lg shadow-xl shadow-indigo-500/50 border border-gray-300 rounded-lg shadow-lg">
          <button
            onClick={closeChatBot}
            className="absolute top-2 right-2 text-xl text-gray-500"
          >
            <IoMdCloseCircle size={30} />
          </button>

          <div className="h-64 overflow-y-auto space-y-2 mb-4 p-4 bg-[#171720] rounded-md">
            {chatMessage.map((msg, index) => (
              <div
                key={index}
                className={`text-sm p-2 rounded-lg ${
                  msg.sender === "Bot" ? "bg-blue-100" : "bg-gray-200"
                } ${msg.sender === "User" ? "text-right" : "text-left"}`}
              >
                {msg.sender === "User" ? (
                  <img
                    src={userImage}
                    alt="User"
                    className="inline-block w-8 h-8 rounded-full mr-2"
                  />
                ) : (
                  <img
                    src={botImage}
                    alt="Bot"
                    className="inline-block w-8 h-8 rounded-full mr-2"
                  />
                )}
                {msg.message}
              </div>
            ))}
          </div>
          <form
            onSubmit={handleSubmit}
            className="relative flex items-center space-x-2"
          >
            <input
              type="text"
              value={input}
              onChange={handleInput}
              className="flex-1 p-2 pl-10 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Type a message"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-cyan-600"
            >
              <FaPaperPlane size={20} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
