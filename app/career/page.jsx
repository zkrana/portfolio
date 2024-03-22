"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
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
  const pageMetadata = getPageMetadata("career");
  return (
    <RootLayout pageName="Career || We care about your future.">
      <Header />
      <section className="py-24 bg-blueGray-50 overflow-hidden">
        <a
          href="/"
          className="logo-container hidden sm:flex justify-center font-bold text-4xl my-10 "
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

        <div className="container px-4 mx-auto">
          <h1 className="mb-5 text-6xl md:text-8xl text-slate-200 xl:text-10xl text-center font-bold font-heading font-heading tracking-px-n leading-none">
            Featured Jobs
          </h1>
          <p className="mb-16 text-lg text-gray-400 text-center font-medium leading-normal md:max-w-lg mx-auto">
            As a leading organization in its field, LyzersLab provides exciting
            career opportunities for individuals looking to join a dynamic and
            innovative team.
          </p>
          <div className="md:max-w-6xl mx-auto">
            <div className="flex flex-wrap -m-3.5 mb-10">
              <div className="w-full sm:w-1/2 md:w-1/3 p-3.5">
                <a href="#">
                  <div className="relative p-6 h-full bg-gray-800 border transition-all hover:border-[tomato] rounded-xl">
                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div className="mb-24 flex-1">
                        <h3 className="mb-2 text-lg font-bold text-slate-100 font-heading leading-snug">
                          Senior SEO Specialist
                        </h3>
                        <p className="text-sm text-gray-300 font-medium">
                          <span>Project Based</span>
                          <span className="px-2">•</span>
                          <span>UK</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 p-3.5">
                <a href="#">
                  <div className="relative p-6 h-full bg-gray-800 border  transition-all hover:border-[tomato] rounded-xl">
                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div className="mb-24 flex-1">
                        <h3 className="mb-2 text-lg font-bold text-slate-100 font-heading leading-snug">
                          Data Engineer
                        </h3>
                        <p className="text-sm text-gray-300 font-medium">
                          <span>Project Based</span>
                          <span className="px-2">•</span>
                          <span>Remote</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 p-3.5">
                <a href="#">
                  <div className="relative p-6 h-full bg-gray-800 border transition-all hover:border-[tomato] rounded-xl">
                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div className="mb-24 flex-1">
                        <h3 className="mb-2 text-lg font-bold text-slate-100 font-heading leading-snug">
                          ML Engineer
                        </h3>
                        <p className="text-sm text-gray-300 font-medium">
                          <span>Project Based</span>
                          <span className="px-2">•</span>
                          <span>Remote</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 p-3.5">
                <a href="#">
                  <div className="relative p-6 h-full bg-gray-800 border  transition-all hover:border-[tomato] rounded-xl">
                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div className="mb-24 flex-1">
                        <h3 className="mb-2 text-lg font-bold text-slate-100 font-heading leading-snug">
                          Block Chain Developer
                        </h3>
                        <p className="text-sm text-gray-300 font-medium">
                          <span>Full Time</span>
                          <span className="px-2">•</span>
                          <span>Remote, Project Based.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 p-3.5">
                <a href="#">
                  <div className="relative p-6 h-full bg-gray-800 border  transition-all hover:border-[tomato] rounded-xl shadow-9xl">
                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div className="mb-24 flex-1">
                        <h3 className="mb-2 text-lg font-bold text-slate-100 font-heading leading-snug">
                          Senior UI/UX Designer
                        </h3>
                        <p className="text-sm text-gray-300 font-medium">
                          <span>Full Time</span>
                          <span className="px-2">•</span>
                          <span>Remote</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 p-3.5">
                <a href="#">
                  <div className="relative p-6 h-full bg-gray-800 border  transition-all hover:border-[tomato] rounded-xl">
                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div className="mb-24 flex-1">
                        <h3 className="mb-2 text-lg font-bold text-slate-100 font-heading leading-snug">
                          Full-Stack Developer
                        </h3>
                        <p className="text-sm text-gray-300 font-medium">
                          <span>Remote</span>
                          <span className="px-2">•</span>
                          <span>Project Based</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="featured-jobs mx-auto max-w-md bg-gray-800 rounded-lg p-6">
              <a
                href="mailto:career@lyzerslab.com"
                className="block text-center  text-white"
              >
                <p className="text-xl mb-4">
                  Send your resume to: career@lyzerslab.com
                </p>
              </a>
              <a
                href="tel:01824228717"
                className="block text-center text-white"
              >
                <p className="text-xl">Or Contact: 01824228717</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </RootLayout>
  );
}

export default Contact;
