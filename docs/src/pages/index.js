import React from "react"
import { Link } from "gatsby"

import styled from '@emotion/styled';
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>Start with these resources ...</h3>
    <DocsCards>
      <DocsCard>
        <DocsCardTitle>Getting started</DocsCardTitle>
        <DocsCardSubTitle>Get going in just small steps</DocsCardSubTitle>
        <DocsCardLink>Download</DocsCardLink>
        <DocsCardLink>Configuration</DocsCardLink>
      </DocsCard>
      
    </DocsCards>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

const DocsCards = styled.div({
  display: "grid"
});

const DocsCard = styled.div({

});

const DocsCardTitle = styled.h3({

});

const DocsCardLink = styled(Link)({

});

const DocsCardSubTitle = styled.h4({

});

export default IndexPage
