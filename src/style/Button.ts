import styled from "styled-components";

export const Button = styled.button`
  background-color: #007bff;
  border: none;
  border-radius: 0.5em;
  color: white;
  padding: 0.5em 1em;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;
