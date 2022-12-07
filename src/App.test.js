import { render, screen} from '@testing-library/react';
import ContactForm from './Components/Main/ContactForm/ContactForm';


describe('ContactForm', () => {
    test('renders ContactForm component', () => {
      render(<ContactForm />);

    //succeeds
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    screen.getByRole('textbox', { name: 'Name' });    
  
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    screen.getByRole('textbox', { name: 'Email' });

    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    screen.getByRole('textbox', { name: 'Message' });
   
    expect(screen.getByRole('button',  { name: 'Send' }));
  

    //fails
    expect(screen.getByRole('button',  { name: 'Save' }));
   
    screen.getByRole('textbox', { name: 'Variable' });

    screen.debug()

 
    })})


