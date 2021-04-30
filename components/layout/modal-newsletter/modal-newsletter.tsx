import React, { useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { EmailAddressIsValid } from 'helpers/validation';
import { SubscriptionTypes } from 'enums/SubscriptionTypes';
import { NewsletterSignup } from 'business-logic/systemService';

type Props = {
    onRequestClose: any,
    title: string,
}

const ModalContact:React.FC<Props> = ({ onRequestClose, title, ...otherProps }) => {
    const newsletterEmail = useRef() as React.MutableRefObject<HTMLInputElement>;
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [isValidated, setIsValidated] = useState<boolean>(false);
    const handleSignupClick = () => {     
        // @ts-ignore
        let emailAddress = newsletterEmail.current.value;
   
        setIsSubmitted(true);

        if(emailAddress && EmailAddressIsValid(emailAddress)) {
            NewsletterSignup(emailAddress, SubscriptionTypes.News)
                .then(result => {
                    if(result.status.message === "OK"){
                        setIsValidated(true);
                        newsletterEmail.current.value = "";
                    }               
                })
                .catch(error => {
                    console.log(error);
                }); 
        } else {
            setIsValidated(false);
        }
    }

    return (
        <>
            <Modal onHide={onRequestClose} centered={true} {...otherProps}>
                <Modal.Header className="d-flex flex-nowrap justify-content-center align-items-center" closeButton>
                    <Modal.Title className=" mb-0">{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="w-100 py-3 px-3 px-md-5">
                        {isSubmitted && isValidated ? <p className="text-mint mb-4">Thank you for signing up to our newsletter.</p> : <p className="mb-4">Want the latest news, advice and offers straight to your inbox?</p>}
                        <div className="row">
                            <div className="col-24 form-group">
                                <label className="control-label">Your Email</label>
                                <input type="text" ref={newsletterEmail} className={`form-control ${isSubmitted && !isValidated ? 'is-invalid' : ''}`} placeholder="Email Address*" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-24 d-flex align-items-center justify-content-end">
                                <button className="btn btn-primary btn-lg" onClick={() => handleSignupClick()}>Sign Me Up</button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalContact;