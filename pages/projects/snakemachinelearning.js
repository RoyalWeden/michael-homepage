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
        <Layout title="Snake Machine Learning">
            <Container>
                <Title>
                    Snake Machine Learning <Badge>2020</Badge>
                </Title>
                <P>
                    A reinforcement learning program that enables the snakes with
                    neural networks learn how to eat apples.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link href='https://github.com/RoyalWeden/Snake-Machine-Learning'>
                            https://github.com/RoyalWeden/Snake-Machine-Learning <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Python, Pygame, NEAT</span>
                    </ListItem>
                </List>
                <ProjectImage src="/images/projects/snakemachinelearning_01.png" alt="Snake Machine Learning" />
            </Container>
        </Layout>
    )
}

export default Project