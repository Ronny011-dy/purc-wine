import { forwardRef } from 'react';

import './form-input.styles.scss';

const FormInput = forwardRef(({ label, ...otherProps }, ref) => (
  <div className="group">
    <label className="form-input-label">{label}</label>
    <input className="form-input" {...otherProps} ref={ref} />
  </div>
));

export default FormInput;
