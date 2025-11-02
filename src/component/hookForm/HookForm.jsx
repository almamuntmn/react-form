import useInputField from '../../hooks/useInputField';

const HookForm = () => {

    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit', name);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='name' defaultValue={name} onChange={nameOnChange} />
                <br />
                <input type="email" name="email" placeholder='email' defaultValue={email} onChange={emailOnChange} />
                <br />
                <input type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default HookForm;