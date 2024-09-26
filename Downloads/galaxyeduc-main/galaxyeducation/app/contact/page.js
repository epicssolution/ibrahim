// app/contact/page.js (or pages/contact.js depending on your folder structure)
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center border-[1px] border-solid border-dark dark:border-light text-black dark:text-light  min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        
        {/* Company Introduction */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            GALAXY ABROAD EDUCATION VISA CONSULTANT & BEST IELTS INSTITUTE
          </h2>
          <p className="text-base text-gray-600">
            We are dedicated to providing professional services to help you with your education abroad and visa processes. Our expert team is here to guide you through each step, making the process as smooth and efficient as possible.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <ul className="text-lg space-y-2">
            <li>
              <strong>Phone: </strong>
              <a href="tel:+923325008560" className="text-blue-500 hover:underline">
                0332-5008560
              </a>
            </li>
            <li>
              <strong>Email: </strong>
              <a href="mailto:abdulghfar256@gmail.com" className="text-blue-500 hover:underline">
                abdulghfar256@gmail.com
              </a>
            </li>
            <li>
              <strong>Address: </strong>
              <span>Galaxy Abroad Education, Your Address Here</span>
            </li>
          </ul>
        </section>

        {/* Google Maps Location */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Our Location</h3>
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=GALAXY%20ABROAD%20EDUCATION%20VISA%20CONSULTANT&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
          <form action="#" method="POST" className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Your email address"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
