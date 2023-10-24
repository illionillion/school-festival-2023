import { deleteKeyword, loadKeyword } from '@/lib/memoKeywords';
import { Box, Button, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react';
import type { FC} from 'react';
import { useEffect, useState } from 'react';

type wordList = {
    route: string,
    keywords: string[]
}

export const SaveKeywordList:FC = () => {
  const [words, setWords] = useState<wordList[]>([]);
  const resetKeywords = () => {
    Array.from('ABCDE').forEach(item => {
      deleteKeyword(item);
    });
    setWords([]);
  };
  useEffect(() => {
    setWords(
      Array.from('ABCDE').map(item => ({
        route: item,
        keywords: loadKeyword(item)
      })).filter(ele => ele.keywords.length > 0)
    );
  },[]);
  return <VStack w='100vw' h="calc(100svh - 72px)" justify='center' alignItems='center'>
    <Text fontSize='2xl'>キーワードメモ</Text>
    {words.map((item, index) => (
      <Box key={index}>
        <Text>ルート：{item.route}</Text>
        <UnorderedList>
          {item.keywords.map((word, index) => (
            <ListItem key={index}>{word}</ListItem>
          ))}
        </UnorderedList>
      </Box>
    ))}
    <Button colorScheme="red" onClick={resetKeywords}>リセット</Button>
  </VStack>;
};