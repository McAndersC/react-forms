'use client';
import { useForm } from "react-hook-form";
import styles from './page.module.css';
import ContactForm from "@/components/contactForm";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
});
  
const Contact = () => {

    const onSubmit = (data) => {

        const { name, email, message, age } = data;
  


        let contactObject = {
            'name' : name,
            'email' : email,
            'message' : message,
            'age' : age
        }
        console.log('contactObject', contactObject);

    }

    const { register, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
            name: 'Indtast navn',
        },
        resolver: yupResolver(validationSchema)
    });

    return (

        <div>
            <h1>Contact Page</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <fieldset>
                <legend>Create Contact</legend>

                <label>Name
                    <input {...register('name')} />
                    {errors.name?.message && <p>{errors.name?.message}</p>}
                </label>

                <label>Email
                    <input {...register('email')} />
                </label>

                <label>Message!
                    <input {...register('message')} />
                </label>

                <label>Age!
                    <input {...register('age')} type="number"/>
                </label>

                </fieldset>

                <button type="submit">Add Contact</button>

            </form>

            <h1>Contact Component</h1>
            <ContactForm></ContactForm>
        </div>


    )

}

export default Contact;