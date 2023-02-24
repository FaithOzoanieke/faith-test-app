import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

function Pagination({ goToNextPage, goToPreviousPage }: any) {
  return (
    <Box display={'flex'} bg='blue.50' p={'10'}>
      <Button colorScheme={'blue'} onClick={goToPreviousPage}>
        Prev Page
      </Button>
      <Text px={'5'}>{goToPreviousPage} </Text>
      {/* <Text>of</Text>
      <Text px={'5'}>2</Text> */}
      <Box cursor={'pointer'}>
        <Button colorScheme={'blue'} onClick={goToNextPage}>
          Next Page
        </Button>
      </Box>
    </Box>
  );
}

export default Pagination;
