import styled from "styled-components";

const SFooter = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-top: 1px solid #555;
  color: gray;
  margin-top: 200px;
`;

export const Footer = () => {
  return <SFooter>$copy; copyright PnCoding</SFooter>;
};
