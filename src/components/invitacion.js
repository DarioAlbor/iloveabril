import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Center, Heading, Text, Stack, Avatar, Badge, useColorModeValue } from '@chakra-ui/react';

function BlogPostWithImage() {
  return (
    <Center py={6}>
      <Link to="/invitaciones/panchitos" style={{ textDecoration: 'none' }}>
        <Box
          maxW={'445px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}
        >
          <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
            <img
              src={'panchos.jpeg'}
              alt="Example"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
          <Stack>
            <Text
              color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}
            >
              Comida
            </Text>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}
            >
              Ir a comer panchitos
            </Heading>
            <Text color={'gray.500'}>
              La verdad fue una mierda, los panchos se caen a pedazos
              tuve que madrugar como un hijo de puta para llevarte temprano
              y encima me terminas gorreando el primer día que llegaste
            </Text>
          </Stack>
          <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
            <Avatar src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_sbSwKJ17-HkIToChikm1027E4DsDXQKCvqENiOKFxQ&s'} />
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600}>FRITTEN DOGS</Text>
              <Text color={'gray.500'}>Ene 18 · 2024</Text>
              <Badge colorScheme="green">Fuimos</Badge>
            </Stack>
          </Stack>
        </Box>
      </Link>
    </Center>
  );
}

export default BlogPostWithImage;
