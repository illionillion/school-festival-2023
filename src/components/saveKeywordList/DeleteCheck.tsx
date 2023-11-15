import { deleteKeyword } from '@/lib/memoKeywords';
import { Button, AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, useDisclosure} from '@chakra-ui/react';
import { useRef, type FC, useState } from 'react';

type wordList = {
  route: string,
  keywords: string[]
}

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

  const [words, setWords] = useState<wordList[]>([]);
  const resetKeywords = () => {
    Array.from('ABCDE').forEach(item => {
      deleteKeyword(item);
    });
    setWords([]);
    window.location.reload();
  };

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
              Attention!!
            </AlertDialogHeader>

            <AlertDialogBody>
                リセットしますか？(この操作は元に戻せません)
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                キャンセル
              </Button>
              <Button colorScheme='red' onClick={() => {resetKeywords(); onClose();}} >
                リセット
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
    
};