import React from 'react'
import './WorkExp.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { BsPersonWorkspace } from 'react-icons/bs'
import 'react-vertical-timeline-component/style.min.css';

function WorkExp() {
    return (
        <>
            <div className="work" id='workexp'>
                <div className="container work-exp">
                    <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>WORK EXPERIENCE</h2>
                    <hr />
                    <VerticalTimeline lineColor='#138781' >
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#138783', color: '#1e1e2c' }}
                            contentArrowStyle={{ borderRight: '7px solid  #138781' }}
                            date="2021-2022"
                            iconStyle={{ background: '#1e1e2c', color: '#fff' }}
                            icon={<BsPersonWorkspace />}
                        >
                            <h3 className="vertical-timeline-element-title">Viral Fission</h3>
                            <h5 className="vertical-timeline-element-subtitle">Campus Ambassador</h5>
                            <p>
                                Campus amfassador is a kind of internship program by many organisations
                                to maintain their brand presence, promote their product and services among
                                college & university students .These type of internship are time bounded where we
                                have to complete given task in particular time.
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>

                </div>
            </div>
        </>
    )
}

export default WorkExp
