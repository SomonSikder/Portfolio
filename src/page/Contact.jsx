import React from "react";
import "../style/style.css";

const Contact = () => {
  return (
    <div
      style={{ minWidth: "650px", height: "400px" }}
      className="common-bg flex flex-col justify-center items-center"
    >
      <h2 className="text-center">Contact Me</h2>

      <div className="mt-4">
        <form
          className="flex flex-col justify-center items-center"
          id="contactform"
          action="https://formsubmit.io/send/somonsikder777@gmail.com"
          method="POST"
        >
          <div className="flex justify-start items-center gap-5 my-3">
            <label htmlFor="text">Your Name</label>
            <input
              name="name"
              type="text"
              className="w-80 rounded-lg p-2  border-t-emerald-500 outline-none"
            />
          </div>
          <div className="flex justify-start items-center gap-5 my-3 ml-1">
            <label htmlFor="email">Your Email</label>
            <input
              name="email"
              type="email"
              className="w-80 rounded-lg p-2  border-t-emerald-500 outline-none"
            />
          </div>
          <div className="flex justify-start items-center gap-5 my-3 ml-4">
            <label htmlFor="comment">Message</label>
            <textarea
              name="comment"
              className="w-80 rounded-lg p-2  border-t-emerald-500 outline-none resize-none"
              rows="3"
            ></textarea>
          </div>

          <input
            name="_formsubmit_id"
            type="text"
            style={{ display: "none" }}
          />

          <input
            value="Submit"
            type="submit"
            className="common-btn rounded-full  py-1 px-5 my-2 text-black"
          />
        </form>
      </div>
      <div className="w-2/4 common-bg flex flex-col justify-center items-center">
        <small>Phone: +8801626-038733</small>
        <small>Email: somonsikder777@gmail.com</small>
      </div>
    </div>
  );
};

export default Contact;
