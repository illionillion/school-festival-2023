import { saveKeyword } from '@/lib/memoKeywords';
import { Box, Button, Center, Text, VStack, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Modal} from '@chakra-ui/react';
import type { FC } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useReward } from 'react-rewards';

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
  const { reward } = useReward('rewardId', 'confetti');

  useEffect(() => {
    reward();
  }, [reward]);
  return (<>
    <VStack w='100vw' h="calc(100svh - 72px)" justify='center' alignItems='center' py='14'>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <VStack gap={3}>
          <Center gap={3}>
            <Text fontSize='2xl' userSelect="none">ルート</Text>
            <Text fontSize='2xl' color='red' userSelect="none">{route}</Text>
          </Center>
          <Center fontSize='2xl' userSelect="none">キーワード</Center>
        </VStack>
        <Box py='6'>
          <Center id="rewardId"
            maxW='356px'
            maxH='356px'
            w="calc(100vw * 0.75)"
            h="calc(100vw * 0.75)"
            borderWidth={1}
            borderColor='#1188AE'
            borderStyle='solid'
            margin='auto'
          >
            <motion.div animate={{ y: 0 }} transition={{ type: 'spring' }} initial={{ y: '15vh' }} whileTap={{ outline: 'none', scale: 0.8, rotate: 360 }}>
              <Text  fontSize='9xl' userSelect="none">{keyword}</Text>
            </motion.div>
          </Center>
        </Box>
        <Center>
          <motion.div whileTap={{ scale: 0.8 }}>
            <Button px='10' py='7' colorScheme="blue" borderRadius={15} onClick={handleSave}>メモする</Button>
          </motion.div>
        </Center>
      </motion.div>
    </VStack>
  </>
  );
};