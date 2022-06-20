import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/appbar/Navbar'
import HeroSection from '../components/hero/HeroSection'
import ProjectSection from '../components/hero/ProjectSection'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <ProjectSection />
        </div>
    )
}

export default Home
