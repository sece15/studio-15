import React from "react";

const CookiePolicy = ({ page, globalData }) => {

    return (

        <div>
            CookiePolicy page
        </div>
    );
}

export async function getStaticProps() {
    //llamamos a la api externa
    const res = await fetch(`${process.env.REST_API}/wp-json/wp/v2/pages?slug=cookie-policy`);
    const pages = await res.json();
    //recibimos los props
    return {
        props: {
            page: pages[0]
        }
    }
}

export default CookiePolicy;