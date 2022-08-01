import React from "react";
import OCol from "../bemit/07-objects/o-col/o-col";
import OContainer from "../bemit/07-objects/o-container/o-container";

const Home = ({ posts, globalData }) => {
  return (

    <div>
      <div>Home page</div>
      <OContainer>
        <OCol cols={{ lg: 12, md: 6, ms: 4 }}>
          <div className="box">Col 12</div>
        </OCol>
      </OContainer>
      <OContainer>
        <OCol cols={{ lg: 1, md: 1, sm: 1 }}>
          <div className="box">Col1</div>
        </OCol>
        <OCol cols={{ lg: 1, md: 1, sm: 1 }}>
          <div className="box">Col1</div>
        </OCol>
        <OCol cols={{ lg: 1, md: 1, sm: 1 }}>
          <div className="box">Col1</div>
        </OCol>
        <OCol cols={{ lg: 1, md: 1, sm: 1 }}>
          <div className="box">Col1</div>
        </OCol>
        <OCol cols={{ lg: 1, md: 1, sm: 4 }}>
          <div className="box">Col1</div>
        </OCol>
        <OCol cols={{ lg: 1, md: 1, sm: 4 }}>
          <div className="box">Col1</div>
        </OCol>
        <OCol cols={{ lg: 1, md: 6, sm: 4 }}>
          <div className="box">Col1</div>
        </OCol>
        <OCol cols={{ lg: 1, md: 6, sm: 4 }}>
          <div className="box">Col1</div>
        </OCol>
        <OCol cols={{ lg: 1, md: 6, sm: 4 }}>
          <div className="box">Col1</div>
        </OCol>
        <OCol cols={{ lg: 1, md: 6, sm: 4 }}>
          <div className="box">Col1</div>
        </OCol>
        <OCol cols={{ lg: 1, md: 6, sm: 4 }}>
          <div className="box">Col1</div>
        </OCol>
        <OCol cols={{ lg: 1, md: 6, sm: 4 }}>
          <div className="box">Col1</div>
        </OCol>
      </OContainer>
    </div >
  );
}

export async function getStaticProps() {
  //llamamos a la api externa
  const res = await fetch(`${process.env.REST_API}/wp-json/wp/v2/cpt-project?_embed=true`);
  const posts = await res.json();
  //recibimos los props
  return {
    props: {
      posts
    }
  }
}

export default Home;