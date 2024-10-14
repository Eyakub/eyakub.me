import Head from 'next/head'
import { Stack } from '@chakra-ui/react'
import Container from '../components/Container'
import Introduction from '../components/Introduction'
import FeaturedProjects from '../components/FeaturedProjects'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'

// Import JSON data
import introductionData from '../data/introduction.json'
import projectsData from '../data/projects.json'
import contactMeData from '../data/contactMe.json'

export default function Index() {
  return (
    <>
      <Container enableTransition={true}>
        <Head>
          <title>Eyakub - Software Engineer</title>
          <meta content="Eyakub - Software Engineer" name="title" />
          <meta content="eyakub, eyakub website" name="keywords" />
          <meta
            content="Software Engineer based in Bangladesh."
            name="description"
          />

          <meta content="website" property="og:type" />
          <meta content="https://eyakub.github.io" property="og:url" />
          <meta
            content="Eyakub - Software Engineer"
            property="og:title"
          />
          <meta
            content="Software Engineer based in Bangladesh."
            property="og:description"
          />
          <meta
            content="https://imagizer.imageshack.com/a/img922/7423/0P3Xty.png"
            property="og:image"
          />

          <meta content="summary_large_image" property="twitter:card" />
          <meta content="https://eyakub.github.io/" property="twitter:url" />
          <meta
            content="Eyakub - Software Engineer"
            property="twitter:title"
          />
          <meta
            content="Software Engineer based in Bangladesh."
            property="twitter:description"
          />
          <meta
            content="https://imagizer.imageshack.com/a/img922/7423/0P3Xty.png"
            property="twitter:image"
          />
        </Head>

        <Stack
          as="main"
          alignItems="flex-start"
          justifyContent="center"
          mt={{ base: '15vh', md: '20vh' }}
          pb="144px"
          spacing={{ base: '100px', md: '144px' }}
        >
          <Introduction introduction={introductionData} />
          <AboutMe />
          <FeaturedProjects projects={projectsData} />
          <ContactMe contactMe={contactMeData} />
        </Stack>
      </Container>
    </>
  )
}

// Remove getStaticProps since data is now imported directly from JSON
