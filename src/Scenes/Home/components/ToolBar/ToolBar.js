import React, { useState } from 'react'
import {
  SearchOutlined,
  LeftOutlined,
  RightOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined
} from '@ant-design/icons'
import { IncDecContainer, SearchButton, SelectContainer, ToolBarContainer } from './ToolBar.style'
import { Avatar, Col } from 'antd'

import pageIcon from '../../../../assets/pageIcon.svg'
import handMoveIcon from '../../../../assets/handMoveIcon.svg'
import videoIcon from '../../../../assets/videoIcon.svg'
import callIcon from '../../../../assets/callIcon.svg'
import sizeChangeIcon from '../../../../assets/sizeChangeIcon.svg'
import shareIcon from '../../../../assets/shareIcon.svg'
import copyIcon from '../../../../assets/copyIcon.svg'

const ToolBar=()=> {
    const [pageCount,setPageCount] = useState(1)
    const [maxCount,setMaxCount] = useState(100)
    const [zoomLevel,setZoomLevel] = useState("100")
    
    const iconProps={
        width:"22px" ,
        height:"22px"
      }
    const IncDecContainerProps={
      fontSize:"14px",
      padding:'7px',
    }
  
      const decrementPageCount =()=>{
        if(pageCount >=1) setPageCount(prev=>prev-1)
      }
      const incrementPageCount =()=>{
        if(pageCount <=maxCount) setPageCount(prev=>prev+1)
        else setPageCount(maxCount)
      }
      const onChangeZoomLevel =(value)=>{
        setZoomLevel(value)
      }
      
  return (
    <ToolBarContainer>

        {/* Search Button */}

        <Col>
          <SearchButton style={{width:250}} 
            size="medium" placeholder="Search" 
            prefix={<SearchOutlined />} />
        </Col>

        {/* Members Avatar */}
        
        <Col style={{paddingLeft:'20px'}}>
          <Avatar.Group
              maxCount={1}
              maxPopoverTrigger="click"
              size="large"
              maxStyle={{
                color: '#fff',backgroundColor: '#25CA69',cursor: 'pointer',borderLeft:'none',
              }}>
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <Avatar src="https://joeschmoe.io/api/v1/random" />
              <Avatar src="https://joeschmoe.io/api/v1/random" />
              <Avatar src="https://joeschmoe.io/api/v1/random" />
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </Avatar.Group>
        </Col>
        <Col>
          <IncDecContainer>
              <LeftOutlined 
                disabled={pageCount===1}
                onClick={()=>decrementPageCount()} {...IncDecContainerProps}/>
                <>
                  <input value={pageCount} onChange={(e)=>setPageCount(parseInt(e.target.value))} 
                  style={{width:'25px',fontSize:"14px"}} />
                  <span style={{fontSize:"14px"}}>of</span>
                  <span style={{fontSize:"14px",paddingLeft:'7px'}}>{maxCount}</span>
                  </>
              <RightOutlined onClick={()=>incrementPageCount()} 
                disabled={pageCount===maxCount}
                {...IncDecContainerProps}/>
          </IncDecContainer>
        </Col>
        <Col>
          <IncDecContainer >
            <MinusCircleOutlined
              disabled={pageCount===1}
              onClick={()=>decrementPageCount()} {...IncDecContainerProps}/>
              <>
              <SelectContainer  defaultValue="100%" onChange={()=>onChangeZoomLevel()}>
                <option value="100">100%</option>
                <option value="125">125%</option>
                <option value="150">150%</option>
                <option value="175">175%</option>
              </SelectContainer>
              </>
            <PlusCircleOutlined onClick={()=>incrementPageCount()} 
              disabled={pageCount===maxCount} {...IncDecContainerProps}/>
          </IncDecContainer>
        </Col>
        
          <img src={pageIcon} alt='page' {...iconProps}/>
          <img src={handMoveIcon} alt='move' {...iconProps}/>
          <img src={videoIcon} alt='video' {...iconProps}/>
          <img src={callIcon} alt='call' {...iconProps}/>
          <img src={sizeChangeIcon} alt='size' {...iconProps}/>
          <img src={shareIcon} alt='share' {...iconProps}/>
          <img src={copyIcon} alt='copy' {...iconProps}/>
       
    </ToolBarContainer>
  )
}

export default  ToolBar