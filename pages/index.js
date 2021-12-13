import NextLink from 'next/link'
import {
    Link,
    Container,
    Heading,
    Box,
    Image,
    SimpleGrid,
    Button,
    List,
    ListItem,
    Icon,
    useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/articles'
import { BioSection, BioYear } from '../components/bio'
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoDiscord
  } from 'react-icons/io5'
  import { GridItem } from '../components/grid-item'
  import thumbYouTube from '../public/images/google.png'
import thumbInkdrop from '../public/images/weDo.png'

const Index = () => {
    return (
        <Layout>
        <Container>
        <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer based in Japan!
      </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Milan Adhikari
                    </Heading>
                    <p>Digital Craftsman ( Artist / Developer / Designer )</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/milan.jpg"
                        alt="Profile image"
                    />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Milan is a freelance and a full-stack developer based in Sydney with a
                    passion for building digital services/stuff he wants. He has a knack
                    for all things launching products, from planning and designing all the
                    way to solving real-life problems with code. When not online, he loves
                    hanging out with his guitar. Currently, he is living off of his own
                    product called{' '}
                    <NextLink href="/works/inkdrop">
                        <Link>Inkdrop</Link>
                    </NextLink>
                    .
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1989</BioYear>
          Born in Jhapa ( नेपाल ), Nepal.
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Completed the Bachelor's&apos;s Program in the Graduate School of
          Information Science at Ballarat University
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          Worked at Australia Post.
        </BioSection>
        <BioSection>
          <BioYear>2018 to present</BioYear>
          Works as a freelance
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="" target="_blank">
            Coding
          </Link>
          , Playing Guitar,
          , Leica, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/millanadhikari" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @millanadhikari
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/inkdrop_app" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @milanadhikari
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @milanadhikari
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @milanadhikari
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoDiscord} />}
              >
                Discord
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
    )
}

export default Index  
