import { deleteKeyword, loadKeyword } from '@/lib/memoKeywords';
import { Box, Button, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

type wordList = {
    route: string,
    keywords: string[]
}

const keys = Array.from('ABCDE');

export const SaveKeywordList:FC = () => {
  const [words, setWords] = useState<wordList[]>([]);
  const resetKeywords = () => {
    keys.forEach(item => {
      deleteKeyword(item);
    });
    setWords([]);
  };
  useEffect(() => {
    setWords(
      keys.map(item => ({
        route: item,
        keywords: loadKeyword(item)
      })).filter(ele => ele.keywords.length > 0)
    );
  },[]);
  return <VStack w='100vw' h="calc(100svh - 72px)" justify='center' alignItems='center'>
    <Text fontSize='2xl' userSelect="none">キーワードメモ</Text>
    {words.map((item, index) => (
      <Box key={index}>
        <Text userSelect="none">ルート：{item.route}</Text>
        <UnorderedList userSelect="none">
          {item.keywords.map((word, index) => (
            <ListItem key={index}>{word}</ListItem>
          ))}
        </UnorderedList>
      </Box>
    ))}
    <Button colorScheme="red" onClick={resetKeywords}>リセット</Button>
  </VStack>;
};