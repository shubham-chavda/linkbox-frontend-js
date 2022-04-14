import { Button, Col, Popover, Row } from 'antd'
import React from 'react'
import { MemberCount,MainContainer,MemberListContainer, ListSubContainer, AvatarImg, Name, PopOverContent } from './MemberList.style'
import {MoreOutlined} from '@ant-design/icons'

const MemberList=()=> {
  const content =  (
    <PopOverContent>
     {/* <Button type="text" >Send Message</Button>
     <Button type="text" >Report inappropriate actions</Button>
     <Button type="text" >Unlock user</Button> */}

      <p>Send Message</p>
      <p>Report inappropriate actions</p>
      <p>Unlock user</p>
    </PopOverContent>
  );
  return (
   
    <>
    <MainContainer>
        <Row>
            <MemberCount>28 members</MemberCount>  
        </Row>
        <MemberListContainer >
        {[...Array(20)].map((_,index)=>
        <ListSubContainer key={index} >
          <Col>
          <AvatarImg src="https://joeschmoe.io/api/v1/random" size={45} /></Col>
          <Name span={15} offset={1} >John Doe</Name>
          <Col >
          <Popover 
          autoAdjustOverflow
          color="#328BFF"
          placement="leftTop" 
          content={content}
          trigger="click"
          overlayStyle={{borderRadius:"10px"}}
          >
            <MoreOutlined style={{fontSize:'18px'}} />
          </Popover>
         </Col>
        </ListSubContainer>)}
    
        </MemberListContainer>
    </MainContainer>
    </>
  )
}
export default MemberList