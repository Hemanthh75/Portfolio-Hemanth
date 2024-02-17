import React from "react";
import styled from "styled-components";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from "../../data/constants";
import EducationCard from "../Cards/EducationCard";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;

    @media screen and (max-width: 968px){
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    max-width: 1100px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 12px;
`;

const Title = styled.div`
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
    color: ${({theme}) => theme.text_primary};

    @media screen and (max-width: 768px){
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    max-width: 600px;
    text-align: center;
    color: ${({theme}) => theme.text_secondary};

    @media screen and (max-width: 768px){
        font-size: 16px;
    }
`;



const Education = () => {
    return (
        <Container id="education">
            <Wrapper>
                <Title>Education</Title>
                <Desc>My education has been a journey of self-discovery and growth.  My educational details are as follows.</Desc>
                    <Timeline>
                        {education.map((education, index) => {
                           return <TimelineItem>                             
                                <TimelineContent sx={{py: '12px', px: 2}}>
                                    <EducationCard education={education}/>
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary"/>
                                    {index !== education.length-1 && (<TimelineConnector />)}    
                                </TimelineSeparator>
                           </TimelineItem>
                        })}
                    </Timeline>
            </Wrapper>
        </Container>
    )
}

export default Education;