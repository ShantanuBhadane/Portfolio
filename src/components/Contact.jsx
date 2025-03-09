import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../assets/styles/contact.css";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // State variable for success/error message
  const [feedbackMsg, setFeedbackMsg] = useState("");
  const [feedbackClass, setFeedbackClass] = useState(""); // New state for class name

  const onSubmit = async (data) => {
    data.access_key = "003e592c-5731-4394-ab98-82ace914062a";

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setFeedbackClass("feedback-success"); // Set success class
      setFeedbackMsg("Message sent successfully!");
      reset(); // Reset form fields
    } else {
      setFeedbackClass("feedback-error"); // Set error class
      setFeedbackMsg("Failed to send your message. Please try again.");
    }
  };

  return (
    <div className="contact-container" name="Contact">
      <h1 className="contact-title">Contact me</h1>
      <p className="contact-subtitle">
        Please fill out the form below to contact me
      </p>


      <div className="contact-form-wrapper">
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          <h2 className="form-title">Send Your Message</h2>
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Full Name
            </label>
            <input
              {...register("name", { required: true })}
              className="form-input"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <span className="error-message">This field is required</span>
            )}
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input
              {...register("email", { required: true })}
              className="form-input"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <span className="error-message">This field is required</span>
            )}
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea
              {...register("message", { required: true })}
              className="form-input"
              id="message"
              name="message"
              placeholder="Enter your query"
            />
            {errors.message && (
              <span className="error-message">This field is required</span>
            )}
          </div>
          {feedbackMsg && (
            <div className={`feedback-message ${feedbackClass}`}>
              {feedbackMsg}
            </div>
          )}

         <button type="submit" className="form-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
