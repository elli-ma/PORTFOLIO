import React from 'react';
import ImgMe from '../images/1.jpg'

function Foto() {
    return (

        <div>
            <hr />

            <div class="d-flex justify-content-between">
                <div className="py-3">
                    <h1>Elvira <br/>Akhmetzyanova</h1>
                </div>

            
                <div className="py-3">
                    <h4>Junior Frontend <br/> Saint Petersburg</h4>
                </div>
            </div>
            <img className="img-fluid " src={ImgMe} alt=""></img>

        </div>

    );
}

export default Foto;





