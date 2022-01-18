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
        <Layout title="Quantum Portfolio">
            <Container>
                <Title>
                    Quantum Portfolio <Badge>2021</Badge>
                </Title>
                <P>
                    A portfolio optimization app to easily manage a portfolio of stocks
                    using the potential advantages quantum computing can bring.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='http://quantumportfolio.herokuapp.com/'>
                            http://quantumportfolio.herokuapp.com/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link href='https://github.com/RoyalWeden/quantum-portfolio'>
                            https://github.com/RoyalWeden/quantum-portfolio <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, JS, CSS, Python, Flask, Qiskit, Heroku</span>
                    </ListItem>
                </List>
                <ProjectImage src="/images/projects/quantumportfolio_01.jpg" alt="Quantum Portfolio" />
            </Container>
        </Layout>
    )
}

export default Project