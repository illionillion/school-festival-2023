import { Box, Heading } from '@chakra-ui/react';
import type { FC } from 'react';

export const Header:FC = () => {
  return <Box as='header' w='full' background='#47BED8' px='2.5' py='5' position='sticky' top={0}>
    <Heading color='#fff' fontSize='2xl' fontWeight='medium'>NFC謎解き</Heading>
  </Box>;
};