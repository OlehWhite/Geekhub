import React, {useState} from 'react';

import { Form } from '../Form';
import { FormField } from '../FormField';
import { FormSubmit } from "../FormSubmit";

import './style.css'

export const EditUserProfile = () => {
    const [isGroupAccount, setIsGroupAccount] = useState(true);
    const [submit, setSubmit] = useState(false);

    const onSubmit = async (values) => {
        setSubmit(true);
        await new Promise(resolve => setTimeout(resolve,2000));
        console.log(values);
        setSubmit(false);
    };

    return (
        <>
            <Form onSubmit={onSubmit}>
                <fieldset style={{ maxWidth: '400px', margin: '0 auto', borderRadius: '10px'}}>
                <legend style={{ fontSize: '25px' }}>Global Form</legend>
                    <label className="switch">
                        <input type="checkbox" checked={isGroupAccount} onChange={() => setIsGroupAccount(!isGroupAccount)}/>
                        <span className="slider round"></span>
                    </label>
                    {isGroupAccount ? (
                        <FormField
                            required
                            type="name"
                            name="firstName"
                            label="Title"
                            placeholder="Title"
                        />
                    ) : (
                        <>
                            <FormField
                               required
                               type="name"
                               name="firstName"
                               label="First Name"
                               placeholder="John"
                            />
                            <FormField
                               required
                               type="name"
                               name="lastName"
                               label="Last Name"
                               placeholder="Smite"
                            />
                        </>
                    )}
                    <FormField
                        required
                        type="email"
                        name="email"
                        label="Email"
                        placeholder="Type here..."
                    />
                    <FormField
                        required
                        type="phone"
                        name="phone"
                        label="Phone"
                        placeholder="Type here..."
                    />
                    <FormField
                        required
                        type="select"
                        name="gender"
                        label="Gender"
                        options={[
                            { value: '', label: 'Please choose...' },
                            { value: 'male', label: 'Male' },
                            { value: 'female', label: 'Female' },
                            { value: 'other', label: 'Unspecified or Nonbinary' }
                        ]}
                    />
                    <FormField
                        required
                        type="radio"
                        name="prefer"
                        label="What do you prefer?"
                        defaultChecked="cola" // Повиненне бути обране за замовчуванням
                        options={[
                            { value: 'pepsi', label: 'Pepsi' },
                            { value: 'cola', label: 'Cola' }
                        ]}
                    />
                    <FormField
                        required
                        type="checkboxes"
                        name="race"
                        label="Select your race"
                        options={[
                            { value: 'unspecified', label: 'Not Reported' },
                            { value: 'preferUnspecified', label: 'Prefer not to answer' },
                            { value: 'AMERICAN_INDIAN_OR_ALASKA_NATIVE', label: 'American Indian or Alaska Native' },
                            { value: 'ASIAN', label: 'Asian' },
                            { value: 'BLACK_OR_AFRICAN_AMERICAN', label: 'Black or African American' },
                            { value: 'NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER', label: 'Native Hawaiian or Other Pacific Islander' },
                            { value: 'WHITE', label: 'White' }
                        ]}
                    />
                    <FormField
                        required
                        name="consent"
                        type="checkbox"
                        label={(
                            <>
                                By checking this box, I agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
                            </>
                        )}
                    />
                    <FormSubmit
                        submit={submit}
                    />
                </fieldset>
            </Form>
        </>
    );
};

export const FormLogin = () => {
    const [submit, setSubmit] = useState(false);

    const onSubmit = async (values) => {
        setSubmit(true);
        await new Promise(resolve => setTimeout(resolve,2000));
        console.log(values);
        setSubmit(false);
    };

    return (
        <Form onSubmit={onSubmit}>
            <fieldset style={{maxWidth: '400px', margin: '0 auto', borderRadius: '10px'}}>
                <legend style={{fontSize: '25px'}}>Password Form</legend>
                <FormField
                    required
                    component="input"
                    type="password"
                    name="password"
                    label="Password"
                    placeholder='Password'
                />
                <FormField
                    required
                    component="input"
                    type="confirmPassword"
                    name="confirmPassword"
                    label="Confirm Password"
                    placeholder='Confirm Password'
                />
                <FormSubmit
                    submit={submit}
                />
            </fieldset>
        </Form>
    );
};
