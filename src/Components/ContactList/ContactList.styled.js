import styled from "@emotion/styled";

export const TextContacts = styled.span`
  max-width: 225px;
`;

export const List = styled.ul`
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  & svg {
    margin-right: 10px;
  }
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Btn = styled.button`
  margin-left: 20px;
  cursor: pointer;
  padding: 5px 5px;
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  transition: transform 0.25s cubic-bezier(0.77, 0, 0.175, 1);

  &:hover {
    background-color: #7a1212;
    color: #fff;
    transform: scale(1.05);
    border: none;
    outline: none;
  }
`;
