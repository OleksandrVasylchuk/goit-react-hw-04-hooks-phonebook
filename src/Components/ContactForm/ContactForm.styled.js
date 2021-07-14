import styled from "@emotion/styled";

export const Forma = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px;
`;

export const Input = styled.input`
  width: 200px;
  border-radius: 3px;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 3px;
`;

export const Label = styled.label`
  display: inline-flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 400;
`;

export const Button = styled.button`
  width: max-content;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
  cursor: pointer;
  padding: 10px 15px;
  border: none;
  outline: none;
  border-radius: 5px;
  color: rgb(29, 126, 0);
  background-color: rgb(141, 190, 212);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  transition: transform 0.25s cubic-bezier(0.77, 0, 0.175, 1);
  &:hover {
    background-color: rgb(177 117 250);
    color: #fff;
    transform: scale(1.05);
    border: none;
    outline: none;
  }
`;

export const Error = styled.span`
  top: 100px;
  bottom: 0px;
  color: coral;
  margin-bottom: 10px;
  font-size: 10px;
  font-weight: 400;
`;
