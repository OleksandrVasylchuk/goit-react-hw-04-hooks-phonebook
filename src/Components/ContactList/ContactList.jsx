import PropTypes from 'prop-types'
import { FiPhone } from 'react-icons/fi';
import { List, Item, Btn, TextContacts } from './ContactList.styled'

export default function ContactList({contacts, onDeleteContact}) {
    return (
        <List>
            {contacts.map(({ name, number, id }) =>
                
                <Item key={id}>
                    <TextContacts>
                    <FiPhone size="15" />
                    {name}: {number}
                    </TextContacts>
                    <Btn
                        type="button"
                        onClick={()=>onDeleteContact(id)}>
                        Delete
                    </Btn>
            </Item>
            )}

        </List>
    )
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

Btn.propTypes = {
  onClick: PropTypes.func.isRequired,
};