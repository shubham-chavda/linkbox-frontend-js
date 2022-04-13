import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Form, Input, Checkbox, Button, Row, Col, Divider } from 'antd'
import { GoogleOutlined} from "@ant-design/icons"
import './registerForm.css'
import facebookLogo from '../../assets/facebookIcon.svg'
import linkedInLogo from '../../assets/linkedInIcon.png'
const SignInForm = (props) => {
  const { signUpFunc } = props
  const [form] = Form.useForm()

  return (
    <div className="signUpContainer">
      <div className="signUpWithGoogle">
        <div className="signUpText">
          <div style={{fontSize: '35px',fontWeight: 'bold'}}>Let's sign In</div>
          <p>Don't have account? <a>sign up</a></p>
        </div>
      </div>

      <Form
        layout='vertical'
        form={form}
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
          className="formItem"
        >
          <Input className="textFields" placeholder="name@company.com" />
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
            <Input.Password
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
          <button
            className="signUpButton"
            htmltype="submit"
          >
            Sign In
          </button>
        </Form.Item>
      </Form>
      <Divider style={{fontSize: '12px',color: 'gray'}}>OR</Divider>
      <Row >
        <Col span={15}  className="signUpWithGoogleButton">
          <GoogleOutlined style={{fontSize: '25px', marginRight:'10px'}}/>
          Sign in with Google
          </Col>
        <Col span={3} className="signUpWithGoogleButton">
          <img  src={facebookLogo} width="25px" height="25px"  alt="Facebook"/></Col>
        <Col span={3} className="signUpWithGoogleButton">
          <img  src={linkedInLogo} width="22px" height="22px"  alt="linkedIn"/></Col>
      </Row>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)
