import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

// Replace test data with your own
const features = Array.apply(null, Array(1)).map(function (x, i) {
  return {
    id: i,
    title: 'Te lo digo yo',
    text: 'listo que necesitas alguna ventaja mas? dejame de joder y veni aca en vez de hacerte la soltera',
  }
})

export default function GridListWithHeading() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Acá vas a ver todas las ventajas de andar conmigo;)</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          Todas son verdaderas y estan verificadas por mi
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} spacing={20}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}