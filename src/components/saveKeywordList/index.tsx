import { deleteKeyword, loadKeyword } from '@/lib/memoKeywords';
import { Box, Button, ListItem, Text, UnorderedList, VStack, useDisclosure } from '@chakra-ui/react';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { DeleteCheckModal } from './DeleteCheck';

type wordList = {
  route: string,
  keywords: string[]
}

export const SaveKeywordList: FC = () => {
  const [words, setWords] = useState<wordList[]>([]);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const handleOpen = () => {
    if (words.length > 0) onOpen();
  };
  const resetKeywords = () => {
    Array.from('ABCDE').forEach(item => {
      deleteKeyword(item);
    });
    setWords([]);
    onClose();
  };
  useEffect(() => {
    setWords(
      Array.from('ABCDE').map(item => ({
        route: item,
        keywords: loadKeyword(item)
      })).filter(ele => ele.keywords.length > 0)
    );
  }, []);
  return <VStack w='100vw' h="calc(100svh - 72px)" justify='center' alignItems='center'>
    <Text fontSize='2xl' userSelect="none">キーワードメモ</Text>
    {words.length === 0 && <Text>キーワードなし</Text>}
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
    <Button colorScheme="red" onClick={handleOpen}>リセット</Button>
    <DeleteCheckModal isOpen={isOpen} onClose={onClose} onReset={resetKeywords} />
  </VStack>;
};