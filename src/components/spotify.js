import React from 'react';
import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaSpotify } from 'react-icons/fa';
import Criticar from './criticar';  

function SocialProfileWithImageHorizontal() {
  // Obtener los colores para el botón de Spotify
  const bgColor = useColorModeValue('#1DB954', '#191414');  // Color de fondo de Spotify
  const hoverColor = useColorModeValue('#179441', '#1DB954');  // Color de fondo al pasar el ratón

  const spotifyPlaylistUrl = 'https://open.spotify.com/playlist/7gmqzcHGW389ATbgQmzfCg?si=bcc16d144543487e&pt=3c32b8ff5ecc76cae69045d30cf460fc';

  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={'spotify.jpeg'}
            alt="#"
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Nuestra Playlist
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            (Solo cuando sos fiel)
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
          >
            Gracias por aparecer en mi vida, te amo 💖
            <Text color={'blue.400'}>(a veces)</Text>
          </Text>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          </Stack>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            {/* Botón "es una mierda"  */}
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}
              onClick={Criticar}
            >
              es una mierda
            </Button>
            {/* Botón de Spotify */}
            <Link href={spotifyPlaylistUrl} isExternal>
              <Button
                flex={1}
                fontSize="sm"
                rounded="full"
                bg={bgColor}
                color="white"
                boxShadow="0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                _hover={{
                  bg: hoverColor,
                }}
                _focus={{
                  bg: hoverColor,
                }}
                leftIcon={<FaSpotify style={{ marginRight: '8px' }} />} 
              >
                Spotify
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}

export default SocialProfileWithImageHorizontal;
