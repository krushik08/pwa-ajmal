import React, { useEffect, useState } from 'react';
import { shape, string } from 'prop-types';
import { DEFAULT_LINKS } from './sampleData';
import jQuery from 'jquery';
import { useQuery, gql, useMutation } from "@apollo/client";

const newsletter = gql`
    mutation subscribeEmailToNewsletter($email: String!) {
        subscribeEmailToNewsletter(email: $email) {
        status
    }
}
`

const Newsletter = props => {
    const [inputField, setInputField] = useState({
        email: ''
    });

    const [ subscribeEmailToNewsletter, {data, error}] = useMutation(newsletter);

    const handleSubmit = () => {
        subscribeEmailToNewsletter({
            variables: inputField
        });
    }

    const handleKeyUp = (evt) => {
        setInputField({
            ...inputField, [evt.target.name]:evt.target.value
        })
    }

    if (error) {
        console.log("Error",error);
        //return <div>{error}</div>;
    }

    return (
        <div className="footerTop">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-12">
                        <h3>Newsletter and promotions</h3>
                        <p>Sign up to receive our latest news</p>
                        <div className="footerTop_form">
                            <form>
                                <div className="form-input-wrapper">
                                    <input className="form-control" name='email' type="email" onKeyUp={handleKeyUp} />
                                    <label>Email</label>
                                    <button className="btn" type='button' onClick={handleSubmit}><img src="/public/images/arrow-right-gray.svg" className="img-fluid" /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;

Newsletter.defaultProps = {
    links: DEFAULT_LINKS
};

Newsletter.propTypes = {
    classNames: shape({
        root: string
    })
};
