import PropTypes from 'prop-types'
import { Toaster } from 'react-hot-toast';

const Card = ({card,handleAddToCard}) => {
    const {name,image,originalPrice,discountPrice,rating} = card;
    return (
        <div className='w-8/12 '>
           
           <div className='w-[300px] p-4 rounded-2xl bg-slate-300 shadow-2xl'>
             <img className='w-full h-72 rounded-2xl ' src={image} alt="" />
             <h1 className='text-xl py-4'>{name}</h1>
             <p className='text-xl'> <span>{originalPrice} Tk</span> <span>{discountPrice} TK</span></p>
             <p className="text-xl">{rating}</p>
             <button onClick={()=> handleAddToCard(card)} className="text-xl py-2 px-4 bg-green-200 rounded-2xl my-4"> Add To Card</button>
             <Toaster />
           </div>

        </div>
    );
};

Card.propTypes ={
    card:PropTypes.object,
    handleAddToCard:PropTypes.func,
}

export default Card;