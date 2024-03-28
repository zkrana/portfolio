"use client";
import React, { useState, useEffect } from "react";
import { Check } from "phosphor-react";
import { Button, Modal, Typography } from "keep-react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import RootLayout, { getPageMetadata } from "../layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faEnvelope,
  faPhone,
  faGit,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faYoutube,
  faLinkedin,
  faSkype,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const [submittedFormData, setSubmittedFormData] = useState(null);
  const [service, setService] = useState("");
  const [packageOption, setPackageOption] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handlePackageChange = (event) => {
    const selectedPackage = event.target.value;
    setPackageOption(selectedPackage);
    setFormData((prevState) => ({
      ...prevState,
      packageOption: selectedPackage,
    }));
  };

  const handleServiceChange = (event) => {
    const selectedService = event.target.value;
    setService(selectedService);
    setFormData((prevState) => ({
      ...prevState,
      service: selectedService, // Update the service field in the form data
    }));
    if (selectedService !== "web-development") {
      setPackageOption("");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "service") {
      // Update the service state separately
      setService(value);

      // Reset the packageOption if the selected service is not web-development
      if (value !== "web-development") {
        setPackageOption("");
      }
    } else {
      // For other fields, update the formData state as usual
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // Check if all required fields are filled
    if (
      formData.name.trim() &&
      formData.phone.trim() &&
      formData.email.trim() &&
      formData.message.trim() &&
      formData.service &&
      formData.service.trim()
    ) {
      try {
        let isValid = true; // Flag to indicate if form submission is valid

        // Check if service is "web-development"
        if (formData.service.trim() === "web-development") {
          // If service is "web-development", check if a package option is selected
          if (!formData.packageOption || !formData.packageOption.trim()) {
            console.error("Please select a package");
            isValid = false;
          }
        }

        // Proceed with form submission if validation passes
        if (isValid) {
          const response = await fetch(
            "https://lyzerslab.glassfittingserviceinriyadh.com/auth/backend-assets/formSubmit.php",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            }
          );

          if (response.ok) {
            console.log("Email sent successfully");
            setSubmittedFormData(formData); // Save submitted form data
            setFormData({
              name: "",
              phone: "",
              email: "",
              message: "",
              service: "",
              packageOption: "",
            });
            setIsOpen(true); // Open success modal
          } else {
            console.error("Failed to send email");
          }
        }
      } catch (error) {
        console.error("Failed to send email", error);
      }
    } else {
      console.error("Please fill in all required fields");
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  const pageMetadata = getPageMetadata("Contact");
  return (
    <RootLayout pageName="Contact || We are here 24/7 for your support.">
      <Header />
      <section className="py-24 bg-blueGray-50 overflow-hidden" id="contact">
        <a
          href="/"
          className="logo-container hidden sm:flex justify-center font-bold text-4xl my-10"
        >
          <div className="letter">L</div>
          <div className="letter">Y</div>
          <div className="letter">Z</div>
          <div className="letter">E</div>
          <div className="letter">R</div>
          <div className="letter">S</div>
          <div className="letter">L</div>
          <div className="letter">A</div>
          <div className="letter">B</div>
        </a>
        <div className="sm:max-w-7xl w-[90%] mx-auto py-5">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide text-gray-100">
              Contact
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-300 text-3xl sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-200 ">
              Feel free to reach out to us if you have any questions, inquiries,
              or would like to discuss your project.
            </p>
          </div>
          <div className="sm:max-w-7xl w-[90%] mx-auto flex items-stretch justify-center">
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
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-slate-700 text-gray-50">
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
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-slate-700 text-gray-50">
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
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-slate-700 text-gray-50">
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

                <div className="social flex sm:gap-3 gap-2 items-center mt-9 mb-12 sm:mb-0">
                  <a
                    href="https://github.com/zkrana"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="bg-black text-[#2b3137] transition-colors hover:text-white rounded shadow px-4 py-2 cursor-pointer"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/zkrana"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="bg-black rounded shadow text-[#cc181e] transition-colors hover:text-white px-4 py-2 cursor-pointer"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/zkranadevs/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="bg-black rounded shadow text-[#0077b5] transition-colors hover:text-white px-4 py-2 cursor-pointer"
                    />
                  </a>
                  <a
                    href="skype:zkranao?chat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faSkype}
                      className="bg-black rounded shadow text-[#00aff0] transition-colors hover:text-white px-4 py-2 cursor-pointer"
                    />
                  </a>
                  <a
                    href="https://wa.me/01824228717"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="bg-black rounded shadow text-[#075e54] transition-colors hover:text-white px-4 py-2 cursor-pointer"
                    />
                  </a>
                </div>
              </div>
              <div className="card h-fit max-w-6xl lg:p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold text-gray-100">
                  Ready to Get Started?
                </h2>
                {isClient ? (
                  <form id="contactForm" onSubmit={handleSubmit}>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div className="mx-0 mb-1 sm:mb-4">
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
                      <div className="mx-0 mb-4">
                        <select
                          id="service"
                          value={service}
                          onChange={handleServiceChange}
                          className="w-full focus:outline-none rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 bg-white"
                        >
                          <option value="">Select a service</option>
                          <option value="web-development">
                            Web Development
                          </option>
                          <option value="ui-ux-design">UI/UX Design</option>
                          <option value="app-development">
                            App Development
                          </option>
                          <option value="domain-hosting">
                            Domain & Hosting
                          </option>
                          <option value="seo">SEO</option>
                          <option value="advertising">Advertising</option>
                        </select>
                      </div>
                      {service === "web-development" && (
                        <div className="mx-0 mb-4">
                          <select
                            id="package"
                            value={packageOption}
                            onChange={handlePackageChange} // Ensure this line is correct
                            className="w-full focus:outline-none rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 bg-white"
                          >
                            <option value="">Select a package</option>
                            <option value="basic">Basic</option>
                            <option value="standard">Standard</option>
                            <option value="custom">Custom</option>
                          </select>
                        </div>
                      )}
                      <div className="mx-0 mb-1 sm:mb-4">
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
                        className="bg-green-600 transition-colors hover:bg-[#6b7280] text-white hover:text-slate-900 font-bold py-2 px-4 rounded"
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
    </RootLayout>
  );
}

export default Contact;

<main>
  <div class="petirtoto">
    <div class="toto-togel">
      <br />
      <a href="#" target="_blank" rel="noopener noreferrer nofollow">
        <amp-img
          height="59"
          width="250"
          alt="PKVGAMES"
          src="https://s13.gifyu.com/images/SCE1E.png"
        ></amp-img>
      </a>
      <hr />
      <br />
      <div class="situs-togel">
        <a href="#" target="_blank" rel="noopener noreferrer nofollow">
          <button class="btn2">
            <strong>KLIK TOMBOL DIBAWAH</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>
            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
        </a>
        <br />
        <br />
        <a
          href="https://l.linklyhq.com/l/1r2lJ"
          target="_blank"
          rel="noopener noreferrer nofollow"
          class="block"
        >
          LINK ALTERNATIF TERBARU
        </a>

        <a
          href="https://l.linklyhq.com/l/1tuQS"
          target="_blank"
          rel="noopener noreferrer nofollow"
          class="block"
        >
          WHATSAPP OFFICIAL
        </a>

        <a
          href="https://secure.livechatinc.com/customer/action/open_chat?license_id=13317408"
          target="_blank"
          rel="noopener noreferrer nofollow"
          class="block"
        >
          LIVECHAT OFFICIAL
        </a>
      </div>
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer nofollow">
          <amp-img
            height="420"
            width="350"
            alt="DOMINOQQ"
            src="https://s13.gifyu.com/images/SCEaV.gif"
          ></amp-img>
        </a>
      </div>
    </div>
    <span style="text-align: center">
      <b>REJEKIPOKER</b>
    </span>
    <br />
  </div>
</main>;
