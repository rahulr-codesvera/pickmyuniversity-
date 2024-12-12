"use client";

import React, { startTransition, useActionState, useEffect } from "react";
import Image from "next/image";
import styles from "./ContactForm.module.css";
import { useFormStatus } from "react-dom";
import { handleSubmission } from "@/lib/actions";

const ContactForm = () => {
  const [state, formAction] = useActionState(handleSubmission, undefined);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("token", "sampleToken123");
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <div className={styles.formContainer}>
      <Image
        className={styles.formPattern}
        src="/assets/formPattern.png"
        alt="pick my university"
        width={150}
        height={150}
      />
      <h3 className={styles.formHeader}>
        Your <span className={styles.mbbs}>MBBS dream</span> is just a click
        away
      </h3>
      <form className={styles.form} onSubmit={handleSubmit} id="contactForm">
        <section className={styles.formSection}>
          <input
            className={styles.input}
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
          />
          <input
            className={styles.input}
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            required
          />
        </section>
        <section className={styles.formSection}>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className={styles.input}
            type="number"
            name="budget"
            placeholder="Your Budget (in Rs.)"
            required
          />
        </section>
        <select
          className={styles.select}
          id="country"
          name="country"
          form="contactForm"
          required
        >
          <option value="Russia">Russia</option>
          <option value="Georgia">Georgia</option>
          <option value="Kyrgyzstan">Kyrgyzstan</option>
        </select>
        <textarea
          className={styles.textArea}
          name="message"
          placeholder="Your Message"
          maxLength={1500}
        ></textarea>
        <div className={styles.submission}>
          <SubmitButton />
          {state?.msg && <span>{state?.msg}</span>}
        </div>
      </form>
    </div>
  );
};

const SubmitButton = () => {
  const status = useFormStatus();

  return (
    <button
      type="submit"
      className={styles.formSubmit}
      disabled={status.pending}
    >
      {status.pending ? "Submitting..." : "Submit"}
    </button>
  );
};

export default ContactForm;
