import React, { useState, useEffect } from "react";
import { Check } from "phosphor-react";
import { Button, Modal, Typography } from "keep-react";

function Newsletter() {
  // const [isClient, setIsClient] = useState(false);
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  const [formData, setFormData] = useState({
    email: "",
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

  const handleForm = async (e) => {
    e.preventDefault();

    // Perform form validation here, e.g., check if required fields are filled
    const isValid = formData.email;

    if (isValid) {
      console.log("Form Data:", formData); // Add this line to log form data

      try {
        const response = await fetch(
          "https://lyzerslab.glassfittingserviceinriyadh.com/auth/backend-assets/subscribe.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          const data = await response.json();
          setSubmittedFormData(data);
          setIsOpen(true);
          setFormData({
            email: "",
          });
        } else {
          console.error("Failed to subscribe:", response.statusText);
        }
      } catch (error) {
        console.error("Error subscribing:", error);
      }
    } else {
      console.error("Please enter a valid email address");
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <section className=" xl:max-w-6xl w-[90%] mx-auto bg-gray-900 mt-12">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-white">
              Sign up for our newsletter
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-light text-gray-200 md:mb-12 sm:text-xl dark:text-gray-400">
              Stay up to date with the roadmap progress, announcements and
              exclusive discounts feel free to sign up with your email.
            </p>
            {/* {isClient ? ( */}
            <>
              <form id="contactForm" onSubmit={handleForm}>
                <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className="relative w-full">
                    <label
                      htmlFor="email"
                      className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Email address
                    </label>
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </div>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Enter your email"
                      type="email"
                      id="email"
                      required=""
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
                  We care about the protection of your data.{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  >
                    Read our Privacy Policy
                  </a>
                  .
                </div>
              </form>
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
                      Successfully Subscribed.
                    </Typography>
                    {console.log("submittedFormData:", submittedFormData)}{" "}
                    {/* Add this line */}
                    {submittedFormData && (
                      <>
                        <Typography
                          variant="p"
                          className="mb-2 text-body-4 font-normal text-metal-600"
                        >
                          Hello, {submittedFormData.email}!
                        </Typography>
                        <Typography
                          variant="p"
                          className="text-body-4 font-normal text-metal-600"
                        >
                          Thanks for joining us.
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
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal.Body>
              </Modal>
            </>
            {/* ) : (
              "Prerendered"
            )} */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Newsletter;
