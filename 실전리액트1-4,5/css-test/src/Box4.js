import React from "react";
import styled from 'styled-components';

const BoxCommon = styled.div`
    width: ${props => (props.isBig ? 200 : 100)}px;
    height: 50px;
    background-color: #aaaaaa;
`;

function Box({ size }) {
    const isBig = size === 'big';
    const label = isBig ? '큰박스' : '작은박스';
    return <BoxCommon isBig={isBig}>{label}</BoxCommon>;
}

export default Box;
