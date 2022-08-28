import { Field, Form, Formik } from "formik";
import * as React from "react";
import Button from "../components/Button";
import CTALink from "../components/CTALink";
import Layout from "../components/Layout";
import Title from "../components/Title";
import { fieldContainerStyle, inputStyle } from "../constants";

interface LoginFormValues {
  email: string;
  password: string;
}
const Login: React.FC<{}> = ({}) => {
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };
  return (
    <Layout>
      <div className='max-w-md mx-auto'>
        <Title>Welcome back</Title>

        <div className='flex justify-center items-center mb-2'>
          <CTALink href={"register"}>Don&apos;t have a Crogam account?</CTALink>
        </div>

        <Formik
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}
        >
          <Form>
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

            <Button buttonType='submit'>Login</Button>
          </Form>
        </Formik>
      </div>
    </Layout>
  );
};

export default Login;
