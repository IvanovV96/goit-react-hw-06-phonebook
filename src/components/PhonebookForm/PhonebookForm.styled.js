import styled from '@emotion/styled';
import { Form } from 'formik';
export const FormEl = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  label {
    display: flex;
    justify-content: space-between;
  }
`;
