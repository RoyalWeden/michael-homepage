import {
    Container,
    Heading,
    SimpleGrid,
    // Divider
} from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbArithmos from '../public/images/projects/arithmos_01.jpg'
import thumbQuantumPortfolio from '../public/images/projects/quantumportfolio_01.jpg'
import thumbSnakeML from '../public/images/projects/snakemachinelearning_01.png'

const Projects = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Projects
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <ProjectGridItem
                            id="arithmos"
                            title="Arithmos"
                            thumbnail={thumbArithmos}
                        >
                            A gamified academic learning platform to ensure students enjoy learning mathematics.
                        </ProjectGridItem>
                    </Section>
                    <Section>
                        <ProjectGridItem
                            id="quantumportfolio"
                            title="Quantum Portfolio"
                            thumbnail={thumbQuantumPortfolio}
                        >
                            A customizable stock portfolio creation app using quantum computing and machine learning.
                        </ProjectGridItem>
                    </Section>
                    <Section>
                        <ProjectGridItem
                            id="snakemachinelearning"
                            title="Snake Machine Learning"
                            thumbnail={thumbSnakeML}
                        >
                            A reinforcement learning program where a snake&apos;s neural network learns to eat apples.
                        </ProjectGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Projects