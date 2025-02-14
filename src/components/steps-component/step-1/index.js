import React from 'react';
import './style.css';

const BorrowInfo = () => {
    return (
        <div className='borrow-info-container'>
            <div className='borrow-info-header'>
                <h1 className='heading-title'>Borrower Company Info</h1>
            </div>
            <form className='borrow-info-form'>
                <div className='input-group'>
                    <div className='form-control'>
                        <span className='span-warning'>
                            <label htmlFor='propertyName'>Property Name</label> <div class='warning-icon'>!</div>
                        </span>
                        <input type='text' id='propertyName' name='propertyName' placeholder='Property Name' />
                    </div>
                    <div className='form-control'>
                        <label className='propertyType-label' htmlFor='propertyType'>
                            Property Type
                        </label>
                        <select id='propertyType' name='propertyType'>
                            <option value=''>Property Type</option>
                        </select>
                    </div>
                    <div className='form-control'>
                        <label className='numberOfUnits-label' htmlFor='numberOfUnits'>
                            Number of Units
                        </label>
                        <select id='numberOfUnits' name='numberOfUnits'>
                            <option value=''>Number of Units</option>
                        </select>
                    </div>
                </div>

                <div className='form-control' style={{ marginTop: '2em' }}>
                    <label htmlFor='propertyAddress'>Property Address</label>
                    <textarea id='propertyAddress' name='propertyAddress' placeholder='Enter Borrower Name'></textarea>
                </div>

                <div className='form-control file-upload'>
                    <label htmlFor='fileAttachment'>File Attachment</label>
                    <div className='file-box'>
                        <input type='file' id='fileAttachment' name='fileAttachment' />
                        <span className='file-text'>
                            <a href='#' className='file-link'>
                                Browse
                            </a>
                            or Drag & Drop to Attach a file
                        </span>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BorrowInfo;
