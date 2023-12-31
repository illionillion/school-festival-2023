import { KeywordScreen } from '@/components/keywordScreen';
import { Layout } from '@/components/layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import data from '@/keywords.json';
import { digestMessage } from '@/lib/digestMessage';
import { useBoolean } from '@chakra-ui/react';

export default function Key() {
  const router = useRouter();
  const { route, hash } = router.query;
  const [currentRoute, setCurrentRoute] = useState<string>('');
  const [keyword, setKeyword] = useState<string>('');
  const [errorFlag, setErrorFlag] = useState<boolean>(false);
  const [isOpen, {on: onOpen, off: onOff}] = useBoolean();

  const decodeHash = async () => {
    if((!route || typeof route !== 'string') || (!hash  || typeof hash !== 'string')) return;
    if (data.some(item => item.route.toLowerCase() === route.toLowerCase())) {
      console.log('routeの一致');
      setCurrentRoute(route.toUpperCase());
      // hashとハッシュ化したidが等しいか比較する
      for (const item of data) {
        if (item.route.toLowerCase() !== route.toLowerCase()) continue;
        let hashFlag = false;
        for (const ele of item.keywords) {
          const hashed = await digestMessage(ele.id);
          if (hash !== hashed) continue;
          setKeyword(ele.keyword);
          hashFlag = true;
        }
        if(!hashFlag){
          setErrorFlag(true);
          onOpen();
          // console.log('hashFlagはfalse');
        }
      }
    }else{
      setErrorFlag(true);
      onOpen();
      // console.log('routeの不一致');
    }
  };

  const onMordalClose=()=>{
    onOff();
  };

  useEffect(()=>{
    decodeHash();
  },[route, hash]);
  return (
    <Layout>
      <KeywordScreen keyword={keyword} route={currentRoute as string} errorFlag={errorFlag} isOpen={isOpen} onMordalClose={onMordalClose} />
    </Layout>
  );
}