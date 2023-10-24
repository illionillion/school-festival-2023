import { Flex, Heading, Link } from '@chakra-ui/react';
import type { FC } from 'react';

export const Header:FC = () => {
  return <Flex as='header' w='full' background='#47BED8' px='2.5' py='5' position='sticky' align='center' gap={5} top={0}>
    <Heading color='#fff' fontSize='2xl' fontWeight='medium'>NFC謎解き</Heading>
    <Link color="#fff" href='/keyword/list'>メモ一覧</Link>
  </Flex>;
};