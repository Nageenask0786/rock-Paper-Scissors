import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'

import {
  RulesContainer,
  RulesButton,
  RulesImageContainer,
  PopupImage,
  Button,
} from './styledComponents'

const Rules = () => (
  <RulesContainer>
    <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
      {close => (
        <>
          <Button onClick={() => close()}>
            <RiCloseLine />
          </Button>
          <RulesImageContainer>
            <PopupImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </RulesImageContainer>
        </>
      )}
    </Popup>
  </RulesContainer>
)

export default Rules
