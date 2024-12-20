"use client";

import React, {
  startTransition,
  useActionState,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import styles from "./ContactForm.module.css";
import { handleSubmission } from "@/lib/actions";
import { TiTick } from "react-icons/ti";

const ContactForm = () => {
  const [state, formAction, pending] = useActionState(
    handleSubmission,
    undefined
  );
  const [formElement, setFormElement] = useState(null);
  // const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    // setSending(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    grecaptcha.ready(() => {
      grecaptcha
        .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {
          action: "submit",
        })
        .then((token) => {
          formData.append("token", token);
          startTransition(() => {
            formAction(formData);
          });
          setFormElement(e.target);
          // setSending(false);
        })
        .catch((err) => {
          // setSending(false);
          return null;
        });
    });
  };

  useEffect(() => {
    if (state?.success === true && formElement) {
      formElement.reset();
      setFormElement(null);
    }
  }, [state?.success, formElement]);

  const getErrorMessage = (field) => {
    const error = state?.errors?.find((err) => err.field === field);
    return error ? error.message : null;
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
          <section className={styles.inputInnerSection}>
            <input
              className={styles.input}
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
            />
            {getErrorMessage("fullName") && (
              <p className={styles.errorMsg}>{getErrorMessage("fullName")}</p>
            )}
          </section>
          <section className={styles.inputInnerSection}>
            <input
              className={styles.input}
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              required
            />
            {getErrorMessage("phoneNumber") && (
              <p className={styles.errorMsg}>
                {getErrorMessage("phoneNumber")}
              </p>
            )}
          </section>
        </section>
        <section className={styles.formSection}>
          <section className={styles.inputInnerSection}>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              required
            />{" "}
            {getErrorMessage("email") && (
              <p className={styles.errorMsg}>{getErrorMessage("email")}</p>
            )}
          </section>
          <section className={styles.inputInnerSection}>
            <input
              className={styles.input}
              type="number"
              name="budget"
              placeholder="Your Budget (in Rs.)"
              required
            />
            {getErrorMessage("budget") && (
              <p className={styles.errorMsg}>{getErrorMessage("budget")}</p>
            )}
          </section>
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
        {getErrorMessage("country") && (
          <p className={styles.errorMsg}>{getErrorMessage("country")}</p>
        )}
        <textarea
          className={styles.textArea}
          name="message"
          placeholder="Your Message"
          maxLength={1500}
        />
        {getErrorMessage("message") && (
          <p className={styles.errorMsg}>{getErrorMessage("message")}</p>
        )}
        <div className={styles.submission}>
          <button
            type="submit"
            className={styles.formSubmit}
            disabled={pending}
          >
            {pending ? "Submitting..." : "Submit"}
          </button>
          {state?.success && (
            <span className={styles.successMsg}>
              <TiTick size={20} />
              <p>{state?.msg}</p>
            </span>
          )}
          {state?.captchaError && (
            <p className={styles.errorMsg}>Something went wrong! Try again.</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
