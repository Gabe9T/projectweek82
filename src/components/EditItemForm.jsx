import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';

function EditItemForm(props) {
    const { coffee } = props;
    function handleEditItemSubmission(e) {
        e.preventDefault();
        props.onEditItem({
            description: e.target.description.value,
            price: e.target.price.value,
            qty: parseInt(e.target.qty.value),
            id: coffee.id
        });
    }
    return (
        <>
            <ReusableForm
                pageTitle="Edit your coffee roast"
                formSubmissionHandler={handleEditItemSubmission}
                buttonText="Update Your Coffee" />
        </>
    );
}
EditItemForm.propTypes = {
    coffee: PropTypes.object,
    onEditItem: PropTypes.func
};

export default EditItemForm;