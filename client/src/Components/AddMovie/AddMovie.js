import React, {useState} from 'react';
import Modal from 'react-modal';   /*npm i react-modal*/
import './AddMovie.css';

           // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const AddMovie = ({addMovie}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  
  const [image, setImage] = useState('');/*preferably all things declared as ones in hooks*/
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');

  const openModal=()=> { setIsOpen(true); }
  const closeModal=()=> { setIsOpen(false); }

  const handleSubmit = () => {
    let newMovie = {image, rating, name, date, type, description}
    addMovie(newMovie);
    setIsOpen(false);
    setImage(''); setRating(0); setName('');  setDate(''); setType(''); setDescription('');
  }

  return (
    <div>
      <div className='Add-btn-container'> 
        <button className='Add-btn'  onClick={openModal}> + </button>
        <Modal
          className='add-modal'
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
          <h2 className='addMovie-h2'>Add a movie</h2>
          <form>
            <label>Movie Name</label>
            <input type='text' name='name' required
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
            <label>Movie Rate</label>
            <div className='rating-search'></div>
            <input type='number' name='rating' required min="1" max="5"
              value={rating}
              onChange={(e)=>setRating(e.target.value)}
            />
            <label>Movie Realease Date</label>
            <input type='number' name='date' required
              value={date}
              onChange={(e)=>setDate(e.target.value)}
             />
            <label>Movie Image</label>
            <input type='url' name='image' required
              value={image}
              onChange={(e)=>setImage(e.target.value)}
             />
            <label>Movie Type</label>
            <input type='text' name='type' required
              value={type}
              onChange={(e)=>setType(e.target.value)}
             />
             <div style ={{display:'flex'}}>            
                <label>Movie Summary</label>
                <textarea type='text' name='description' required
                 value={description}
                 onChange={(e)=>setDescription(e.target.value)}
                />
             </div>
          </form>
          <button className='Modal-btn' onClick={handleSubmit}>
            Submit
          </button>
          <button className='Modal-btn' onClick={closeModal} >
            Close
          </button>
       </Modal>
      </div>
    </div>
  );
}

export default AddMovie;