import React from 'react'
import './Education.css'
import {LiaGraduationCapSolid} from 'react-icons/lia'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
function Education() {
  return (
    <>
    <div className="education" id='education'>  
    <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>EDUCATION DETAILS</h2>
    <hr />
    <VerticalTimeline>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "white", color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2016 - 2017"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<LiaGraduationCapSolid/>}
  >
    <h3 className="vertical-timeline-element-title">10th</h3>
    <h4 className="vertical-timeline-element-subtitle">Shri Daulat Ram Public Sr Sec School, Delhi ,IN</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "white", color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2018 - 2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<LiaGraduationCapSolid/>}
  >
    <h3 className="vertical-timeline-element-title">12th</h3>
    <h4 className="vertical-timeline-element-subtitle">Shri Daulat Ram Public Sr Sec School, Delhi ,IN</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "white", color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2019 - 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<LiaGraduationCapSolid/>}
  >
    <h3 className="vertical-timeline-element-title">B-Tech</h3>
    <h4 className="vertical-timeline-element-subtitle">CBS Group Of Instritutions ,IN</h4>
  </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
    </>
  )
}

export default Education
