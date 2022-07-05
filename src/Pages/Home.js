import React from "react";
import Banner from "../Components/Banner";
import PageAnimation from "../Components/PageAnimation";

function Home() {
  return (
    <PageAnimation>
      <Banner>
        <div className="flex flex8">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
        </div>
      </Banner>
      <Banner>
        <div className="flex flex6">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
      </Banner>
      <Banner>
        <div className="flex flex5">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </Banner>
      <Banner>
        <div className="grid grid8">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
        </div>
      </Banner>
      <Banner>
        <div className="grid grid6">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
      </Banner>
      <Banner>
        <div className="grid grid5">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </Banner>
      <Banner>
        <div className="grid grid4">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </Banner>
      <Banner>
        <div className="grid grid3">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </Banner>
      <Banner>
        <div className="grid grid2">
          <div>1</div>
          <div>2</div>
        </div>
      </Banner>
    </PageAnimation>
  );
}

export default Home;
