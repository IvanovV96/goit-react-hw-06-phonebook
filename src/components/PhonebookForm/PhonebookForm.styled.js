import styled from '@emotion/styled';
import { Form, ErrorMessage } from 'formik';
export const FormEl = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 220px;
  hyphens: auto;
`;

export const ErrorMessageEl = styled(ErrorMessage)`
  display: block;
  font-size: 15px;
  color: red;
`;
