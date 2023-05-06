import React from 'react';
import ImgMe from '../images/Photo1.jpg'
import ImgMeS from '../images/Photo2.jpg'

function Photo() {
    return (
        <div>
            <div class="photo d-flex justify-content-between">
                <div className="my-3">
                    <h1 className="fw-bolder">Elvira <br />Akhmetzyanova</h1>
                </div>
                <div className="py-3">
                    <h4 >Junior Frontend <br /> Saint Petersburg</h4>
                </div>
            </div>
            <img className="img-big img-fluid " src={ImgMe} alt=""></img>
            <img className="img-small img-fluid " src={ImgMeS} alt=""></img>
        </div>
    );
}

export default Photo;





