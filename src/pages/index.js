import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  
  <Layout>
    <SEO title="Home" />
    <h1>Hi students and fellow teachers!</h1>
    <p>Welcome to my website. Here you will be able to learn math!</p>

    <Link to="/mcr3u/home"><h3>MCR3U - Grade 11 Functions</h3></Link>
    <Link to="/mcv4u/home"><h3> MCV4U - Grade 12 Calculus and Vectors </h3></Link>
    <Link to="/mdm4u/home"><h3>MDM4U - Grade 12 Data Management </h3></Link>
    <Link to="/mhf4u/home"><h3>MHF4U - Grade 12 Advanced Functions </h3></Link>


    
  </Layout> 
)

export default IndexPage


// TODO: Add links for each course