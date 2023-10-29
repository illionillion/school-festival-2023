import { saveKeyword } from '@/lib/memoKeywords';
import { Box, Button, Center, Text, VStack, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Modal} from '@chakra-ui/react';
import type { FC } from 'react';

interface KeywordScreenProps {
    route: string
    keyword: string
}
interface ModalsProps {
    errorFlag: boolean
    onMordalClose: () => void
}

export const Modals: FC<ModalsProps> = ({ errorFlag, onMordalClose }) => {
  return (errorFlag&&
  <Modal isCentered isOpen={errorFlag} onClose={onMordalClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Error!</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
            ページが存在していません
      </ModalBody>
      <ModalFooter>
        <Button onClick={onMordalClose}>閉じる</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>);
};

export const KeywordScreen: FC<KeywordScreenProps> = ({ route, keyword }) => {
  const handleSave = () => {
    saveKeyword(route, keyword);
  };
  return (<>
    <VStack w='100vw' h="calc(100svh - 72px)" justify='center' alignItems='center' py='14'>
      <VStack gap={3}>
        <Center gap={3}>
          <Text fontSize='2xl'>ルート</Text>
          <Text fontSize='2xl' color='red'>{route}</Text>
        </Center>
        <Center fontSize='2xl'>キーワード</Center>
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
          <Text fontSize='9xl'>{keyword}</Text>
        </Center>
      </Box>
      <Center>
        <Button px='10' py='7' colorScheme="blue" borderRadius={15} onClick={handleSave}>メモする</Button>
      </Center>
    </VStack>
  </>
  );
};