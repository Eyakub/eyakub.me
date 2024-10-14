import { Link, Button, chakra, Heading, Stack, Text } from '@chakra-ui/react'
import useMediaQuery from '../hook/useMediaQuery'
import { FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import contactMeData from '../data/contactMe.json'

export default function ContactMe() {
  const isLargerThan800 = useMediaQuery(800)

  return (
    <Stack alignItems="center" justifyContent="center" w="100%" spacing={10}>
      <SlideUpWhenVisible>
        <Heading fontSize={{ base: '4xl', md: '5xl' }} textAlign="center" color="displayColor">
          Keep In Touch.
        </Heading>
      </SlideUpWhenVisible>

      <SlideUpWhenVisible>
        <Text color="textSecondary" fontSize="md" textAlign="center">
          {contactMeData[0]?.fields?.title}{' '}
          <chakra.span
            color="button1"
            display={{ base: 'block', md: 'inline' }}
          >
            {' '}
            {contactMeData[0]?.fields?.highlightText}
          </chakra.span>
          .
          <br />
          {contactMeData[0]?.fields?.description}
        </Text>
      </SlideUpWhenVisible>

      <SlideUpWhenVisible>
        <Stack isInline spacing={4}>
          <Link href="https://linkedin.com/in/eyakub-sorkar" isExternal>
            <Button
              pos="static"
              color="white"
              leftIcon={<FaLinkedin fill="#3CCF91" />}
              size={isLargerThan800 ? 'md' : 'sm'}
              _hover={{ bg: 'gray.700' }}
              bg="#171717"
            >
              LinkedIn
            </Button>
          </Link>
          <Link href="mailto:eyakubsorkar@gmail.com" isExternal>
            <Button
              pos="static"
              color="white"
              transition="0.3s"
              leftIcon={<FaEnvelope fill="#3CCF91" />}
              size={isLargerThan800 ? 'md' : 'sm'}
              bg="#171717"
              _hover={{ bg: 'gray.700' }}
            >
              Email
            </Button>
          </Link>
          <Link
            href="https://drive.google.com/file/d/1tvYgAX2Udoh0980xlEa8R8G9X_zSRUau/view?usp=sharing"
            isExternal
          >
            <Button
              pos="static"
              color="white"
              leftIcon={<FaFileAlt fill="#3CCF91" />}
              size={isLargerThan800 ? 'md' : 'sm'}
              _hover={{ bg: 'gray.700' }}
              bg="#171717"
            >
              Resume
            </Button>
          </Link>
        </Stack>
      </SlideUpWhenVisible>
    </Stack>
  )
}