import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 48px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: #f2be8d;
  border-style: none;
  outline: none;
  padding: 25px 0px;
  margin-left: 25px;
  box-sizing: border-box;
  font-size: 19px;
  color: #303242;
`;

const Form = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2be8d;
  border-style: none;
  border-radius: 100px;
  overflow: hidden;
`;

const SearchButton = styled.button`
  background-color: #f2be8d;
  border: none;
  cursor: pointer;
  outline: none;
  color: #303242;
  padding: 0px 20px;
  height: 100%;
`;

const SearchBar = () => {
  return (
    <Container>
      <Form>
        <SearchInput type="text" placeholder="Search" />
        <SearchButton type="button">
          <i class="fas fa-search fa-2x"></i>
        </SearchButton>
      </Form>
    </Container>
  );
};

export default SearchBar;
