import React from 'react'

interface SignUpDialogProps { 
    onClose: () => void;
}
const SignUpDialog:React.FC<SignUpDialogProps> = ({onClose}) => {
  return (
    <div>SignUpDialog</div>
  )
}

export default SignUpDialog