import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/actions';




const ContactForm = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.contacts);

    const handleSubmit = evt => {
        const form = evt.target;
        const name = form.name.value;
        const number = form.number.value;

        evt.preventDefault();

        for (const contact of state) {
            if (contact.name === name)
                return alert(
                    `${name} is already in your contacts with the phone number ${contact.number}`
                );

            if (contact.number === number)
                return alert(
                    `${number} is already in your contacts with the name ${contact.name}`
                );
        }

        dispatch(addContact({ name, number }));
        form.reset();
    };

return (
    <form onSubmit={handleSubmit}
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }
        }>
        <h5 style={{
            marginTop: "10px",
            marginBottom: "10px",
            letterSpacing: "2px",
        }}>Name</h5>
        <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
        />
        <h5>Number</h5>
        <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
        />
        <button style={{
            marginTop: "10px",
            fontSize: "12px",
            padding: "10px",
            backgroundColor: "#f5f5f5",

        }} >Add contact</button>
    </form>


) 
};

export default ContactForm;