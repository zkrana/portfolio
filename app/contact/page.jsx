"use client";
import React, { useState, useEffect } from "react";
import { Check } from "phosphor-react";
import { Button, Modal, Typography } from "keep-react";
import Footer from "../components/footer/Footer";
function Contact() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [submittedFormData, setSubmittedFormData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation here, e.g., check if required fields are filled
    const isValid =
      formData.name && formData.phone && formData.email && formData.message;

    if (isValid) {
      setSubmittedFormData({ ...formData });
      setIsOpen(true);
      // Reset form data to empty values
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <section className="" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 lg:pb-0">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <p className="text-base font-semibold uppercase tracking-wide text-gray-100">
                Contact
              </p>
              <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-300 text-3xl sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-200 ">
                Feel free to reach out to us if you have any questions,
                inquiries, or would like to discuss your project.
              </p>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-gray-300 dark:text-slate-400">
                  Our team is here to assist you every step of the way. Whether
                  you&apos;re looking to start a new project, need support with
                  an existing one, or simply want to learn more about our
                  services, we&apos;re just a message away. Don&apos;t hesitate
                  to get in touch with us!
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-slate-400 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2} // Change stroke-width to strokeWidth
                        strokeLinecap="round" // Change stroke-linecap to strokeLinecap
                        strokeLinejoin="round" // Change stroke-linejoin to strokeLinejoin
                        className="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-semibold leading-6 text-gray-300 dark:text-white">
                        Our Address
                      </h3>
                      <p className="text-gray-200 ">Uttara, Joynal Market,</p>
                      <p className="text-gray-200 ">Dhaka-1230, Bangladesh.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-slate-400 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2} // Change stroke-width to strokeWidth
                        strokeLinecap="round" // Change stroke-linecap to strokeLinecap
                        strokeLinejoin="round" // Change stroke-linejoin to strokeLinejoin
                        className="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-semibold leading-6 text-gray-300">
                        Contact
                      </h3>
                      <a
                        href="tel:01824228717"
                        className="text-gray-200 inline-block"
                      >
                        Mobile: +880-1824-228-717
                      </a>
                      <a
                        href="mailto:support@lyzerslab.com"
                        className="text-gray-200 block"
                      >
                        Mail: support@lyzerslab.com
                      </a>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-slate-400 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2} // Change stroke-width to strokeWidth
                        strokeLinecap="round" // Change stroke-linecap to strokeLinecap
                        strokeLinejoin="round" // Change stroke-linejoin to strokeLinejoin
                        className="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-semibold leading-6 text-gray-300 ">
                        Working hours
                      </h3>
                      <p className="text-gray-200">
                        Sunday - Thurseday: 09:00 AM - 08:00 PM
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold text-gray-100">
                  Ready to Get Started?
                </h2>
                {isClient ? (
                  <form id="contactForm" onSubmit={handleSubmit}>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="name"
                          className="pb-1 text-xs uppercase tracking-wider"
                        >
                          Name:
                        </label>
                        <input
                          type="text"
                          id="name"
                          autoComplete="given-name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          className="mb-2 focus:outline-none w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                          name="name"
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="phone"
                          className="pb-1 text-xs uppercase tracking-wider"
                        >
                          Phone:
                        </label>
                        <input
                          type="number"
                          id="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          autoComplete="phone"
                          placeholder="Phone"
                          className="mb-2 w-full focus:outline-none rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                          name="phone"
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="email"
                          className="pb-1 text-xs uppercase tracking-wider"
                        >
                          Email:
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          autoComplete="email"
                          placeholder="Your email address"
                          className="mb-2 w-full focus:outline-none rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                          name="email"
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="textarea"
                          className="pb-1 text-xs uppercase tracking-wider"
                        >
                          Message:
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          cols="30"
                          rows="5"
                          placeholder="Write your message..."
                          className="mb-2 w-full focus:outline-none rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                ) : (
                  "Prerendered"
                )}

                <Modal isOpen={isOpen} onClose={closeModal}>
                  <Modal.Body className="flex flex-col items-center">
                    <Modal.Icon className="h-20 w-20 bg-gray-50 text-success-500">
                      <Check size={60} />
                    </Modal.Icon>
                    <Modal.Content className="my-4 text-center">
                      <Typography
                        variant="h3"
                        className="mb-2 text-body-1 font-bold text-metal-900"
                      >
                        Your Form Successfully Submitted
                      </Typography>
                      {submittedFormData && (
                        <>
                          <Typography
                            variant="p"
                            className="mb-2 text-body-4 font-normal text-metal-600"
                          >
                            Hello, {submittedFormData.name}!
                          </Typography>
                          {/* Additional content */}
                          <Typography
                            variant="p"
                            className="text-body-4 font-normal text-metal-600"
                          >
                            One of our staff will communicate with you soon.
                            Thanks for contacting Lyzerslab.
                          </Typography>
                        </>
                      )}
                    </Modal.Content>
                    <Modal.Footer>
                      <Button
                        className="border border-slate-600 text-slate-500"
                        onClick={closeModal}
                        size="sm"
                        color="success"
                      >
                        Confirm
                      </Button>
                    </Modal.Footer>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
