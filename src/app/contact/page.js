"use client";
import styles from "./contact.module.css";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/header";
import Marque from "../components/prefooter";
import Footer from "../components/footer";
import { useFormik } from "formik";
import * as yup from "yup";
import { db } from "../components/firebase";
import { addDoc, collection } from "firebase/firestore";
import FounderImg1 from "../../../public/Assets/Sandeep.jpg";
import FounderImg2 from "../../../public/Assets/Mayank.jpg";
import Image from "next/image";
import axios from "axios";
import ContactBackground from "../../../public/Assets/contact_backgroud.jpg";

const formValidationSchema = yup.object({
  interest: yup.string().required("Select an interest"),
  phone: yup.string(), // Make phone field optional
  email: yup
    .string()
    .email("Enter a Valid email")
    .required("Please Enter your email"),
  // checkboxField: yup
  //   .boolean()
  //   .oneOf([true], "You must accept the terms and conditions")
  //   .required("You must accept the terms and conditions"),
});
export default function Contact() {
  const foundersImg = [FounderImg1, FounderImg2];
  const [isFormOpen, setIsFormOpen] = useState(false);
  const userCollectionRef = collection(db, "ClientData");
  async function sendMessageToSlack(message) {
    try {
      const response = await axios({
        method: "post",
        url: "https://slack.com/api/chat.postMessage",
        data: `text=${message}&channel=${process.env.NEXT_PUBLIC_CUSTOMER_FORM_CHANNEL_ID}&token=${process.env.NEXT_PUBLIC_SLACK_BOT_TOKEN}`,
      });
    } catch (error) {
      // Handle errors
      console.error("Error sending message to Slack:", error);
    }
  }

  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: {
        interest: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        checkboxField: false,
      },
      validationSchema: formValidationSchema,
      onSubmit: async (values, { resetForm }) => {
        try {
          await addDoc(userCollectionRef, values);
          const { firstName, lastName, email, phone, interest } = values;
          const message = `New user details:\nInterest: ${interest}\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}`;
          await sendMessageToSlack(message);
          resetForm();
        } catch (error) {
          console.error("Error:", error);
        }
      },
    });
  return (
    <div className={styles.contact_page_container}>
      <div className={styles.empty_header_div}></div>
      <Header />
      <div className={styles.contact_page_header_container}>
        <div className={styles.contact_page_header_top_container}>
          <Image
            src={ContactBackground}
            alt="background"
            className={styles.contact_page_image}
            height={100}
            width={100}
          />
          <h2 className={styles.contact_page_image_text}>Try ConsumableAI</h2>
        </div>

        <div
          className={`${styles.contact_page_header_bottom_container} ${styles.contactPageFormOpen}`}
        >
          <div className={styles.contact_page_header_left_div}>
            <div className={styles.contact_page_left_center_div}>
              <h3>Discuss your Requirements</h3>
              <p className={styles.subtext_para1}>
                Empower Your Business with Real-Time Data for Informed
                Decision-Making. Contact Us Today.
              </p>
              <ul className={styles.contact_page_profile_pics}>
                {foundersImg?.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Image src={item} alt="pic1" width={48} height={48} />
                  </li>
                ))}
              </ul>
              <p className={styles.contact_page_email}>
                <a href="f" className={styles.email_address_class}>
                  contact@consumableai.com
                </a>
                <br />
                <span className={styles.send_email_text}>Send us an email</span>
              </p>

              <div className={styles.contact_page_handle_icons}>
                {/* Your social media icons */}
                {/* <a href="f" className="footer-handle-icon-div">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook"
                    class="svg-inline--fa fa-facebook "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="20"
                    height="20"
                  >
                    <path
                      fill="currentColor"
                      d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                    ></path>
                  </svg>
                </a> */}
                <a
                  href="https://www.instagram.com/consumableai/"
                  className="footer-handle-icon-div"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="instagram"
                    className="svg-inline--fa fa-instagram "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width={20}
                    height={20}
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@consumableai"
                  className="footer-handle-icon-div"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="youtube"
                    className="svg-inline--fa fa-youtube "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    width={20}
                    height={20}
                  >
                    <path
                      fill="currentColor"
                      d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/consumableai"
                  className="footer-handle-icon-div"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="x-twitter"
                    className="svg-inline--fa fa-x-twitter "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width={20}
                    height={20}
                  >
                    <path
                      fill="currentColor"
                      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/consumable-ai/"
                  className="footer-handle-icon-div"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin-in"
                    className="svg-inline--fa fa-linkedin-in "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width={20}
                    height={20}
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.contact_page_header_right_div}>
            {/* Your form section */}
            <h3>Tell us who you are</h3>

            <form
              onSubmit={handleSubmit}
              className={`${styles.contact_form} ${styles.contact_form_opacity_full}`}
            >
              <fieldset className={styles.contact_form_field1}>
                <label htmlFor="interest">I&#39;m interested in</label>
                <select
                  id="interest"
                  name="interest"
                  onChange={handleChange}
                  defaultValue=""
                >
                  <option value="" disabled defaultValue={true}>
                    Please Select
                  </option>
                  <option value="marketing">Marketing</option>
                  <option value="advertising">Advertising</option>
                </select>
                <p className={styles.error_message_contact_form}>
                  {touched.interest && errors.interest ? errors.interest : ""}
                </p>
              </fieldset>

              <div className={styles.contact_form_field2}>
                <fieldset>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </fieldset>
              </div>
              <fieldset className={styles.contact_form_field3}>
                <label htmlFor="email">
                  Email<sup>*</sup>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className={styles.error_message_contact_form}>
                  {touched.email && errors.email ? errors.email : ""}
                </p>
              </fieldset>
              <fieldset className={styles.contact_form_field3}>
                <label htmlFor="phone">
                  Phone<sup></sup>
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className={styles.error_message_contact_form}>
                  {touched.phone && errors.phone ? errors.phone : ""}
                </p>
              </fieldset>
              <div className={styles.contact_form_checkbox_div}>
                <legend>
                  We’d like to occasionally send you content that may interest
                  you:
                </legend>
                <label>
                  <input
                    type="checkbox"
                    id="contact-form-checkbox"
                    name="checkboxField"
                    value={values.checkboxField}
                    onChange={handleChange}
                  />
                  <span className={styles.hear_about_more_text}>
                    I&#39;d like to hear your latest updates
                  </span>
                </label>
              </div>
              <p className={styles.consent_text}>
                By clicking submit below, you consent to allow ConsumableAI to
                store and process your personal information as outlined in our
                Privacy Policy.
              </p>
              <input
                type="submit"
                value="Submit"
                className={styles.contactFormSubmitBtn}
              />
            </form>
          </div>
        </div>
      </div>
      <Marque />
      <Footer />
    </div>
  );
}
