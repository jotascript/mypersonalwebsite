import PropTypes from 'prop-types'

import { Head } from '../infra/components'

import { DocumentGetMarkdownDocByName, markdownToHtml } from '../lib'

import { GithubService } from '../services'

import { Container, MarkdownToHtml, MdFlex } from '../styles'
import { Header, Skills } from '../components'

const Home = ({ githubInfos, employmentHistory, education }) => {
  return (
    <Container>
      <Head title="Home" />
      <Header githubInfos={githubInfos}/>
      <MdFlex row>
        <Skills />
        <Container responsiveMarginLeft="16">
          <header><strong>Curriculum Vitæ</strong></header>
          <MarkdownToHtml background dangerouslySetInnerHTML={{ __html: employmentHistory.content }} />
          <MarkdownToHtml background dangerouslySetInnerHTML={{ __html: education.content }} />
        </Container>
      </MdFlex>
    </Container>
  )
}

Home.propTypes = {
  githubInfos: PropTypes.object.isRequired,
  employmentHistory: PropTypes.object.isRequired,
  education: PropTypes.object.isRequired
}

export async function getStaticProps() {
  const githubInfos = await GithubService.myInfos()

  const employmentHistory = DocumentGetMarkdownDocByName('employment-history')
  employmentHistory.content = await markdownToHtml(employmentHistory.content || '')

  const education = DocumentGetMarkdownDocByName('education')
  education.content = await markdownToHtml(education.content || '')

  return {
    props: {
      githubInfos,
      employmentHistory,
      education
    }
  }
}

export default Home
