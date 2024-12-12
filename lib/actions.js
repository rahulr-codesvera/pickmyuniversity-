"use server";
import { z } from "zod";
import axios from "axios";

export const handleSubmission = async (previousState, formData) => {
  const secretKey = process.env.NEXT_RECAPTCHA_PRIVATE_KEY;

  const FormData = z.object({
    fullName: z.string().min(1, "Full name is required"),
    phoneNumber: z.string().regex(/^\d{10}$/, "Enter a valid phone number"),
    email: z.string().email("Enter a valid email address"),
    budget: z.number().positive("Budget must be a positive number"),
    country: z.string().min(1, "Country is required"),
    message: z.string().max(1500, "Maximum 1500 characters"),
  });

  const { fullName, phoneNumber, email, budget, country, message, token } =
    Object.fromEntries(formData);
  if (!token) {
    return { success: false, captchaError: true };
  }

  try {
    FormData.parse({
      fullName,
      phoneNumber,
      email,
      budget: parseInt(budget),
      country,
      message,
    });
    const respose = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: secretKey,
          response: token,
        },
      }
    );
    console.log(await respose.data);
    if (respose.data.success) {
      return { success: true, msg: "Thank you. We will contact you soon!" };
    }
  } catch (err) {
    if (err instanceof z.ZodError) {
      // Extract error messages
      const errorMessages = err.errors.map((error) => ({
        field: error.path[0], // The field that caused the error
        message: error.message, // The human-readable error message
      }));
      return {
        success: false,
        errors: errorMessages,
      };
    }
    return { success: false, captchaError: true };
  }
};
