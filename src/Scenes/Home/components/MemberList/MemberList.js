import { Avatar, Col, List, Row } from 'antd'
import React from 'react'
import { MemberCount,MainContainer } from './MemberList.style'

const MemberList=()=> {

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
  return (
    <>
    <MainContainer>
        <Row  >
            
            <MemberCount>28 members</MemberCount>  
        </Row>
        <Row style={{width:'100%',height: '55vh'}}>
        {[1,2,3,5,6,77,8,1,2,3,5,6,77,8,1,2,3,5,6,77,8].map(e=><div style={{display:'flex',height:'60px', justifyContent: 'space-between',alignItems:'center',width:'100%'}}>
          <Col><Avatar src="https://joeschmoe.io/api/v1/random" /></Col>
          <Col>Karan kacha</Col>
          <Col>|</Col>
        </div>)}
    
        </Row>
    </MainContainer>
    </>
  )
}
export default MemberList