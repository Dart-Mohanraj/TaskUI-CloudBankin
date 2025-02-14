import React from 'react';

const Steps = () => {
    const steps = [
        'Borrower Company Info',
        'Director Info',
        'Financial Info',
        'Past Performance Details',
        'Document Upload'
    ];

    return (
        <div className='stepper-container'>
            {steps.map((step, index) => (
                <div key={index} className={`step ${index <= 0 ? 'active' : ''}`}>
                    <div className={`step-circle ${index <= 0 ? 'active' : ''}`}>{index + 1}</div>
                    <div className={`step-title ${index <= 0 ? 'active' : ''}`}>{step}</div>
                    {index < steps.length - 1 && (
                        <div className='step-line'>
                            {[...Array(10)].map((_, dotIndex) => (
                                <div
                                    key={dotIndex}
                                    className={`step-line-dot ${index === 0 && dotIndex < 2 ? 'active' : ''}`}
                                ></div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Steps;
