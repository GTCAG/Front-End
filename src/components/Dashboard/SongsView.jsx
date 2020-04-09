import React from "react";
import styled from "styled-components";
import SongListView from "./SongListView";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding-top: 25px;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  overflow-y: auto;
`;

const SongsView = () => {
  return (
    <Container>
      <SongListView />
    </Container>
  );
};

export default SongsView;
