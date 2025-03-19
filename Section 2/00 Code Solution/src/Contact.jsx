import './pages.css';
import Title from './Title';

/*
create a new component which is a contact page and pass in the
title component changing the title props to welcome to the contact page
*/

 const Contact = () => {
  return (
    <div className="App">
      <header className="App-header">
       <Title title='Welcome to the contact page' />
      </header>
    </div>
  );
}

export default Contact;