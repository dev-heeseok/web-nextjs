import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ItemList from "../src/components/ItemList";
import { Divider, Header } from "semantic-ui-react";

const inter = Inter({ subsets: ["latin"] });
const API_URL =
  "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

export interface IProductItem {
  id: number;
  image_link: string;
  name: string;
  product_type: string;
  category: string;
  price: string;
}

export default function Home() {
  const [list, setList] = useState<IProductItem[]>([]);

  const getData = () => {
    axios.get(API_URL).then((res) => {
      setList(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App | HEESEOK</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header as="h3">베스트 상품</Header>
      <Divider />
      <ItemList list={list.slice(0, 9)} />
      <Header as="h3">신상품</Header>
      <Divider />
    </div>
  );
}