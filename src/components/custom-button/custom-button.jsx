import React from 'react';
import { CustomButtonContainer } from './custom-buttons-styles';

const  CustomButton= ({children, ...props}) =>(
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;