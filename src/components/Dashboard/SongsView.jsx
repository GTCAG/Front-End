import React from "react";

import styled from "styled-components";
import SearchBar from "./SearchBar";

const Container = styled.div`
  background-color: #394359;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MiddleBox = styled.div`
  background-color: #303242;
  width: 100%;
  // max-height: 700px;
  // max-width: 900px;
  height: 90%;
  margin: 0px 25px;
  padding: 25px;
`;
const Body = styled.div`
  background-color: #f2be8d;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  height: 100%;
  margin-top: 25px;
  border-radius: 25px;
  padding: 10px;
  padding-bottom: 25px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 25px;
    background-color: slategray;
  }
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  // padding: 25px;
  box-sizing: border-box;
`;

const SongRow = styled.div`
  display: block;
  height: 50px;
  background-color: white;
  border-radius: 25px;
`;

const SongsView = () => {
  return (
    <Container>
      <MiddleBox>
        <SearchBox>
          <SearchBar />
          <Body>
            <SongRow />
            <SongRow />
            <SongRow />
            <SongRow />
            <SongRow />
            <SongRow />
            <SongRow />
            <SongRow />
            <SongRow />
            <SongRow />
            <SongRow />
          </Body>
        </SearchBox>
      </MiddleBox>
    </Container>
  );
};

export default SongsView;
