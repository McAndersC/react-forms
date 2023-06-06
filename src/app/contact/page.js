"use client";
import { useForm } from "react-hook-form";
import styles from "./page.module.css";
import ContactForm from "@/components/contactForm";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  message: Yup.string().required(),
  email: Yup.string().email("TAG DIG SAMMEN!").required("DEN SKAL VÆRE DER!"),
  age: Yup.number()
    .typeError("DU SKAL SKRIVE ET TAL")
    .required("ET TAL SKAL VÆRE DER"),
});



const Contact = () => {
  const onSubmit = (data) => {
    const { name, email, message, age, color, date } = data;

    let contactObject = {
      name: name,
      email: email,
      message: message,
      age: age,
      color: color,
      date: date,
    };
    console.log("contactObject", contactObject);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "Anders",
      email: "anders@medieskolerne.dk",
      color: "#973B3B",
      message: "En forudfyldt besked",
      age: 12,
    },
    resolver: yupResolver(validationSchema),
  });

  return (
    <div>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <fieldset>
          <legend>Create Contact</legend>

          <label>
            Name
            <input {...register("name")} placeholder="indtast navn" />
            {errors.name?.message && <p>{errors.name?.message}</p>}
          </label>

          <label>
            Email
            <input {...register("email")} />
            {errors.email?.message && <p>{errors.email?.message}</p>}
          </label>

          <label>
            Message!
            <input {...register("message")} />
            {errors.message?.message && <p>{errors.message?.message}</p>}
          </label>

          <label>
            Age!
            <input {...register("age")} />
            {errors.age?.message && (
              <p style={{ color: "red" }}>{errors.age?.message}</p>
            )}
          </label>

          <label>
            Date
            <input {...register("date")} type="date" />
            {errors.date?.message && (
              <p style={{ color: "red" }}>{errors.date?.message}</p>
            )}
          </label>
        </fieldset>

        <button type="submit">Add Contact</button>
      </form>
           
    </div>
  );
};

export default Contact;
