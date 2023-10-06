import {Component} from 'react'

import {AppContainer, GameContainer} from './styledComponents'

import Rules from '../Rules'
import ChoiceItem from '../ChoiceItem'
import ScoreCard from '../ScoreCard'

import PlayingView from '../PlayingView'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissors extends Component {
  state = {
    newArray: [choicesList[0], choicesList[1]],
    isClicked: false,
    status: 'YOU WON',
    score: 0,
  }

  CliCK = () => {
    this.setState({isClicked: true})
  }

  getStatus = (you, opponent) => {
    if (you.id === 'ROCK') {
      switch (opponent.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (you.id === 'PAPER') {
      switch (opponent.id) {
        case 'SCISSORS':
          return 'YOU LOSE'
        case 'ROCK':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (opponent.id) {
        case 'PAPER':
          return 'YOU WON'
        case 'ROCK':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  getActiveButtonId = id => {
    this.setState({activeButtonId: id})
  }

  restartGame = () => {
    this.setState({isClicked: false})
  }

  getActiveIndex = () => {
    const {activeButtonId} = this.state
    const activeIndex = choicesList.findIndex(
      each => each.id === activeButtonId,
    )
    if (activeIndex >= 0) {
      return activeIndex
    }
    return null
  }

  getOutput = id => {
    const {score} = this.state

    const you = choicesList.filter(each => each.id === id)
    const yourDetails = you[0]

    const opponentIndex = Math.floor(Math.random() * choicesList.length)

    const opponentDetails = choicesList[opponentIndex]

    const Result = this.getStatus(yourDetails, opponentDetails)
    let newScore = score
    if (Result === 'YOU WON') {
      newScore = score + 1
    } else if (Result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      status: Result,
      score: newScore,
      newArray: [yourDetails, opponentDetails],
    })
  }

  renderGameResultsView = () => {
    const {status, score, newArray} = this.state
    return (
      <div>
        <PlayingView
          restartGame={this.restartGame}
          status={status}
          score={score}
          newArray={newArray}
        />
      </div>
    )
  }

  renderGameView = () => {
    const {score} = this.state
    return (
      <AppContainer>
        <h1>Rock Paper Scissors</h1>
        <ScoreCard score={score} />

        <GameContainer>
          {choicesList.map(each => (
            <ChoiceItem
              choiceItemDetails={each}
              key={each.id}
              CliCK={this.CliCK}
              getActiveButtonId={this.getActiveButtonId}
              getOutput={this.getOutput}
            />
          ))}
        </GameContainer>
        <Rules />
      </AppContainer>
    )
  }

  render() {
    const {isClicked, status} = this.state
    console.log(status)
    return (
      <div>
        {isClicked ? this.renderGameResultsView() : this.renderGameView()}
      </div>
    )
  }
}

export default RockPaperScissors
