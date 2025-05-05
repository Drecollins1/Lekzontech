import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Faqs from "../component/Questions";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Booknow = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [inputValue4, setInputValue4] = useState("");
  const [serviceValue, setServiceValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const successful = () => {
    if (
      inputValue1.trim() === "" ||
      inputValue2.trim() === "" ||
      inputValue.trim() === "" ||
      inputValue3.trim() === "" ||
      inputValue4.trim() === "" ||
      serviceValue.trim() === "" ||
      !isChecked
    ) {
      alert("Please fill all the fields");
    } else {
      sendEmail();
      onOpen();
      setInputValue("");
      setInputValue1("");
      setInputValue2("");
      setInputValue3("");
      setInputValue4("");
      setServiceValue("");
      setIsChecked(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm("service_s2ugdd2", "template_uax1hsc", form.current, {
        publicKey: "0Q4vPIsmG7r4CYYeH",
      })
      .then((response) => {
        console.log("SUCCESS!", response);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send email. Please try again later.");
      });
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div
        data-aos="fade-up"
        className="relative bg-contact-image bg-contain lg:bg-cover bg-no-repeat bg-center h-[30vh] lg:h-[70vh]"
      >
        <div className="absolute h-[30vh] lg:h-full inset-0 bg-black opacity-40"></div>
        <div
          data-aos="fade-up"
          className="relative flex flex-col justify-center items-center h-full p-2"
        >
          {/* <h1 className="text-white text-4xl md:text-7xl">Contact Us</h1> */}
          {/* <p className="text-white text-lg text-center leading-8 md:text-2xl mt-5">
            Have questions? We’re here for you. Drop us a line, write us an
            email, or send us a text.
          </p> */}
        </div>
      </div>

      <div className="max-w-6xl mx-auto lg:my-36 p-1 lg:p-[45px] bg-white">
        <div className="flex flex-col items-center  md:flex-row-reverse">
          <div className="md:w-1/2 p-4">
            <img
              src="../../assets/images/booknow.jpg"
              alt="Service Representative"
              className="rounded-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-5">
              Ready to innovate? Consult <span className=" text-[#0F766E] font-bold">LekzonTech</span> and transform your business
              today.
            </h2>
            <form
              className="flex flex-col"
              ref={form}
              onSubmit={(e) => {
                e.preventDefault();
                successful();
              }}
            >
              <div className="mb-4 grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-zinc-700"
                  >
                    First name *
                  </label>
                  <input
                    className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    type="text"
                    name="from_name"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-zinc-700"
                  >
                    Last name *
                  </label>
                  <input
                    className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    type="text"
                    name="last_name"
                    value={inputValue1}
                    onChange={(e) => setInputValue1(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-700"
                >
                  Email
                </label>
                <input
                  className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  type="email"
                  name="from_email"
                  value={inputValue2}
                  onChange={(e) => setInputValue2(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="number"
                  className="block text-sm font-medium text-zinc-700"
                >
                  Phone Number
                </label>
                <input
                  className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  type="number"
                  name="phone_number"
                  autoComplete="off"
                  value={inputValue3}
                  onChange={(e) => setInputValue3(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="services"
                  className="block text-sm font-medium text-gray-800"
                >
                  Choose Services *
                </label>
                <select
                  id="services"
                  name="services"
                  value={serviceValue}
                  onChange={(e) => setServiceValue(e.target.value)}
                  required
                  aria-required="true"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all duration-300"
                >
                 
                  <option value="Web Design And Development">
                    Web Design And Development
                  </option>
                  <option value="Mobile App Development">
                    Mobile App Development
                  </option>
                  <option value="API Development And Integration">
                    API Development And Integration
                  </option>
                  <option value="Product Management">Product Management</option>
                  <option value="Product Design">Product Design</option>
                  <option value="Web Hosting">Web Hosting</option>
                  <option value="Graphics Design">Graphics Design</option>
                </select>
              </div>

              <label>Message</label>
              <textarea
                rows="3"
                name="message"
                required
                value={inputValue4}
                onChange={(e) => setInputValue4(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <div className="my-4 flex  items-start">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  required
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-zinc-300 rounded"
                />
                <label
                  htmlFor="privacy"
                  className="ml-2 block text-sm text-zinc-900"
                >
                  You agree to our friendly privacy policy.
                </label>
              </div>
              <input
                className="w-full bg-[#0F766E] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                type="submit"
                value="Send"
                onClick={successful}
              />
            </form>
          </div>
        </div>
      </div>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex flex-col justify-center items-center">
              <img src="../../assets/successful.gif" alt="" width={"50%"} />
              <p className="text-center">
                Your message has been successfully sent. Please relax while we
                respond to you shortly.
              </p>
            </div>
          </ModalBody>
          <div className="flex items-center justify-center">
            <ModalFooter>
              <Link
                to="/"
                className="bg-blue-950 text-white p-2 rounded-full px-8 mb-3"
                onClick={onClose}
              >
                Back to Home
              </Link>
            </ModalFooter>
          </div>
        </ModalContent>
      </Modal>

      <Faqs />
    </>
  );
};

export default Booknow;
