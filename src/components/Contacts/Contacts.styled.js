import styled from '@emotion/styled';

export const ContactsEl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export const ContactEl = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 20px;
  p {
    display: inline;
    margin: 0;
  }
  button {
    padding: 10px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 20px;
    :hover {
      background-color: pink;
    }
  }
`;
