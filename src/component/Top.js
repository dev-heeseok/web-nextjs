import Image from 'next/image';
import { Header } from "semantic-ui-react";
import GNB from './GNB';

export default function Top() {
  return (
    <div>
      <Image
        src="/favicon.ico"
        alt="logo"
        width={50}
        height={50}
      />

      <Header as="h1">데브희석</Header>
      <GNB />

    </div>
  )
}
