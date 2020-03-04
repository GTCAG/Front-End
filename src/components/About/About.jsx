import React from "react";
import "./About.scss";
import styled from "styled-components";
import bioPic from "../../images/pastor_bio.png";

const Container = styled.div`
  // background-color: red;

  display: flex;
  justify-content: center;
  width: 100%;
`;

const Bubble = styled.div`
  color: #333;
  background-color: white;
  margin: 25px;
  width: 100%;
  max-width: 1500px;
  padding: 25px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 7px;

  @media (max-width: 700px) {
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const FlexContainer = styled.div`
  display: flex;

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 400px;
  min-width: 400px;
  // height: 652.7px;
  max-height: 652.8px;
  border-radius: 5px;
  align-self: auto;

  @media (max-width: 580px) {
    width: 300px;
    min-width: 300px;
  }
`;

const SideText = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 16px;
  line-height: 1.85;
  text-align: justify;
  color: #555;
`;

const SideContainer = styled.div`
  padding-right: 10px;
  margin-left: 40px;
  width: 80%;

  @media (max-width: 850px) {
    margin-left: 0px;
  }
`;

const BioTitle = styled.h2`
  font-size: 25px;
  margin-bottom: 5px;
`;

const BioSubTitle = styled.p`
  font-family: "Lato", sans-serif;

  margin: 0px;
  padding: 0px;

  color: #888;
`;

const About = () => {
  return (
    <Container>
      <Bubble>
        <FlexContainer>
          <Image src={bioPic} alt="Pastor" />
          <SideContainer>
            <BioTitle>Aleksandr Kalinyuk</BioTitle>
            <BioSubTitle>
              Bishop, Regional Pastor of the National Slavic District of
              Assembly of God, Southwestern Region, United States
            </BioSubTitle>
            <SideText>
              Aleksandr Kalinyuk was born in a Christian family and his father
              was a pastor in the city Novovolynsk, Ukraine. From early
              childhood his life was spent in church. It is for this reason, at
              the age of eight, he was “born again” – God gave him the Holy
              Spirit. When he was 17 years old, Aleksandr was baptized in water,
              which symbolized the death, burial and resurrection of Jesus
              Christ and his identification with Him. Right after this,
              Aleksandr actively involved himself in serving the Lord in his
              local church. He worked with youth groups and directed the gospel
              musical group.
            </SideText>

            <SideText>
              In 1989 he permanently immigrated to the United States. In 1991 he
              was ordained for a deacon’s service, in 1995 ordained to be a
              pastor, and in 1996 became the senior pastor of the “Grace Trinity
              Church” located in Sacramento, California where he presently
              serves God.
            </SideText>

            <SideText>
              In 1998 Aleksandr was elected as a senior pastor of the California
              United Slavic evangelical churches, west. There he actively
              participated in constructing the new National Slavic District and
              in 2013 he was conference elected as a Regional pastor of the
              National Slavic District of Assemblies of God in the Southwest
              region.
            </SideText>

            <SideText>
              Aleksandr Kalinyuk graduated from the Evangelical college in
              Chicago and biblical institute in Fresno, California.
            </SideText>

            <SideText>
              He has been married to his wife, Svetlana, for 35 years. They have
              five children and 13 grandchildren – all boys!
            </SideText>
          </SideContainer>
        </FlexContainer>
      </Bubble>
    </Container>
  );
};

export default About;
