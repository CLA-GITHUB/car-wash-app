import React from "react";
import { Field, Form, Formik } from "formik";
import Button from "../components/Button";
import Title from "../components/Title";
import CTALink from "../components/CTALink";
import Layout from "../components/Layout";

interface RegisterFormValue {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const inputStyle: string = "w-full h-12 px-2 rounded drop-shadow-lg";
const fieldContainerStyle: string = "mb-3";

const Register: React.FC<{}> = () => {
  const initialValues: RegisterFormValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  return (
    <Layout>
      <div className='max-w-md mx-auto'>
        <Title>Sign up</Title>
        <div className='flex justify-center items-center mb-2'>
          <CTALink href={"login"}>Have a Crogam account?</CTALink>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}
        >
          <Form>
            <div className={`${fieldContainerStyle}`}>
              <label htmlFor='firstName'>First Name</label>
              <br />
              <Field
                id='firstName'
                name='firstName'
                placeholder='First Name'
                className={`${inputStyle}`}
              />
            </div>

            <div className={`${fieldContainerStyle}`}>
              <label htmlFor='lastName'>Last Name</label>
              <br />
              <Field
                id='lastName'
                name='lastName'
                placeholder='Last Name'
                className={`${inputStyle}`}
              />
            </div>

            <div className={`${fieldContainerStyle}`}>
              <label htmlFor='email'>Email</label>
              <br />
              <Field
                id='email'
                name='email'
                placeholder='Email'
                className={`${inputStyle}`}
              />
            </div>

            <div className={`${fieldContainerStyle}`}>
              <label htmlFor='password'>Password</label>
              <br />
              <Field
                id='password'
                name='password'
                placeholder='Password'
                type='password'
                className={`${inputStyle}`}
              />
            </div>

            <Button buttonType='submit'>Sign me up</Button>
          </Form>
        </Formik>
      </div>
    </Layout>
  );
};

export default Register;
