import {
    Container,
    Badge,
    Link,
    List,
    ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
    return (
        <Layout title="Arithmos">
            <Container>
                <Title>
                    QuantumEd <Badge>2021-2022</Badge>
                </Title>
                <P>
                    A platform to help increase the education of quantum computing 
                    education in secondary and post secondary students.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://quantumed.vercel.app'>
                        https://quantumed.vercel.app <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Backend API</Meta>
                        <Link href='https://quantumwords.herokuapp.com/api/v1/'>
                        https://quantumwords.herokuapp.com/api/v1/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link href='https://github.com/RoyalWeden/QuantumEd'>
                        https://github.com/RoyalWeden/QuantumEd <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Backend API Source</Meta>
                        <Link href='https://github.com/RoyalWeden/quantum-words'>
                        https://github.com/RoyalWeden/quantum-words <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, JS, CSS, React, Next.js, Heroku, Python, Flask, REST API</span>
                    </ListItem>
                </List>
                <ProjectImage src="/images/projects/quantumed_01.jpg" alt="QuantumEd" />
            </Container>
        </Layout>
    )
}

export default Project