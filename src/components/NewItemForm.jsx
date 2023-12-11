import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';

function NewItemForm(props) {

    function handleNewItemFormSubmission(e) {
        e.preventDefault();
        props.onNewItemCreation({
            name: e.target.name.value,
            description: e.target.description.value,
            origin: e.target.origin.value,
            price: e.target.price.value,
            roast: e.target.roast.value,
            qty: parseInt(e.target.qty.value),
            id: v4(),
        });
    }
    return (
        <>
            <ReusableForm
                pageTitle="for adding a coffee type for sale"
                formSubmissionHandler={handleNewItemFormSubmission}
                buttonText="Create new coffee" />
        </>
    );
}
NewItemForm.propTypes = {
    onNewItemCreation: PropTypes.func
};

export default NewItemForm;