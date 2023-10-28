import { saveKeyword } from '@/lib/memoKeywords';
import { Box, Button, Center, Text, VStack } from '@chakra-ui/react';
import type { FC } from 'react';
interface KeywordScreenProps {
    route: string
    keyword: string
}
export const KeywordScreen: FC<KeywordScreenProps> = ({ route, keyword }) => {
  const handleSave = () => {
    saveKeyword(route, keyword);
  };
  return (<>
    <VStack w='100vw' h="calc(100svh - 72px)" justify='center' alignItems='center' py='14'>
      <VStack gap={3}>
        <Center gap={3}>
          <Text fontSize='2xl' userSelect={'none'}>ルート</Text>
          <Text fontSize='2xl' color='red' userSelect={'none'}>{route}</Text>
        </Center>
        <Center fontSize='2xl' userSelect={'none'}>キーワード</Center>
      </VStack>
      <Box py='6'>
        <Center
          maxW='356px'
          maxH='356px'
          w="calc(100vw * 0.75)"
          h="calc(100vw * 0.75)"
          borderWidth={1}
          borderColor='#1188AE'
          borderStyle='solid'
          margin='auto'
        >
          <Text fontSize='9xl' userSelect={'none'}>{keyword}</Text>
        </Center>
      </Box>
      <Center>
        <Button px='10' py='7' colorScheme="blue" borderRadius={15} onClick={handleSave}>メモする</Button>
      </Center>
    </VStack>
  </>
  );
};