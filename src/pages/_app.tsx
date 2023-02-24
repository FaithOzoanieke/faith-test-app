import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import CustomCard from '@/components/CustomCard';
import Pagination from '@/components/Pagination';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <CustomCard/>
      {/* <Pagination/> */}
    </ChakraProvider>
  );
}
