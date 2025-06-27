import React from "react";
import Container from "./shared/Container";

function Contact() {
  return (
    <Container className="mt-12 mb-12">
      <h1>Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-2">
        <div>
          <div className="cform shadow-lg w-full p-5">
            <form action="">
              <div className="mb-3">
                <input
                  className="w-full outline-none p-2 border-gray-300 border"
                  type="text"
                  name=""
                  placeholder="Enter your name"
                  id=""
                />
              </div>
              <div className="mb-3">
                <input
                  className="w-full outline-none p-2 border-gray-300 border"
                  type="email"
                  name=""
                  placeholder="Enter your email"
                  id=""
                />
              </div>
              <div className="mb-3">
                <input
                  className="w-full outline-none p-2 border-gray-300 border"
                  type="text"
                  name=""
                  placeholder="Enter subject"
                  id=""
                />
              </div>
              <div className="mb-3">
                <textarea
                  name=""
                  className="w-full outline-none p-2 border-gray-300 border"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="mb-3">
                <button
                  type="button"
                  className="bg-[#0B4F6C] capitalize font-semibold hover:bg-white duration-500 transition-all hover:text-[#0B4F6C] hover:border hover:border-[#0B4F6C] text-white p-3 w-full md:w-[30%]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.383738480338!2d3.344284873730343!3d6.59914042228234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9231a8afe793%3A0x5f297da31d68daec!2sAnchorsoft%20Academy!5e0!3m2!1sen!2sng!4v1748249889000!5m2!1sen!2sng"
              className="w-full h-[550px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
