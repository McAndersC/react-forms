'use client';
import styles from './contactform.module.css';
import { useForm, } from "react-hook-form";

const ContactForm = () => {

    const onSubmit = (data) => {

        console.log(data);

    }

    const { register, handleSubmit, formState: { errors }, } = useForm();

    return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <fieldset>
                <legend>Create Contact</legend>

            <label>Name
                <input {...register('name')} />
            </label>

            <label>Email
                <input {...register('email')} />
            </label>

            <label>Message!
                <input {...register('message')} />
            </label>

            </fieldset>

            <button type="submit">Add Contact</button>

      </form>
    )


}

export default ContactForm;