
import React from 'react'  
import signInSVG from '../../assets/signInSVG.svg'
import SignInForm from './components/SignInForm';
import { Container,LeftCol, LogoContainer,FormContainer,RightCol,ImageContainer } from './LoginStyles';
// import loginVector from '@assets/images/loginVector.png'

// import withAuth from '@containers/Auth/withAuth'

export const Login = () => {

    return (
      <>
        <Container>
          <LeftCol span={10} >
         
          <LogoContainer justify='flex-start' ><p style={{color:'#25CA69'}}>Link</p><p>Box</p></LogoContainer>
              <FormContainer>
              <SignInForm />
            </FormContainer>
          </LeftCol >
          <RightCol span={14}>
            <ImageContainer>
            <img src={signInSVG} width="720px" height="720px" alt=""  />
              </ImageContainer>
          </RightCol>
        </Container>
      </>
    )
}

// const mapStateToProps = (state) => ({
 
// })

// const mapDispatchToProps = (dispatch) => {

// }

export default (Login)
