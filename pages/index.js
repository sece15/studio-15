import React from "react";

const Home = ({ posts, globalData }) => {
  return (

    <div className="">
      Home page
    </div>
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