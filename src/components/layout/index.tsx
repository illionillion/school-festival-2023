import type { FC, ReactNode } from 'react';
import { Header } from '../header';

interface LayoutProps {
    children: ReactNode
}

export const Layout:FC<LayoutProps> = ({children}) => {
  return <>
    <Header/>
    <main>{children}</main>
  </>;
};