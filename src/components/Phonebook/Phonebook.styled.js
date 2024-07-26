import styled from 'styled-components';
import { ErrorMessage } from 'formik';
import { Form } from 'formik';

export const FormikBox = styled.div`
  width: 500px;
  padding: 50px;
  margin: 50px auto 0;
  text-align: center;
  border: 1px solid black;
  border-radius: 10px;
`;

export const FormEl = styled(Form)`
  width: 150px;
  margin: 0 auto 20px;
`;

export const Error = styled(ErrorMessage)`
  font-size: 14px;
  color: red;
`;
