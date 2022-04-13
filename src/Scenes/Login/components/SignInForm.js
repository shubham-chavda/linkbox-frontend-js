import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Checkbox, Row, Col, Divider } from 'antd'
import { GoogleOutlined} from "@ant-design/icons"
import facebookLogo from '../../../assets/facebookIcon.svg'
import linkedInLogo from '../../../assets/linkedInIcon.png'
import { MainContainer,HeaderText,SubText, InputField,PasswordField, SignInButton, SignInOptions } from './SignInFormStyles'
const SignInForm = () => {

  return (
    <MainContainer>
        <div>
          <HeaderText>Let's sign In</HeaderText>
          <SubText>Don't have account? <a>sign up</a></SubText>
      </div>

      <Form
        layout='vertical'
        name="signin"
        // onFinish={onFinish}
        scrollToFirstError
        requiredMark={false}
      >

        <Form.Item
        label="E-mail / Login"
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <InputField placeholder="name@company.com" />
        </Form.Item>

          <Row style={{marginBottom:'5px'}}>
            <Col span={6}>  Password</Col>
            <Col span={10} offset={5} ><a>Forgot Your Password?</a></Col>
          </Row>
          
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            // hasFeedback
          >
            <PasswordField
              className="textFields"
              placeholder="*********"
            />
          </Form.Item>
       

        <Form.Item
          name="remember"
          valuePropName="checked">
          <Checkbox>
            Remember me
          </Checkbox>
        </Form.Item>
        <Form.Item
        // {...tailFormItemLayout}
        >
          <SignInButton htmltype="submit"> Sign In </SignInButton>
        </Form.Item>
      </Form>
      <Divider style={{fontSize: '12px',color: 'gray'}}>OR</Divider>
      <Row >
        <SignInOptions span={15} >
          <GoogleOutlined style={{fontSize: '25px', marginRight:'10px'}}/>
          Sign in with Google
          </SignInOptions>
        <SignInOptions span={3}>
          <img  src={facebookLogo} width="25px" height="25px"  alt="Facebook"/></SignInOptions>
        <SignInOptions span={3}>
          <img  src={linkedInLogo} width="22px" height="22px"  alt="linkedIn"/></SignInOptions>
      </Row>
    </MainContainer>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)
