import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = ({ h1, p, b }) => {
  return (
    <Container>
      <Heading as="h1">{h1}</Heading>
      <Text>{p}</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">{b}</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound


export async function getStaticProps() {
  return {
    props: {
      h1: "Not found",
      p: "The page you&apos;re looking for was not found.",
      b: "Return to home"
    }
  }
}