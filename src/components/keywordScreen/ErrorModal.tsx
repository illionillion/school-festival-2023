import { Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Modal} from '@chakra-ui/react';
import type { FC } from 'react';

interface ModalsProps {
    errorFlag: boolean
    onMordalClose: () => void
}

export const ErrorModal: FC<ModalsProps> = ({ errorFlag, onMordalClose }) => {
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