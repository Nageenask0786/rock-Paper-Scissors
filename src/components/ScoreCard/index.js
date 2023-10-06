import {Component} from 'react'

import {
  Choices,
  ScoreDetails,
  Heading,
  ScoreDetailsContainer,
  ChoicesContainer,
  Paragraph,
} from './styledComponents'

class ScoreCard extends Component {
  render() {
    const {score} = this.props
    return (
      <ScoreDetailsContainer>
        <ChoicesContainer>
          <Choices>ROCK</Choices>
          <Choices>PAPER</Choices>
          <Choices>SCISSOR</Choices>
        </ChoicesContainer>
        <ScoreDetails>
          <Heading>Score</Heading>
          <Paragraph>{score}</Paragraph>
        </ScoreDetails>
      </ScoreDetailsContainer>
    )
  }
}

export default ScoreCard
