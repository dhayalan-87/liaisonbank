"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error while typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // ✅ Email validator
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // ✅ Validate form
  const validate = () => {
    const newErrors = {};
    const errorList = [];

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      errorList.push("Name is required");
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      errorList.push("Email is required");
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
      errorList.push("Invalid email format");
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      errorList.push("Subject is required");
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      errorList.push("Message is required");
    }

    return { newErrors, errorList };
  };

  // ✅ Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { newErrors, errorList } = validate();

    // ❌ If validation fails
    if (errorList.length > 0) {
      setErrors(newErrors);

      await Swal.fire({
        icon: "error",
        title: "Validation Errors",
        html: `
          <ul style="text-align:left;padding-left:20px;">
            ${errorList.map((err) => `<li>${err}</li>`).join("")}
          </ul>
        `,
        confirmButtonColor: "#d33",
      });

      return;
    }

    try {
      // ✅ Simulate API call (replace with real API)
      console.log("Form Data:", formData);

      await Swal.fire({
        icon: "success",
        title: "Successfully Sent!",
        text: "Your message has been submitted.",
        confirmButtonColor: "#3085d6",
      });

      // Reset form
      setFormData(initialState);
      setErrors({});
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Please try again later.",
      });
    }
  };

  return (
    <form id="contact" onSubmit={handleSubmit} noValidate>

      {/* NAME */}
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? "error" : ""}
        />
        <span className={formData.name ? "label-up" : ""}>
          Your name
        </span>
      </div>

      {/* EMAIL */}
      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Your e-mail"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "error" : ""}
        />
        <span className={formData.email ? "label-up" : ""}>
          Your e-mail
        </span>
      </div>

      {/* SUBJECT */}
      <div className="form-group">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className={errors.subject ? "error" : ""}
        />
        <span className={formData.subject ? "label-up" : ""}>
          Subject
        </span>
      </div>

      {/* MESSAGE */}
      <div className="form-group">
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? "error" : ""}
        />
        <span className={formData.message ? "label-up" : ""}>
          Your message
        </span>
      </div>

      <div className="form-group">
        <button type="submit">Submit</button>
      </div>

    </form>
  );
};

export default ContactForm;