import './pages.css';
import Title from './Title';
import { useState, useEffect } from 'react';

 const Homepage = () => {

  const [action, setAction] = useState('go-store')
  const [image,setImage] = useState('')
  console.log(action)

  const handleChange = (e) => {
    setAction(e.target.value)
  }

  useEffect(() => {
    setImage(selectImage());
  }, [action]);
  

  const selectImage = () => {
    switch (action) {
      case 'go-store':
        return 'https://www.superkidsnutrition.com/wp-content/uploads/2020/12/Grocery-store-shopping-kids-300x300.jpg';
  
      case 'eat-fries':
        return 'https://hips.hearstapps.com/hmg-prod/images/mcdonalds-fries-are-offered-at-mcdonalds-at-made-in-america-news-photo-1026311378-1538173668.jpg';
  
      case 'take-walk':
        return 'https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/rayeohnvzgguz3qk1bgq.jpg';
      default:
        return ''; // Return a default image if no match is found
    }
  };

  return (
    <div className="App">
      <header className="App-header">
       <Title title='My super amazing App' />
       <div>
        <h3>choose an adventure</h3>
        <select
        onChange={handleChange}
        value={action}
        >
          <option style={{color:'black'}}
          value='go-store'>go to the store</option>
          <option style={{color:'black'}}
          value='eat-fries'>eat french fries</option>
          <option style={{color:'black'}}
          value='take-walk'>take a walk</option>
        </select>
        <div>
          <img src={image} />
        </div>
       </div>
      </header>
    </div>
  );
}

export default Homepage;
