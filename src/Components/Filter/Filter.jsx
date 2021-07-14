import PropTypes from 'prop-types'
import { VscSearch } from "react-icons/vsc";
import { InputFilter, LabelFilter } from './Filter.styled'

export default function Filter({value, onChange}) {
    return (
        <LabelFilter>
            <VscSearch></VscSearch>
            Find contacts by name
            <InputFilter
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Rosie Simpson"
            />
           
            
        </LabelFilter>
    )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};