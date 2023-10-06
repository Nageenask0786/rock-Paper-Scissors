import {ChoiceItems, ChoiceButton, ChoiceImage} from './styledComponents'

const ChoiceItem = props => {
  const {choiceItemDetails, getActiveButtonId, CliCK, getOutput} = props
  const {id, imageUrl} = choiceItemDetails
  const getTestId = () => {
    switch (id) {
      case 'ROCK':
        return 'rockButton'
      case 'SCISSORS':
        return 'scissorsButton'
      case 'PAPER':
        return 'paperButton'
      default:
        return ''
    }
  }
  const onClickOfButton = () => {
    getActiveButtonId(id)
    CliCK()
    getOutput(id)
  }
  return (
    <ChoiceItems>
      <ChoiceButton
        type="button"
        data-testid={getTestId()}
        onClick={onClickOfButton}
      >
        <ChoiceImage src={imageUrl} alt={id} />
      </ChoiceButton>
    </ChoiceItems>
  )
}

export default ChoiceItem
