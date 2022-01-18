import NextLink from 'next/link'
import {
    Container,
    Box,
    Heading,
    Image,
    Link,
    SimpleGrid,
    List,
    ListItem,
    Button,
    Icon,
    useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import {
    IoLogoLinkedin,
    IoLogoGithub,
    IoLogoMedium
} from 'react-icons/io5'
import thumbArithmos from '../public/images/projects/arithmos_01.jpg'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a high school student skilled in data science, quantum computing, and full stack 
                    development based on Minnesota!
                </Box>

                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Michael Kougang
                        </Heading>
                        <p>Student / Developer</p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{base: 4, md: 0}}
                        ml={{md: 6}}
                        align="center"
                    >
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/avatar.jpg"
                            alt="Profile Image"
                        />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Project Work
                    </Heading>
                    <Paragraph>
                        Michael is a high school student and has a passion for building
                        artificial intelligent solutions, solving problems with machine learning,
                        and using quantum mechanical properties to develop quantum computing solutions.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/projects">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                My Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Earned the MTA: Security Fundamentals,
                        MTA: Introduciton to Programming Using Python, and Microsoft Certified:
                        Azure Data Scientist Associate certifications.
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Earned the Microsoft Certified: Azure AI Fundamentals certification.
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Earned the IBM Certified Associate Developer - Quantum Computation using
                        Qiskit v0.2X certification.
                    </BioSection>
                    <Box align="center" my={4}>
                        <NextLink href="/certifications">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                Professional Certifications
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I Like
                    </Heading>
                    <Paragraph>
                        Creating{' '}
                        <Link href="https://github.com/RoyalWeden/Arithmos-v1" target="_blank">
                            Apps
                        </Link>
                        ,{' '}
                        <Link href="https://github.com/RoyalWeden/Snake-Machine-Learning" target="_blank">
                            Machine Learning
                        </Link>
                        ,{' '}
                        <Link href="https://www.credly.com/badges/e630aa98-80a9-4b4e-b768-8d4fb4bb8efd" target="_blank">
                            Quantum Computing
                        </Link>
                        , and Developing{' '}
                        <Link href="https://github.com/RoyalWeden/quantum-portfolio" target="_blank">
                            Web Applications
                        </Link>
                        .
                    </Paragraph>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        On The Web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/michaelkougang" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>
                                    @Michael Kougang
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://github.com/RoyalWeden" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                                    @RoyalWeden
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://medium.com/@michael.kougang" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoMedium} />}>
                                    @Michael Kougang
                                </Button>
                            </Link>
                        </ListItem>
                    </List>

                    <SimpleGrid columns={[1, 2, 2]} gap={6}>
                        <GridItem
                            href="https://github.com/RoyalWeden/Arithmos-v1"
                            title="Arithmos"
                            thumbnail={thumbArithmos}
                        >
                            An academic learning platform for mathematics
                        </GridItem>
                    </SimpleGrid>
                    <Box align="center" my={4}>
                        <NextLink href="/posts">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                Popular Posts
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page