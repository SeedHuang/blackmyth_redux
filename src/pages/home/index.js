import styled from './index.module.scss';
import styledComponent from 'styled-components';

const StyleDiv = styledComponent.div`
    border: 2px solid blue;
    color: ${props => props.isActived === "true" ? 'red': 'blue'};
    ${props => {
        if(props.isactived) {
            return `font-size: 12px;`;
        } else {
            return `font-size: 20px;`;
        }
    }}
    span {
        color: green;
    }
`;

export default function Home() {
    return (<div className={styled.wrapper}>
            <div className={styled.title}>This is home page</div>
            <StyleDiv isactived={"true"}>
                Hello world
                <span>I world</span>
            </StyleDiv>
        </div>)
}