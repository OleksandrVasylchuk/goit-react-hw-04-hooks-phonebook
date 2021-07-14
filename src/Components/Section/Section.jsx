import PropTypes from 'prop-types'
import {Container} from './Section.styled'

export default function Section({ children }) {
    return <Container>{ children}</Container>

}

Section.propTypes = {
    children: PropTypes.node.isRequired
}