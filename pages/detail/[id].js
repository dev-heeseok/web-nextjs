import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect } from 'react';
import Item from '../../src/component/Item';
import { useState } from 'react';
import { Loader } from "semantic-ui-react";
import Head from 'next/head';


const Post = ({ item, name }) => {
  return (
    <>
      {
        item ? (
          <>
            <Head>
              <title>{item.name}</title>
              <meta name='description' content={item.description}></meta>
            </Head>
            {name} 환경입니다.
            <Item item={item} />
          </>
        ) : (
          <>
            Empty
          </>
        )
      }
    </>
  )
  // const router = useRouter()
  // const { id } = router.query

  // console.log(`id: ${id}`);

  // const [item, setItem] = useState({});
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (id && id > 0) {
  //     const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  //     ; (() => {
  //       axios.get(API_URL)
  //         .then(res => {
  //           console.log(res.data);
  //           setItem(res.data);
  //           setLoading(false);
  //         })
  //         .catch(err => {
  //           console.log(err);
  //         })
  //     })();
  //   }
  //   else {
  //     setLoading(false);
  //   }

  // }, [id]);

  // return (
  //   <>
  //     {
  //       loading ? (
  //         <div style={{ padding: "300px 0" }}>
  //           <Loader inline="centered" active content='Loading' />
  //         </div>
  //       ) : (
  //         <Item item={item} />
  //       )
  //     }
  //   </>
  // )
}

export default Post

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "740" } },
      { params: { id: "730" } }, // See the "paths" section below
    ],
    fallback: true, // See the "fallback" section below
  };
}

export async function getStaticProps(context) {

  const id = context.params.id;
  const url = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(url);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name
    },
  };
}