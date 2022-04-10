import React from 'react';
import styled from 'styled-components';

export const TextArea = styled.div`
    margin: 15px 0px 15px 0px;
    text-align: left;
    input, textarea, .ql-container {
        background-color: #F3F4F5;
        border: 1px solid #F3F4F5;
        color: #C4C4C4;
        border-radius: 20px;
        width: calc(100% - 40px);
        padding: 10px 20px;
        &::placeholder {
            color: #C4C4C4;
        }
        &:focus {
            outline: none;
        };
        font-family: 'Source Sans 3', sans-serif;
    }
    & .ql-container {
        width: 100% !important;
    }
`;

export const TextInput = ({type, id, onChange, placeholder, value}) => (
    <TextArea>
        <input id={id} onChange={onChange} placeholder={placeholder} value={value} type={type}/>
    </TextArea>
);