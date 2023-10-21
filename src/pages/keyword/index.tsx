import { Layout } from '@/components/layout';
import data from '@/keywords.json'
import { digestMessage } from '@/lib/digestMessage';
import { Box, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

type keyType = {route: string, urls: string[]}

// 保存したキーワードを表示する
export default function List() {
    const [keywords, setKeywords] = useState<keyType[]>([])
    const init = async () => {
        const keywords_:keyType[] = []
        for (const ele of data) {
            const json:keyType = {route: '', urls: []}
            json['route'] = ele.route
            for (const keyword of ele.keywords) {
                json['urls'].push(`/keyword/${ele.route}/${await digestMessage(keyword.id)}`)
            }
            keywords_.push(json)
            console.log();
        }
        setKeywords(keywords_)
    }

    useEffect(() => {
        init()
    },[])
  return <Layout>
    {keywords.map((ele, index) => (
        <Box key={index}>
            <Text>ルート：{ele.route}</Text>
            <UnorderedList>
                {ele.urls.map((url, i) => (
                    <ListItem key={i}><Link href={url}>{url}</Link></ListItem>
                ))}
            </UnorderedList>
        </Box>
    ))}
  </Layout>;
}