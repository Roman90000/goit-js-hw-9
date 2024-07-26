import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Error } from './Phonebook.styled';
import { FormikBox, FormEl } from './Phonebook.styled';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .trim()
    .required('Required'),
  number: Yup.number()
    .min(2, 'Too Short!')
    .positive('Must be positive')
    .required('Required'),
});

export const Phonebook = ({ onGetData }) => {
  return (
    <FormikBox className="App">
      <h1>Phonebook</h1>
      <h1>Name</h1>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          onGetData(values);
          actions.resetForm();
        }}
      >
        <FormEl>
          <Field name="name" type="text" placeholder="Name..." />
          <Error name="name" component="div" />
          <Field name="number" type="tel" placeholder="Tel..." />
          <Error name="number" component="div" />
          <button type="submit">Add contact</button>
        </FormEl>
      </Formik>
    </FormikBox>
  );
};
