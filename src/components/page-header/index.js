import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container, Col, Row, Flex } from '../grid'
import {H1, P} from '../type'
import { colors, space } from '../../styles'
import { getImageUrl } from '../../utils'

const OBJECT_POSITION = '50% 50%';
const HEIGHT = '90vh';

const Wrapper = styled(Flex)`
    min-height: ${HEIGHT};
    overflow: hidden;
    position: relative;
    text-align: center;
    width: 100%;

    &::after {
        background-color: ${colors.black};
        bottom: 0;
        content: '';
        left: 0;
        opacity: 0.4;
        position: absolute;
        right: 0;
        top: 0;
    }
`;

const BackgroundImage = styled.img`
    height: 100%;
    left: 0;
    max-width: 100%;
    object-fit: cover;
    object-position: ${props => props.objectPosition};
    position: absolute;
    top: 0;
    vertical-align: top;
    width: 100%;
`;

const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: ${space.x4};
    margin-top: ${space.x3};
    position: relative;
    z-index: 1;
`;


const PageHeader = ({image, heading, subheading, feature}) => {

    return (
        <Wrapper>
            <BackgroundImage  src={getImageUrl(image)} objectPosition={OBJECT_POSITION} />
            <StyledContainer>
                <Row>
                    <Col width={{xs: 10/12, md: 8/12, lg: 6/12}} offset={[1/12, 1/12, 2/12, 3/12]}>
                        {heading && (<H1 color='white'>{heading}</H1>)}
                        {subheading && (<P color='white'>{subheading}</P>)}
                    </Col>
                </Row>
            </StyledContainer>
        </Wrapper>
    );
};

PageHeader.propTypes = {
    image: PropTypes.object, 
    heading: PropTypes.string,
    subheading:PropTypes.string,
    feature: PropTypes.bool,
};

export {PageHeader};