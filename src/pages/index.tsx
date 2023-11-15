import { KeywordScreen } from '@/components/keywordScreen';
import { Layout } from '@/components/layout';

export default function Home() {
  return (
    <Layout>
      <KeywordScreen isOpen={false} keyword='？' route='サンプル' errorFlag={false} onMordalClose={()=>{}}/>
    </Layout>
  );
}