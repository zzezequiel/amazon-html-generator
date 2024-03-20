"use client"
import React, { useState } from 'react';

const Template1 = () => {

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {/* Row 1: Two columns for images */}
                <div style={{ flex: '1 0 50%', padding: '10px', boxSizing: 'border-box' }}>
                    <img src="https://res.cloudinary.com/dgrxqmiuf/image/upload/v1710922641/Default%20Images/w15f6fuzg32x24f0iuhx.png" alt="Imagen 1" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <div style={{ flex: '1 0 50%', padding: '10px', boxSizing: 'border-box' }}>
                    <img src="https://res.cloudinary.com/dgrxqmiuf/image/upload/v1710922641/Default%20Images/w15f6fuzg32x24f0iuhx.png" alt="Imagen 2" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>

                {/* Row 2: One column for a banner */}
                <div style={{ flex: '1 0 100%', padding: '10px', boxSizing: 'border-box' }}>
                    <img src="https://res.cloudinary.com/dgrxqmiuf/image/upload/v1710922641/Default%20Images/w15f6fuzg32x24f0iuhx.png" alt="Banner" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>

                {/* Row 3: Two columns */}
                <div style={{ flex: '1 0 50%', padding: '10px', boxSizing: 'border-box' }}>
                    <img src="https://res.cloudinary.com/dgrxqmiuf/image/upload/v1710922641/Default%20Images/w15f6fuzg32x24f0iuhx.png" alt="Imagen 3" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <div style={{ flex: '1 0 50%', padding: '10px', boxSizing: 'border-box' }}>
                    <img src="https://res.cloudinary.com/dgrxqmiuf/image/upload/v1710922641/Default%20Images/w15f6fuzg32x24f0iuhx.png" alt="Imagen 4" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>

                {/* Row 4: Four columns */}
                <div style={{ flex: '1 0 25%', padding: '10px', boxSizing: 'border-box' }}>
                    <img src="https://res.cloudinary.com/dgrxqmiuf/image/upload/v1710922641/Default%20Images/w15f6fuzg32x24f0iuhx.png" alt="Imagen 5" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <div style={{ flex: '1 0 25%', padding: '10px', boxSizing: 'border-box' }}>
                    <img src="https://res.cloudinary.com/dgrxqmiuf/image/upload/v1710922641/Default%20Images/w15f6fuzg32x24f0iuhx.png" alt="Imagen 6" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <div style={{ flex: '1 0 25%', padding: '10px', boxSizing: 'border-box' }}>
                    <img src="https://res.cloudinary.com/dgrxqmiuf/image/upload/v1710922641/Default%20Images/w15f6fuzg32x24f0iuhx.png" alt="Imagen 7" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <div style={{ flex: '1 0 25%', padding: '10px', boxSizing: 'border-box' }}>
                    <img src="https://res.cloudinary.com/dgrxqmiuf/image/upload/v1710922641/Default%20Images/w15f6fuzg32x24f0iuhx.png" alt="Imagen 8" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            </div>
        </>

    )
}

export default Template1;
