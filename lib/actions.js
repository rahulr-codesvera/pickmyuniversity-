"use server";

export const handleSubmission = async (previousState, formData) => {
  const data = Object.fromEntries(formData);
  console.log(data);
  return { msg: `${data.token}` };
};
