"use client";

import React, { useActionState, useEffect } from "react";
import Image from "next/image";
import styles from "./ContactForm.module.css";
import { useFormStatus } from "react-dom";
import { handleSubmission } from "@/lib/actions";

const ContactForm = () => {
  const [state, formAction] = useActionState(handleSubmission, undefined);

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
      <form className={styles.form} action={formAction} id="contactForm">
        <section className={styles.formSection}>
          <input
            className={styles.input}
            type="text"
            name="fullName"
            placeholder="Full Name"
          />
          <input
            className={styles.input}
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
          />
        </section>
        <section className={styles.formSection}>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            className={styles.input}
            type="number"
            name="budget"
            placeholder="Your Budget (in Rs.)"
          />
        </section>
        <select
          className={styles.select}
          id="country"
          name="country"
          form="contactForm"
        >
          <option value="volvo">Russia</option>
          <option value="saab">Georgia</option>
          <option value="opel">Kyrgyzstan</option>
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
