import React, { useState } from 'react';
import { SimpleGrid, Box, Spinner, Image, Text, Card } from '@chakra-ui/react';
import axios from 'axios';
import { baseurl } from '@/contants/util';
import Pagination from './Pagination';
import { useRouter } from 'next/router';
function CustomCard() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [pageNo, setPageNo]: any = useState('');
  const [data, setData] = useState<{
    info?: any;
    results?: any[];
  }>({});

  //Function runs after the page has been rendered
  React.useEffect(() => {
    const params = router.query;
    setPageNo(router.query.page || 1);
    handleFetchingOfCategories();
  }, [router.query]);

  //   Takes the user to the next page
  const goToNextPage = () => {
    if (data?.info.pages == pageNo) {
      return;
    }
    setPageNo(parseInt(pageNo) + 1);
    // updates the url
    router.replace({
      query: {
        ...router.query,
        page: parseInt(pageNo) + 1,
      },
    });
    handleFetchingOfCategories();
  };

  //  function takes the user to the previous page
  const goToPreviousPage = () => {
    if (pageNo == 1) {
      return;
    }
    // sets the state of the current page
    setPageNo(parseInt(pageNo) - 1);
    router.replace({
      query: {
        ...router.query,
        page: parseInt(pageNo) - 1,
      },
    });
    handleFetchingOfCategories();
  };

  const handleFetchingOfCategories = () => {
    setLoading(true);
    axios
      .get(`${baseurl}/character?page=${pageNo}`)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
        setLoading(false);
      });
  };

  console.log(data);
  return (
    <Box>
      {loading && (
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      )}
      <SimpleGrid
        spacing={'20px'}
        columns={{ base: 1, md: 2, lg: 3 }}
        bg='gray.100'
        p='10'
        textAlign={'center'}
        rounded='lg'
        color={'gray.50'}
      >
        {/* map only if its exist */}
        {data?.results?.map((item) => {
          return (
            <Card
              key={item._id}
              width='full'
              boxShadow={'sm'}
              p='6'
              rounded={'md'}
            >
              <Image src={item.image} w='full' />
              <Text fontSize={20} fontWeight={'bold'} textAlign={'center'}>
                {item.name}
              </Text>
            </Card>
          );
        })}
      </SimpleGrid>
      <Pagination
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
      />
    </Box>
  );
}

export default CustomCard;
