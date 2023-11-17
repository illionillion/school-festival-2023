import { Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Modal} from '@chakra-ui/react';
import type { FC } from 'react';

interface ErrorModalProps {
    isOpen: boolean
    onMordalClose: () => void
}

export const ErrorModal: FC<ErrorModalProps> = ({ isOpen, onMordalClose }) => {
  return (isOpen &&
  <Modal isCentered isOpen={isOpen} onClose={onMordalClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>エラー</ModalHeader>
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