import React from 'react';
import Styled from 'styled-components';
import Button from './Button';

function Card(props) {
    const StyledCard = Styled.div`
        width: 20%;
        box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 20px;
        gap: 2px;

        img {
            width: 100%;
            border-radius: 20px 20px 0 0;
        }

        .title {
            font-weight: bold;
            font-size: 40px;
            text-align: left;
            padding: 5px;
            width: 90%;
        }

        .desc {
            font-weight: normal;
            font-size: 12px;
            text-align: justify;
            padding: 5px;
            width: 90%;
        }

        .btns {
            width: 100%;
            display: flex;
            justify-content: space-around;
            padding: 5px;
        }
    `;

    

    return (
        <StyledCard>
            <img alt={props.image} height='200px' src={props.image} />
            <div className='title'>Title</div>
            <div className='desc'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....
            </div>
            <div className='btns'>
                <Button f={props.like} name='Like' color='#dc2626' />
                <Button f={props.save} name='Save' color='#2563eb' />
            </div>
        </StyledCard>
    );
}

export default Card;
