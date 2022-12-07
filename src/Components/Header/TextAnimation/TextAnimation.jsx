import React from "react"
import styled, {keyframes} from "styled-components"

export default function TextAnimation(props) {
    return <Wrapper >
        <Welcome style={{width:'80%'}}>
            Welcome
        </Welcome>
    </Wrapper>;
}
const animation = keyframes`
0% {opacity : 1;}
25% {opacity : 0}
75% {opacity : 0;}
100% {opacity:1; }
`
const Welcome = styled.h2`
margin: 0;
position: absolute;
top: 50%;
left:500px;
color:white;
font-size: 100px;
font-weight:bold;
text-align-last: left;
z-index:10;
`
const Wrapper = styled.div`
display: inline-block;
animation: ${animation} 4s  ;
padding: 2rem 1rem;
font-size: 500px;
z-index:2;

`







