import React from 'react';
import './form-input.styles.scss';

function FormInput({handleChange,label,...otherProps}) {
    return (
        <div className='group' >
            <input 
                className='form-input'
                type="text"
                {...otherProps}
                onChange={handleChange}
            />
            {
                label ? <label className={`${otherProps.value.length? 'shrink':''} form-input-label`} htmlFor={otherProps.id}> {label} </label>:null
            }
        </div>
    )
}

export default FormInput
