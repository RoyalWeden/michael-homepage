import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbMultiQubitCircuits from '../public/images/contents/multi-qubitcircuits.png'
import thumbTwoApplicationsOfQuantumComputing from '../public/images/contents/twoapplicationsofquantumcomputing.jpeg'
import thumbQuantumReversibilityAndPhase from '../public/images/contents/quantumreversibilityandphase.jpg'
import thumbEavesdroppingQuantumKeyDistribution from '../public/images/contents/eavesdroppingquantumkeydistribution.jpeg'
import thumbQuantumKeyDistributionForCybersecurity from '../public/images/contents/quantumkeydistributionforcybersecurity.jpeg'
import thumbQubitsInQuantumComputers from '../public/images/contents/qubitsinquantumcomputers.jpeg'
import thumbMathematicsForQuantumMeasurement from '../public/images/contents/mathematicsforquantummeasurement.jpeg'
import thumbMathematicsForQuantumGates from '../public/images/contents/mathematicsforquantumgates.jpeg'
import thumbMathematicsForQubits from '../public/images/contents/mathematicsforqubits.jpeg'
import thumbMeasuringQubitsAndTheZGate from '../public/images/contents/measuringqubitsandthezgate.jpg'
import thumbRepresentingStatesForQuantumComputing from '../public/images/contents/representingstatesforquantumcomputing.jpg'
import thumbWhatAreQuantumObjects from '../public/images/contents/whatarequantumobjects.jpeg'
import thumbWhatMakesUpTheQuantumWorld from '../public/images/contents/whatmakesupthequantumworld.jpg'
import thumbQuantumAndClassicalStacks from '../public/images/contents/quantumandclassicalstacks.jpeg'

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Popular Posts
            </Heading>
            
            <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="Multi-Qubit Circuits"
                        thumbnail={thumbMultiQubitCircuits}
                        href="https://medium.com/@michael.kougang/multi-qubit-circuits-e24c971cb76b"
                    />
                    <GridItem
                        title="Two Applications of Quantum Computing"
                        thumbnail={thumbTwoApplicationsOfQuantumComputing}
                        href="https://medium.com/@michael.kougang/two-applications-of-quantum-computing-d21a8d4898a1"
                    />
                </SimpleGrid>
            </Section>

            <Section delay={0.3}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="Quantum Reversibility and Phase"
                        thumbnail={thumbQuantumReversibilityAndPhase}
                        href="https://medium.com/@michael.kougang/quantum-reversibility-and-phase-a9a0da144c94"
                    />
                    <GridItem
                        title="Eavesdropping Quantum Key Distribution"
                        thumbnail={thumbEavesdroppingQuantumKeyDistribution}
                        href="https://systemweakness.com/eavesdropping-quantum-key-distribution-ce82f8468e17"
                    />
                </SimpleGrid>
            </Section>

            <Section delay={0.5}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="Quantum Key Distribution for Cybersecurity"
                        thumbnail={thumbQuantumKeyDistributionForCybersecurity}
                        href="https://medium.com/@michael.kougang/quantum-key-distribution-for-cybersecurity-19b8da07fc23"
                    />
                    <GridItem
                        title="Qubits in Quantum Computers"
                        thumbnail={thumbQubitsInQuantumComputers}
                        href="https://medium.com/@michael.kougang/qubits-in-quantum-computers-25d210f445f6"
                    />
                </SimpleGrid>
            </Section>

            <Section delay={0.7}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="Mathematics for Quantum Measurement"
                        thumbnail={thumbMathematicsForQuantumMeasurement}
                        href="https://medium.com/@michael.kougang/mathematics-for-quantum-measurement-49ce703d521f"
                    />
                    <GridItem
                        title="Mathematics for Quantum Gates"
                        thumbnail={thumbMathematicsForQuantumGates}
                        href="https://medium.com/@michael.kougang/mathematics-for-quantum-gates-5c460b2b075f"
                    />
                </SimpleGrid>
            </Section>

            <Section delay={0.9}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="Mathematics for Qubits"
                        thumbnail={thumbMathematicsForQubits}
                        href="https://medium.com/@michael.kougang/mathematics-for-qubits-f77d3b34c82a"
                    />
                    <GridItem
                        title="Measuring Qubits and the Z Gate"
                        thumbnail={thumbMeasuringQubitsAndTheZGate}
                        href="https://medium.com/@michael.kougang/measuring-qubits-and-the-z-gate-85e25b58d6e"
                    />
                </SimpleGrid>
            </Section>

            <Section delay={1.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="Representing States for Quantum Computing"
                        thumbnail={thumbRepresentingStatesForQuantumComputing}
                        href="https://medium.com/@michael.kougang/representing-states-for-quantum-computing-79d116fc0823"
                    />
                    <GridItem
                        title="What are Quantum Objects"
                        thumbnail={thumbWhatAreQuantumObjects}
                        href="https://medium.com/@michael.kougang/what-are-quantum-objects-c0f6f27e18b2"
                    />
                </SimpleGrid>
            </Section>

            <Section delay={1.3}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="What Makes Up The Quantum World"
                        thumbnail={thumbWhatMakesUpTheQuantumWorld}
                        href="https://medium.com/@michael.kougang/what-makes-up-the-quantum-world-ef66fefd68f2"
                    />
                    <GridItem
                        title="Quantum and Classical Stacks"
                        thumbnail={thumbQuantumAndClassicalStacks}
                        href="https://medium.com/@michael.kougang/quantum-and-classical-stacks-a98f7008813a"
                    />
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts