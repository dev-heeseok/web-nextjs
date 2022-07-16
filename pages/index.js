import { useEffect, useState } from "react";
import Head from "next/head";
import axios from 'axios';
import ItemList from "../src/component/ItemList";
import { Header, Loader } from "semantic-ui-react";

export default function Home() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  function getData() {
    axios.get(API_URL)
      .then(res => {
        console.log(res);
        setList(res.data);
        setLoading(false);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <dev>

      <Head>
        <title>HOME | 데브희석</title>
        <meta name="description" content="데브희석 홈입니다."></meta>
      </Head>
      {

        // <div style={{ padding: "300px 0" }}>
        //   <Loader inline="centered" active content='Loading' />
        // </div>
      }
      {
        loading ? (
          <div style={{ padding: "300px 0" }}>
            <Loader inline="centered" active content='Loading' />
          </div>
        ) : (
          <>
            <Header as="h3">베스트 상품</Header>
            <ItemList list={list.slice(0, 9)} />

            <Header as="h3">신상품</Header>
            <ItemList list={list.slice(9)} />
          </>
        )
      }
    </dev>
  )
}
