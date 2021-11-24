import { PageTitle } from "../PageTitle";
import styled from "styled-components";
import { Container } from "../Container";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieApi } from "../../api";
import { Loader } from "../Loader";
import { PageNotFound } from "../PageNotFound";
import { mainColor, mainWeight, moSize } from "../../Style/GlobalStyled";

const Wrap = styled.div`
  display: flex;
  width: 100%;
  margin-top: 80px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    margin-top: 60px;
    padding: 0;
  }
`;
const CoverImg = styled.div`
  width: 50%;
  height: 80vh;
  background-position: top;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 70vh;
  }
`;
const ConWrap = styled.div`
  width: 50%;
  margin-left: 50px;
  @media screen and (max-width: 500px) {
    width: 100%;
    margin-left: 0;
  }
`;
const Title = styled.div`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 30px;
  margin-top: 30px;
  @media screen and (max-width: 500px) {
    font-size: 36px;
  }
`;
const Info = styled.div`
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
  @media screen and (max-width: 500px) {
    font-size: ${moSize.descSize};
  }
`;

const Desc = styled.div`
  line-height: 2.2rem;
  font-size: 20px;
  opacity: 0.7;
  margin-top: 50px;
  font-weight: 300;
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
const Video = styled.iframe`
  width: 100%;
  height: 80vh;
`;
const VideoWrap = styled.div`
  height: 100vh;
  padding: 200px 0;
  @media screen and (max-width: 500px) {
    padding: 80px 0;
  }
`;

export const Detail = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState();
  const [loading, setLoading] = useState(true);
  const [videoData, setVideoData] = useState();
  // const [errorPage, setErrorPage] = useState(false);

  useEffect(() => {
    const MovieDetail = async () => {
      try {
        const { data } = await movieApi.detail(id);
        setMovieData(data);

        const {
          data: { results },
        } = await movieApi.video(id);
        setVideoData(results[0]);

        setLoading(false);
      } catch (error) {
        <PageNotFound></PageNotFound>;
        // setErrorPage(true);
      }
    };

    MovieDetail();
  }, [id]);
  // =>hook 오류

  const onClickVideo = () => {
    const videoWrapTop = document.querySelector(".video_wrap").offsetTop;
    // console.log(videoWrapTop);

    window.scrollTo({
      top: videoWrapTop,
      left: 0,
      behavior: "smooth",
    });
  };

  // console.log(movieData);
  // console.log(videoData);

  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div>
          {movieData && (
            <>
              <PageTitle title="영화리뷰" />
              <Container>
                <Wrap>
                  <CoverImg
                    style={{
                      background: `url(https://image.tmdb.org/t/p/original/${movieData.poster_path}) center/ cover `,
                    }}
                  ></CoverImg>
                  <ConWrap>
                    <Title>{movieData.title}</Title>
                    <Info>{movieData.release_date}</Info>
                    <Info>
                      {movieData.genres.map((genre) => genre.name + ",")}
                    </Info>
                    <Info>{movieData.runtime}분</Info>
                    <Desc>{movieData.overview}</Desc>
                    <Button onClick={onClickVideo}>
                      예고편 보기 <span> &rarr; </span>
                    </Button>
                  </ConWrap>
                </Wrap>
              </Container>
            </>
          )}

          {videoData && (
            <Container>
              <VideoWrap className="video_wrap">
                <Video
                  src={`https://www.youtube.com/embed/${videoData.key}`}
                ></Video>
              </VideoWrap>
            </Container>
          )}
        </div>
      )}
    </div>
  );
};
