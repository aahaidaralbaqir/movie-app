import React from 'react'
import Container from '../component/Container/'
import Banner from '../component/Banner/'
import Navbar from '../component/Navbar/'
import Menu from '../component/Menu/'
import Movie from '../component/Movie/'

const Home = () => {
  return  (
    <React.Fragment>
    <Container>
      <Navbar></Navbar>
      <Banner></Banner>
    </Container>
    <Menu />
    <Movie />
    </React.Fragment>
  )
}

export default Home