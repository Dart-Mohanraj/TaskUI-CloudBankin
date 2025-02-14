import React from 'react';
import { StepsContent, SubWrapContainer, WrapContainer, WrapSetUpPage } from './style';
import './style.css';
import BorrowInfo from '../../components/steps-component/step-1';
import Steps from 'components/steps-component';

const MainLayout = () => {
    return (
        <WrapSetUpPage>
            <div className='steps-container'>
                <Steps />
                <WrapContainer>
                    <SubWrapContainer>
                        <StepsContent>
                            <BorrowInfo />
                        </StepsContent>
                        <div className='button-group'>
                            <button type='button' className='btn btn-secondary'>
                                Back
                            </button>
                            <button type='submit' className='btn btn-primary'>
                                Continue
                            </button>
                        </div>
                    </SubWrapContainer>
                </WrapContainer>
            </div>
        </WrapSetUpPage>
    );
};

export default MainLayout;
