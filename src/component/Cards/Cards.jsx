import { useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types'
import AddCard from "../AddCard/AddCard";
// eslint-disable-next-line no-unused-vars
import toast, { Toaster } from 'react-hot-toast';


const Cards = ({books}) => {

    const [addCard,setAddCard] =useState([])

    const handleAddToCard =(card) =>{

       const alreadyExist = addCard.find(b => b.id == card.id)
       
       if(!alreadyExist){
        setAddCard([...addCard,card])
        toast.success('Add this Card')
        
       }
       else{
        toast.error("This Card is alreay exist")
       }
        
       
       
    }
    
    
    return (
        <div className='flex justify-between mt-20'>
        
        <div className="w-8/12 grid grid-cols-3 gap-6">
            {
                books.map(card => <Card 
                    handleAddToCard={handleAddToCard}
                    key={card.id}
                    card ={card}></Card>)
            }
        </div>


        <div className='w-[20%] text-center'>
          <h1 className="text-3xl font-bold py-8">Total Card </h1>
          <div className='flex justify-between mb-4'>
                <h1 className="font-bold text-2xl">Name</h1>
                <p className="font-bold text-2xl">Price</p>
           </div>
            {
                addCard.map((card,idx) => <AddCard key={idx} card = {card}></AddCard>)
            }
        </div>

    </div>
    );
};

Cards.propTypes = {
    books:PropTypes.array
}

export default Cards;