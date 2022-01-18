import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbAzureAI from '../public/images/certs/azure-ai-fundamentals-600x600.png'
import thumbDataScientist from '../public/images/certs/azure-data-scientist-associate-600x600.png'
import thumbQiskitDev from '../public/images/certs/IBM_Certified_Associate_Developer_-_Quantum_Computation_using_Qiskit_v0.2X.png'
import thumbAfricaChall from '../public/images/certs/IBM_Quantum_Challenge_Africa_2021_Achievement_Advanced.png'
import thumbFallChall from '../public/images/certs/IBM_Quantum_Challenge_Fall_2021_Achievement_-_Advanced.png'
import thumbMTAPython from '../public/images/certs/MTA-Introduction-to-Programming-using-Python-2019.png'
import thumbMTASecurity from '../public/images/certs/MTA-Security-Fundamentals-2019.png'

const Certifications = () => (
    <Layout title="Certifications">
        <Section delay={0.1}>
            <SimpleGrid columns={[1, 2, 2]} gap={6}>
                <GridItem
                    title="IBM Certified Associate Developer - Quantum Computation using Qiskit v0.2X"
                    thumbnail={thumbQiskitDev}
                    href="https://www.credly.com/badges/e630aa98-80a9-4b4e-b768-8d4fb4bb8efd"
                />
                <GridItem
                    title="Microsoft Certified: Azure Data Scientist Associate"
                    thumbnail={thumbDataScientist}
                    href="https://www.credly.com/badges/e1f2a9fa-e5ff-49ee-b40a-6d0dd76a4571"
                />
            </SimpleGrid>
        </Section>

        <Section delay={0.3}>
            <SimpleGrid columns={[1, 2, 2]} gap={6}>
                <GridItem
                    title="Microsoft Certified: Azure AI Fundamentals"
                    thumbnail={thumbAzureAI}
                    href="https://www.credly.com/badges/e52ec58d-5e95-4255-874c-ab507a4e8163"
                />
                <GridItem
                    title="MTA: Security Fundamentals"
                    thumbnail={thumbMTASecurity}
                    href="https://www.credly.com/badges/815bdcc4-fb60-4e0b-88d4-4c8730fbc8c9"
                />
            </SimpleGrid>
        </Section>
        <Section delay={0.5}>
            <SimpleGrid columns={[1, 2, 2]} gap={6}>
                <GridItem
                    title="MTA: Introduction to Programming using Pytohn"
                    thumbnail={thumbMTAPython}
                    href="https://michaelkougang.tech/images/MTA-Introduction-to-Programming-using-Python-2019.png"
                />
                <GridItem
                    title="IBM Quantum Challenge - Fall 2021"
                    thumbnail={thumbFallChall}
                    href="https://www.credly.com/badges/e6c62d55-68bf-47a0-877c-e36ce0d3c98e"
                />
            </SimpleGrid>
        </Section>
        <Section delay={0.7}>
            <SimpleGrid columns={[1, 2, 2]} gap={6}>
                <GridItem
                    title="IBM Quantum Challenge - Africa 2021"
                    thumbnail={thumbAfricaChall}
                    href="https://www.credly.com/badges/669667c3-0720-48ff-8a6a-d349d750980d"
                />
            </SimpleGrid>
        </Section>
    </Layout>
)

export default Certifications