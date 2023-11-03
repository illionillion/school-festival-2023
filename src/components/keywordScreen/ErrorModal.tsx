import { Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Modal} from '@chakra-ui/react';
import type { FC } from 'react';

interface ErrorModalProps {
    errorFlag: boolean
    onMordalClose: () => void
}

export const ErrorModal: FC<ErrorModalProps> = ({ errorFlag, onMordalClose }) => {
  return (errorFlag &&
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