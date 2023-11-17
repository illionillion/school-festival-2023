import { Button, AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay} from '@chakra-ui/react';
import { useRef, type FC } from 'react';

interface DeleteModalProps {
    isOpen: boolean
    onReset: () => void
    onClose: () => void
}

export const DeleteCheckModal: FC<DeleteModalProps> = ({ isOpen, onClose, onReset }) => {
  const cancelRef = useRef<HTMLButtonElement>(null); // HTMLButtonElementを渡す

  return (
    <>
      <AlertDialog
        isCentered
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              確認
            </AlertDialogHeader>

            <AlertDialogBody>
                リセットしますか？(この操作は元に戻せません)
            </AlertDialogBody>

            <AlertDialogFooter gap={5}>
              <Button ref={cancelRef} onClick={onClose}>
                キャンセル
              </Button>
              <Button colorScheme='red' onClick={onReset} >
                リセット
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};