import React from "react";

const Project = ({ post, globalData }) => {

    console.log(post)
    console.log(globalData);

    return (

        <div>
            Project page
        </div>
    );
}

export async function getStaticPaths() {
    //llamamos a la api externa
    const res = await fetch(`${process.env.REST_API}/wp-json/wp/v2/cpt-project`);
    const posts = await res.json();

    const paths = posts.map(post => ({
        params: { slug: post.slug }
    }))
    //recibimos los props
    return { paths, fallback: false }
}


export async function getStaticProps({ params }) {
    //llamamos a la api externa
    const res = await fetch(`${process.env.REST_API}/wp-json/wp/v2/cpt-project?slug=${params.slug}`);
    const posts = await res.json();
    //recibimos los props
    return {
        props: {
            post: posts[0]
        }
    }
}

export default Project;