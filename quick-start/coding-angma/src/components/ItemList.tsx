/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Grid } from "semantic-ui-react";
import { IProductItem } from "../../pages";

const ItemList = ({ list }: { list: IProductItem[] }) => {
  console.log(list);
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          {list?.map((item: IProductItem) => (
            <Grid.Column key={item.id}>
              <div>
                <img src={item.image_link} alt={item.name} />
                <strong>{item.name}</strong>
                <span>
                  {item.category} {item.product_type}
                </span>
                <strong>${item.price}</strong>
              </div>
              {/* <Link href={`/view/${item.id}`}>
                <div>
                  <Image src={item.image_link} alt={item.name} />
                  <strong>{item.name}</strong>
                  <span>
                    {item.category} {item.product_type}
                  </span>
                  <strong>${item.price}</strong>
                </div>
                <a>
                  <div>
                    <img src={item.image_link} alt={item.name} />
                    <strong>{item.name}</strong>
                    <span>
                      {item.category} {item.product_type}
                    </span>
                    <strong>${item.price}</strong>
                  </div>
                </a>
              </Link> */}
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ItemList;
