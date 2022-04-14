import React from 'react'
import LeftSlider from '../../Components/LeftSlider/LeftSlider';
import { 
  MainContainer,
  HeaderContainer,
  HeaderHome, 
  HeaderFileTab, RightIconGroup, OwnerInfoContainer, RightHeaderContainer, ExpanIcon, CenterColumn, ContentSection } from './Home.style';
import HomeIcon from '../../assets/HomeIcon.svg'
import expandIcon from '../../assets/expandIcon.svg'
import chatIcon2 from '../../assets/chatIcon2.svg'
import bookmarkIcon from '../../assets/bookmarkIcon.svg'
import userStarIcon from '../../assets/userStarIcon.svg'
import InfoIcon from '../../assets/InfoIcon.svg'
import { Col, Row } from 'antd';
import OwnerInfo from './components/OwnerInfo/OwnerInfo';
import MemberList from './components/MemberList/MemberList';
import FileTabBar from './components/FileTabBar/FileTabBar';
import ToolBar from './components/ToolBar/ToolBar';
const  Home=()=> {
  const [activeKey, setActiveKey] = React.useState('1');
  const iconProps={
    width:"22px" ,
    height:"22px"
  }
  
  const initialPanes = [
    { title: 'Tab 1 ', content: 'Content of Tab 1', key: '1' },
    { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
    { title: 'Tab 3', content: 'Content of Tab 3', key: '3' },
    { title: 'Tab 4', content: 'Content of Tab 4', key: '4' },
    { title: 'Tab 5', content: 'Content of Tab 5', key: '5' },
    { title: 'Tab 6', content: 'Content of Tab 6', key: '6' },
    { title: 'Tab 7', content: 'Content of Tab 7', key: '7' },
    { title: 'Tab 8', content: 'Content of Tab 8', key: '8' },
    { title: 'Tab 9', content: 'Content of Tab 9', key: '9' },
    { title: 'Tab 10', content: 'Content of Tab 10', key: '10' },
    { title: 'Tab 11', content: 'Content of Tab 11', key: '11' },
    { title: 'Tab 12', content: 'Content of Tab 12', key: '12' },
    
  ]
  const onTabChange =(currentKey)=>{
    setActiveKey(currentKey)
  }
  return (
    <>
    <MainContainer>
      {/* Header part start */}
      <HeaderContainer>
        <HeaderHome  >
            <img src={HomeIcon} alt="home" {...iconProps} />

        </HeaderHome>
        {/* File Tab bar start */}

        <HeaderFileTab span={18}>
          <FileTabBar initialPanes={initialPanes} onTabChange={onTabChange} />
        </HeaderFileTab>

        {/* File Tab bar over */}

        {/* Header top right Icon tab start */}

        <Col span={5} >
          <RightHeaderContainer>
            <ExpanIcon span={7}> 
              <img src={expandIcon} alt="expand"  {...iconProps}/>
            </ExpanIcon>
            <RightIconGroup span={16}> 
            <img src={chatIcon2} alt='chat' {...iconProps}/>
            <img src={bookmarkIcon} alt='bookmark' {...iconProps}/>
            <img src={userStarIcon} alt='userStar' {...iconProps}/>
            <img src={InfoIcon} alt='Info' {...iconProps}/>
            </RightIconGroup>
          </RightHeaderContainer>
        
          </Col>

        {/* Header top right Icon tab over */}

      </HeaderContainer>
      {/* Header part Over */}


      <Row>
         {/* Left sider start */}
        <Col style={{paddingTop:'20px'}}>
          <LeftSlider />
        </Col>
         {/* Left sider over */}

      {/* Content part start */}
        <CenterColumn >
        <Row>
          <ToolBar /> 
        </Row>

        <ContentSection> 
          {initialPanes[activeKey-1].content}
        </ContentSection>
        </CenterColumn>

      {/* Content part over */}

        {/* right sider Start */}

        <Col style={{paddingTop:'20px'}} span={5}>
          <Row >
            <OwnerInfoContainer >
          <OwnerInfo />
            </OwnerInfoContainer>
          </Row>
          <Row style={{justifyContent: 'start'}}>
            <MemberList />
          </Row>
        </Col>

           {/* right sider Over */}

      </Row>

      
    </MainContainer>
    </>
  )
}
export default Home;