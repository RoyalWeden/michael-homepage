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
                    Arithmos <Badge>2020-2021</Badge>
                </Title>
                <P>
                    An academic learning platform using the gamification concept
                    to help students enjoy learning mathematics.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link href='https://github.com/RoyalWeden/Arithmos-v1'>
                            https://github.com/RoyalWeden/Arithmos-v1 <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux/iOS/Andriod</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Unity, C#</span>
                    </ListItem>
                </List>
                <ProjectImage src="/images/projects/arithmos_01.jpg" alt="Arithmos" />
            </Container>
        </Layout>
    )
}

export default Project