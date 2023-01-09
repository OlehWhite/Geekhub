import React, {useEffect, useState} from 'react';

import { Form } from './Form';
import { FormField } from './FormField';

// {/*export const EditUserProfile = () => {*/}
// //     const [isGroupAccount, setIsGroupAccount] = useState(false);
// //
// //     const onSubmit = (values) => {
// //         console.log('values', values);
// //         // Save to API or do somethings
// {/*    };*/}
// {/*    console.log(222)*/}
// {/*    return (*/}
// {/*        <>*/}
// {/*            /!**/}
// {/*        Тут зробити чекбокс який буде переключати `setIsGroupAccount`*/}
// {/*      *!/*/}
// {/*            <Form onSubmit={onSubmit}>*/}
// {/*                {isGroupAccount ? (*/}
// {/*                    <FormField*/}
// {/*                        required*/}
// {/*                        type="text"*/}
// {/*                        name="title"*/}
// {/*                        label="Title"*/}
// {/*                    />*/}
// {/*                ) : (*/}
// {/*                    <>*/}
// {/*                        <FormField*/}
// {/*                            required*/}
// //                             type="name"
// //                             name="firstName"
// //                             label="First Name"
// //                             placeholder="John"
// //                         />
// //                         <FormField
// {/*                            required*/}
// //                             type="name"
// //                             name="lastName"
// //                             label="Last Name"
// //                             placeholder="Smite"
// //                         />
// //                     </>
// //                 )}
// //                 <FormField
// //                     required
// //                     type="email"
// //                     name="email"
// //                     label="Email"
// //                     placeholder="Type here..."
// //                 />
// //                 <FormField
// //                     required
// //                     type="phone"
// //                     name="phone"
// //                     label="Phone"
// //                     placeholder="Type here..."
// //                 />
// //                 <FormField
// //                     required
// //                     type="select"
// //                     name="gender"
// //                     label="Gender"
// //                     options={[
// //                         { value: 'male', label: 'Male' },
// //                         { value: 'female', label: 'Female' },
// //                         { value: 'other', label: 'Unspecified or Nonbinary' }
// //                     ]}
// //                 />
// //                 <FormField
// //                     required
// //                     type="radio"
// //                     name="prefer"
// //                     label="What do you prefer?"
// //                     defaultChecked="cola" // Повиненне бути обране за замовчуванням
// //                     options={[
// //                         { value: 'pepsi', label: 'Pepsi' },
// //                         { value: 'cola', label: 'Cola' }
// //                     ]}
// //                 />
// //                 <FormField
// //                     required
// //                     type="checkboxes"
// //                     name="race"
// //                     options={[
// //                         { value: 'unspecified', label: 'Not Reported' },
// //                         { value: 'preferUnspecified', label: 'Prefer not to answer' },
// //                         { value: 'AMERICAN_INDIAN_OR_ALASKA_NATIVE', label: 'American Indian or Alaska Native' },
// //                         { value: 'ASIAN', label: 'Asian' },
// //                         { value: 'BLACK_OR_AFRICAN_AMERICAN', label: 'Black or African American' },
// //                         { value: 'NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER', label: 'Native Hawaiian or Other Pacific Islander' },
// //                         { value: 'WHITE', label: 'White' }
// //                     ]}
// //                 />
// //                 <FormField
// //                     required
// //                     name="consent"
// //                     type="checkbox"
// //                     label={(
// //                         <>
// //                             By checking this box, I agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
// //                         </>
// //                     )}
// //                 />
// //             </Form>
// //         </>
// //     );
// // };

export const FormLogin = () => {
    const [valuePassword, setValuePassword] = useState('')
    const [valueConfirmPassword, setConfirmPassword] = useState('')

    const passwordHandler = (valuePassword) => {
        setValuePassword(valuePassword)
    }

    const confirmPasswordHandler = (valueConfirmPassword) => {
        setConfirmPassword(valueConfirmPassword)
    }

    const onSubmit = async (values) => {
        if (valuePassword === valueConfirmPassword &&
            /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}/.test(valuePassword)
            &&
            /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}/.test(valueConfirmPassword)) {
            await new Promise(resolve => setTimeout(resolve,2000))
            console.log('values', values);
        } else {
            return false
        }
    };

    return (
        <Form onSubmit={onSubmit}>
            {({ isSubmitting}) => (
                <fieldset style={{ maxWidth: '250px', margin: '0 auto', borderRadius: '10px'}}>
                    <legend style={{ fontSize: '25px' }}>Password Form</legend>
                    <FormField
                        required
                        component="input"
                        type="password"
                        name="password"
                        label="Password"
                        placeholder='Password'
                        onChange={passwordHandler}
                    />
                    <FormField
                        required
                        component="input"
                        type="confirmPassword"
                        name="confirmPassword"
                        label="ConfirmPassword"
                        placeholder='Confirm Password'
                        valuePassword={valuePassword}
                        onChange={confirmPasswordHandler}
                    />
                    <button
                        type="submit"
                        disabled={ isSubmitting }
                    >Submit</button>
                </fieldset>
            )}
        </Form>
    );
};
