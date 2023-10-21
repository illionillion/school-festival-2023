import { KeywordScreen } from '@/components/keywordScreen';
import { Layout } from '@/components/layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import data from '@/keywords.json';
import { digestMessage } from '@/lib/digestMessage';

export default function Key() {
  const router = useRouter();
  const { route, hash } = router.query;
  const [currentRoute, setCurrentRoute] = useState<string>('');
  const [keyword, setKeyword] = useState<string>('');

  const decodeHash = async () => {
    if((!route || typeof route !== 'string') || (!hash  || typeof hash !== 'string')) return;
    if (data.some(item => item.route.toLowerCase() === route.toLowerCase())) {
      setCurrentRoute(route.toUpperCase());
      // hashとハッシュ化したidが等しいか比較する
      for (const item of data) {
        if (item.route.toLowerCase() === route.toLowerCase()) {
          for (const ele of item.keywords) {
            const hashed = await digestMessage(ele.id);
            if (hash === hashed) {
              setKeyword(ele.keyword);
            }
          }
        }
      }
    }
  };

  useEffect(()=>{
    decodeHash();
  },[route, hash]);
  return (
    <Layout>
      <KeywordScreen keyword={keyword} route={currentRoute as string} />
    </Layout>
  );
}