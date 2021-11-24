import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "../../Style/swiper.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainWeight, moSize } from "../../Style/GlobalStyled";
import { Navigation } from "swiper";

const Title = styled.h3`
  font-size: 35px;
  font-weight: ${mainWeight.titleWeight};
  margin: 80px 0 30px 0;
  @media screen and (max-width: 500px) {
    font-size: 25px;
    margin-top: 50px;
  }
`;
const CoverImg = styled.div`
  height: 180px;
  background-size: cover;
  background-position: center;
`;
const MovieTitle = styled.div`
  font-size: 18px;
  margin-top: 15px;
  @media screen and (max-width: 500px) {
    font-size: ${moSize.movieTitle};
  }
`;

SwiperCore.use([Navigation]);

export const Movies = ({ movieData, title }) => {
  const params = {
    breakpoints: {
      1024: {
        slidesPerView: 5.2,
        spaceBetween: 20,
      },

      320: {
        slidesPerView: 2.1,
        spaceBetween: 10,
      },
    },
  };

  return (
    <>
      <Title>{title}</Title>
      <Swiper module={[Navigation]} {...params} navigation>
        {movieData.map((play) => (
          <SwiperSlide key={play.id}>
            <Link to={`/detail/${play.id}`}>
              <CoverImg
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${play.backdrop_path})`,
                }}
              ></CoverImg>
              <MovieTitle>{play.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
