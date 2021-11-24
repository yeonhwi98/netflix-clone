import { useEffect, useState } from "react";
import styled from "styled-components";
import { movieApi } from "../../api";
import { Loader } from "../Loader";
import { MainBanner } from "./MainBanner";
import { Movies } from "./Movies";
import { Container } from "../Container";
import { PageTitle } from "../PageTitle";

const Wrap = styled.div``;

const Section = styled.div`
  width: 100%;
`;

export const Home = () => {
  const [nowPlay, setNowPlay] = useState();
  const [upComming, setUpComming] = useState();
  const [topRated, setTopRated] = useState();

  const [loading, setLoading] = useState(true);
  const movieNum = 2;

  useEffect(() => {
    const movieData = async () => {
      try {
        const {
          data: { results: nowPlaying },
        } = await movieApi.nowPlaying();
        setNowPlay(nowPlaying);

        const {
          data: { results: upComming },
        } = await movieApi.upComming();
        setUpComming(upComming);

        const {
          data: { results: topRated },
        } = await movieApi.topRated();
        setTopRated(topRated);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    movieData();
  }, []);

  return (
    <div>
      <PageTitle title="홈" />

      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          {nowPlay && (
            <Wrap>
              <MainBanner data={nowPlay} num={movieNum} />

              <Section>
                <Container>
                  <Movies movieData={nowPlay} title="현재 상영 영화"></Movies>
                  <Movies movieData={upComming} title="개봉 예정 영화"></Movies>
                  <Movies movieData={topRated} title="인기 있는 영화"></Movies>
                  <Movies movieData={topRated} title="최신 개봉 영화"></Movies>
                </Container>
              </Section>
            </Wrap>
          )}
        </>
      )}
    </div>
  );
};
