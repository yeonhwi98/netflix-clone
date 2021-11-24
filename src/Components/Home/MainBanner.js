import { useState } from "react";
import styled from "styled-components";
import { mainWeight, mainColor, moSize } from "../../Style/GlobalStyled";

const SMainBanner = styled.section`
  height: 80vh;
  background-size: cover;
  background-position: center;
  padding: 220px 80px;
  @media screen and (max-width: 500px) {
    padding: 220px 20px;
  }
`;
const Title = styled.div`
  max-width: 550px;
  width: 100%;
  font-size: 70px;
  font-weight: ${mainWeight.titleWeight};
  margin-bottom: 25px;
  text-shadow: 0 0 15px rgba(0, 0, 0.7);
  line-height: 1.2em;
  @media screen and (max-width: 500px) {
    font-size: 70px;
    margin-bottom: 15px;
  }
`;
const Desc = styled.div`
  max-width: 600px;
  width: 100%;
  font-size: 20px;
  opacity: 0.8;
  line-height: 1.4em;
  text-shadow: 0 0 15px rgba(0, 0, 0.8);
  @media screen and (max-width: 500px) {
    font-size: ${moSize.descSize};
  }
`;

const Button = styled.button`
  all: unset;
  padding: 20px 50px;
  border: 1px solid #fff;
  font-weight: ${mainWeight.titleWeight};
  margin-top: 30px;
  cursor: pointer;
  transition: 0.2s;
  span {
    transition: 0.2s;
  }
  &:hover {
    background-color: ${mainColor.fontColor};
    color: ${mainColor.bgColor};
    span {
      margin-left: 20px;
    }
  }
  @media screen and (max-width: 500px) {
    padding: 15px 40px;
  }
`;

const MoreBanner = styled.section`
  height: ${(props) => props.MoreHeight};
  background-color: #111;
  margin-top: 100px;
  padding-left: 80px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

const ConWrap = styled.div`
  width: 30%;
`;
const MoreTitle = styled.div`
  font-size: 70px;
  font-weight: ${mainWeight.titleWeight};
  margin-bottom: 25px;
  margin: 50px 0 30px 0;
`;
const MoreDesc = styled.div`
  font-size: 20px;
  opacity: 0.8;
  line-height: 2em;
`;
const CoverBg = styled.div`
  width: 65%;
  background-size: cover;
  background-position: top;
  div {
    padding: 50px;
    float: right;
    font-size: 30px;
    cursor: pointer;
  }
`;

export const MainBanner = ({ data, num }) => {
  const [height, setHeight] = useState("0");
  const [moreNum, setMoreNum] = useState(0);

  const onClickMore = () => {
    if (moreNum === 0) {
      window.scrollTo({
        top: 500,
        left: 0,
        behavior: "smooth",
      });
      setHeight("80vh");
      setMoreNum(moreNum + 1);
    } else if (moreNum === 1) {
      setHeight(0);
      setMoreNum(moreNum - 1);
    }
  };

  const onClickClose = () => {
    setMoreNum(0);
    setMoreNum(moreNum - 1);
  };

  return (
    <div>
      <SMainBanner
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${
            data[`${num}`].backdrop_path
          })`,
        }}
      >
        <Title>{data[`${num}`].title}</Title>
        <Desc>{data[`${num}`].overview.slice(0, 70) + "..."}</Desc>
        <Button onClick={onClickMore}>더 보기 +</Button>
      </SMainBanner>

      <MoreBanner MoreHeight={height}>
        <ConWrap>
          <MoreTitle>{data[`${num}`].title}</MoreTitle>
          <MoreDesc>{data[`${num}`].overview.slice(0, 250) + "..."}</MoreDesc>
        </ConWrap>
        <CoverBg
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${
              data[`${num}`].backdrop_path
            })`,
          }}
        >
          <div onClick={onClickClose}>
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
          </div>
        </CoverBg>
      </MoreBanner>
    </div>
  );
};
