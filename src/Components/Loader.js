import styled from "styled-components";
import { keyframes } from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const loadingAni = keyframes`
    100%{
        transform:rotate(360deg)
    }
`;
const Loading = styled.div`
  animation: ${loadingAni} 1s infinite;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px solid crimson;
  border-color: crimson transparent transparent transparent;
`;

export const Loader = () => {
  return (
    <Wrap>
      <Loading></Loading>
    </Wrap>
  );
};
