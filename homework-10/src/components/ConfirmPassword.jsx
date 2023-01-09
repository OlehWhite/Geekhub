import React, {useEffect, useState} from "react";
import { classNames } from "./css";
import "../styles/style.css"

export const ConfirmPassword = ({ onChange, valuePassword, className, ...rest }) => {
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState('The field cannot be empty');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (valuePassword === confirmPassword) {
            setConfirmPasswordError('✅')
        } else {
            setConfirmPasswordError('Passwords don\'t match')
        }
    })

    const confirmPasswordHandle = (e) => {
        onChange(e.target.value)
        setConfirmPassword(e.target.value)
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'confirmPassword':
                setConfirmPasswordDirty(true)
                break
        }
    }

    const Icon = showPassword ? Eye : EyeSlash;

    return (
        <div className={classNames(className, 'ConfirmPassword')}>
            <input
                {...rest}
                className="PasswordInput__input"
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onBlur={e => blurHandler(e)}
                onChange={e => confirmPasswordHandle(e)}
            />
            <button
                type="button"
                className="PasswordInput__toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle show Password"
            >
                <Icon className="ConfirmPassword__icon"/>
            </button>
            {(confirmPasswordError && confirmPasswordDirty) && <div style={{ color: 'red' }}>{confirmPasswordError}</div>}
        </div>
    )
}

const Eye = (props) => (
    <svg {...props} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_iconCarrier"> <g fill="#000000" fillRule="evenodd" clipRule="evenodd">
        <path
            d="M8 5a3 3 0 100 6 3 3 0 000-6zM6.5 8a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"></path> <path d="M8 2C5.422 2 3.43 3.32 2.112 4.65A10.948 10.948 0 00.596 6.564c-.173.28-.31.536-.407.75a3 3 0 00-.122.31C.04 7.705 0 7.846 0 8s.041.296.067.375a3 3 0 00.122.31c.097.215.234.471.407.751.346.56.854 1.246 1.516 1.914C3.43 12.68 5.422 14 8 14s4.57-1.32 5.888-2.65a10.952 10.952 0 001.516-1.914c.173-.28.31-.536.407-.75.048-.107.09-.212.122-.31.026-.08.067-.221.067-.376s-.041-.296-.067-.375a2.978 2.978 0 00-.122-.31 6.777 6.777 0 00-.407-.751 10.952 10.952 0 00-1.516-1.914C12.57 3.32 10.578 2 8 2zM1.556 7.933a2.314 2.314 0 00-.03.067l.03.067c.065.145.17.344.316.58a9.45 9.45 0 001.306 1.647C4.332 11.458 5.964 12.5 8 12.5s3.668-1.042 4.822-2.206a9.45 9.45 0 001.306-1.646A5.336 5.336 0 0014.473 8a5.335 5.335 0 00-.346-.648 9.452 9.452 0 00-1.305-1.646C11.668 4.542 10.036 3.5 8 3.5S4.332 4.542 3.178 5.706a9.45 9.45 0 00-1.306 1.646 5.316 5.316 0 00-.316.58z"></path> </g> </g>
    </svg>
)

const EyeSlash = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_iconCarrier">
        <path
            d="M2 2L22 22" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g>
    </svg>
)