import React from 'react'
import LeftSlider from '../../Components/LeftSlider/LeftSlider';
import { MainContainer,HeaderContainer,HeaderHome, HeaderFileTab } from './HomeStyles';
import HomeIcon from '../../assets/HomeIcon.svg'
import expandIcon from '../../assets/expandIcon.svg'
import chatIcon2 from '../../assets/chatIcon2.svg'
import bookmarkIcon from '../../assets/bookmarkIcon.svg'
import userStarIcon from '../../assets/userStarIcon.svg'
import InfoIcon from '../../assets/InfoIcon.svg'
import { Col, Row } from 'antd';
import OwnerInfo from './components/OwnerInfo/OwnerInfo';
import MemberList from './components/MemberList/MemberList';
const  Home=()=> {
  return (
    <>
    <MainContainer>
      {/* Header part start */}
      <HeaderContainer>
        <HeaderHome span={1} >
            <img src={HomeIcon} alt="home" width="25px" height="25px"/>

        </HeaderHome>
        <HeaderFileTab span={18}>
          other header
        </HeaderFileTab>
        <Col span={5} >
          <Row>
            <Col span={7} style={{marginLeft:'5px'}}> 
            <img src={expandIcon} alt="expand"  width="25px" height="25px"/>

            </Col>
            <Col span={16}  style={{display:'flex',justifyContent: 'space-around',alignItems: 'center'}}> 
            <img src={chatIcon2} alt='chat' width="25px" height="25px"/>
            <img src={bookmarkIcon} alt='bookmark' width="25px" height="25px"/>
            <img src={userStarIcon} alt='userStar' width="25px" height="25px"/>
            <img src={InfoIcon} alt='Info' width="25px" height="25px"/>
            </Col>
          </Row>
        
          </Col>
      </HeaderContainer>
      {/* Header part Over */}

      {/* Content part start */}
      <Row>
        <Col style={{paddingTop:'20px'}}>
        <LeftSlider />
        </Col >
        <Col  style={{height: 'calc(100vh - 40px)',paddingTop:'20px',borderRight:'1px solid #E3ECF3',flex:1}}>
            middle Content
        </Col>

          {/* right sider Start */}
        <Col style={{paddingTop:'20px'}} span={5}>
        <Row >
          <Col style={{padding:'10px 20px',borderBottom:'1px solid #E3ECF3'}}>
         <OwnerInfo />
          </Col>
        </Row>
        <Row style={{justifyContent: 'end'}}>
        <Col   >
          <MemberList />
          </Col>
        </Row>
        </Col>
           {/* right sider Over */}

      </Row>
      {/* Content part over */}
      
    </MainContainer>
    </>
  )
}
export default Home;