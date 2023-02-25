import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

function Pagination({ goToNextPage, goToPreviousPage }: any) {
  return (
    <Box display={'flex'} p={'10'}>
      <Button colorScheme={'blue'} onClick={goToPreviousPage}>
        Prev Page
      </Button>
      <Box px={'5'}></Box>
        <Button colorScheme={'blue'} onClick={goToNextPage}>
          Next Page
        </Button>
    </Box>
  );
}

export default Pagination;
