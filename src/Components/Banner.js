import React from "react";
import styled from "styled-components";

function Banner() {
  return (
    <HomeBanner>
      <h1>Banner Test Text</h1>
    </HomeBanner>
  );
}

export default Banner;

const HomeBanner = styled.div`
  background-color: #999;
  color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
