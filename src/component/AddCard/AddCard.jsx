import PropTypes from 'prop-types'

const AddCard = ({card}) => {
    
    
    return (
        <div className='flex justify-between shadow p-8 rounded-xl my-6'>
                <h1 className="font-bold">{card.name}</h1>
                <p className="font-bold">{card.discountPrice} TK</p>
           </div>
    );
};

AddCard.propTypes = {
    card:PropTypes.object,
}

export default AddCard;