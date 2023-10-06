import {Component} from 'react'
import ScoreCard from '../ScoreCard'
import {Container, Image, Button, Para} from './styledComponents'

class PlayingView extends Component {
  render() {
    const {status, newArray, restartGame, score} = this.props
    return (
      <Container>
        <h1>Rock Paper Scissors</h1>
        <ScoreCard score={score} />
        <div>
          <Image src={newArray[0].imageUrl} alt="your choice" />
          <Image src={newArray[1].imageUrl} alt="opponent choice" />
        </div>
        <Para>{status}</Para>
        <Button type="button" onClick={restartGame}>
          PLAY AGAIN
        </Button>
      </Container>
    )
  }
}

export default PlayingView
