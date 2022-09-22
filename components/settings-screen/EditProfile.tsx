import { Form, Formik } from "formik";
import React from "react";
import { Input } from "@mantine/core";
import Button from "../Button";

const EditProfile: React.FC = ({}) => {
  return (
    <div>
      <Formik
        initialValues={{
          phone: "",
        }}
        onSubmit={(data) => console.log(data)}
      >
        <Form className='space-y-5'>
          <Input.Wrapper
            id='name-input'
            label='Name'
            className='font-saria'
            // description='Please enter your credit card information, we need some money'
            // error='Your credit card expired'
          >
            <Input
              className='font-saria'
              id='name-input'
              placeholder='Your name'
              value={"Livingstone Christwealth"}
              disabled
            />
            <p className='text-center text-sm mt-2'>
              To change your name, contact
              <span className='underline font-bold '>
                support@crogamtech.com
              </span>
            </p>
          </Input.Wrapper>

          <Input.Wrapper
            className='font-saria'
            id='email-input'
            label='Email'
            // description='Please enter your credit card information, we need some money'
            // error='Your credit card expired'
          >
            <Input
              className='font-saria'
              id='email-input'
              placeholder='Your email'
              value={"christwealthla@gmail.com"}
              disabled
            />
          </Input.Wrapper>

          <Input.Wrapper
            className='font-saria'
            id='phone-input'
            label='Phone'
            // description='Please enter your credit card information, we need some money'
            // error='Your credit card expired'
          >
            <div className='flex items-center'>
              <p className='text-xs mr-2'>+234</p>
              <Input
                className='font-saria flex-1'
                id='Phone-input'
                placeholder='Your phone number'
                value={"9028777074"}
                disabled
              />
            </div>
          </Input.Wrapper>
          <Button buttonType='submit' full>
            Update
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
export default EditProfile;
