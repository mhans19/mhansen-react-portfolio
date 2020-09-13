import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers'

function ContactForm() {

    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;



    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            //isValid conditonal statement
            if (!isValid) {
                setErrorMessage('Your email is invalid')
            } else {
                setErrorMessage('')
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('')
            }
        }
        //if no error message, update the state with the user input
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    }

    return (
    <section id = "contact">
        <h1 className = "header">Contact</h1>
        <form id="contact-form" className = "signup-form p-4" onSubmit={handleSubmit}>
            <h2 class = "text-center font-weight-bold">Contact Me</h2>
            <div className = "form-group row">
                <label htmlFor="name" className = "col-sm-2 col-form-label font-weight-bold"><img src="https://img.icons8.com/pastel-glyph/36/000000/person-male.png"/>Name:</label>
                <div class="col-sm-10">
                    <input type="text" className="form-control" name="name" defaultValue={name} onBlur={handleChange}/>
                </div>
            </div>
            <div className = "form-group row">
                <label htmlFor="email" className="col-sm-2 col-form-label font-weight-bold"><img src="https://img.icons8.com/ios/32/000000/email-open.png"/> Email:</label>
                <div class="col-sm-10">
                    <input type="email" className="form-control" name="email" defaultValue={email} onBlur={handleChange}/>
                </div>
            </div>
            <div className = "form-group row">
                <label htmlFor="message" className="col-sm-2 col-form-label font-weight-bold"><img src="https://img.icons8.com/ios/36/000000/hand-with-pen.png"/> Message:</label>
                <div class="col-sm-10">
                    <textarea name="message" className="form-control" rows="5" defaultValue={message} onBlur={handleChange}/>
                </div>
            </div>
            {errorMessage && (
                <div>
                    <p className="error-test">{errorMessage}</p>
                </div>
            )}
            <div class="form-group row">
                <div class="col-sm-12">
                <button data-testid="buttontag" type="submit" class="btn btn-secondary btn-block font-weight-bold"><img src="https://img.icons8.com/dotty/32/FFFFFF/submit-for-approval.png"/> Submit</button>
                </div>
            </div>
        </form>
    </section>
    )
}

export default ContactForm;