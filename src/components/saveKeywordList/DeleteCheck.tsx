import { Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Modal, AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, useDisclosure} from '@chakra-ui/react';
import { useRef, type FC } from 'react';

interface DeleteModalProps {
    // deleteFlag: boolean
    // onMordalClose: () => void
}

export const DeleteCheckModal: FC<DeleteModalProps> = ({  }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  // before
  // const cancelRef = React.useRef()
  // after
  const cancelRef = useRef<HTMLButtonElement>(null); // HTMLButtonElementを渡す

  return (
    <>
      <Button colorScheme='red' onClick={onOpen}>
        リセット
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={onClose} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
    
};