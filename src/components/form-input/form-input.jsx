import React from 'react';
import './form-input.scss';


const FormInput=({handlechange,label, ...otherProps}) => (
<div className="group">
    <input onChange={handlechange} {...otherProps}className="form-input" />
    {
        label ?
        (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
         {label}
        </label>)
        :null
    }
</div>

);
 
export default FormInput;