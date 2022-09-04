import { Formik, Field, FormikProps, Form } from "formik";
import * as React from "react";
import Button from "./Button";

interface VehicleFormProps {
  name: string;
  type: string;
  model: string;
  color: string;
  plate_no: string;
}
const inputStyle: string = "w-full h-12 px-2 rounded drop-shadow-lg font-saria";
const fieldContainerStyle: string = "mb-4";
const AddVehicleForm: React.FC<{}> = ({}) => {
  const initialValues: VehicleFormProps = {
    name: "",
    type: "",
    model: "",
    color: "",
    plate_no: "",
  };
  return (
    <div>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}
        >
          {(props: FormikProps<any>) => (
            <Form>
              <div className={`${fieldContainerStyle}`}>
                <Field
                  id='name'
                  name='name'
                  placeholder='Vehicle name (e.g Toyota Camry)'
                  className={`${inputStyle}`}
                />
              </div>

              <div className={`${fieldContainerStyle}`}>
                <Field
                  id='model'
                  name='model'
                  placeholder='Vehicle model (e.g 2001, 2020)'
                  className={`${inputStyle}`}
                />
              </div>

              <div className={`${fieldContainerStyle}`}>
                <Field
                  id='color'
                  name='color'
                  placeholder='Vehicle color (e.g Black, Green)'
                  className={`${inputStyle}`}
                />
              </div>

              <div className={`${fieldContainerStyle}`}>
                <Field
                  id='plate_no'
                  name='plate_no'
                  placeholder='Vehicle plate number (e.g EKY-0000)'
                  className={`${inputStyle}`}
                />
              </div>

              <div className={`${fieldContainerStyle}`}>
                <Field as='select' name='type' className={`${inputStyle}`}>
                  <option value=''>Vehicle type</option>
                  <option value='Saloon'>Saloon</option>
                  <option value='SUV'>SUV</option>
                  <option value='Pickup'>Pickup</option>
                  <option value='Bus'>Bus</option>
                </Field>
              </div>

              <Button buttonType='submit' full>
                Add
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default AddVehicleForm;
