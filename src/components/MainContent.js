import React from 'react';
// Aquí debemos importar los componentes ContentRowTop y ContentRowBotton y Product
import ContentRowTop from './ContentRowTop';
import ContentRowBotton from './ContentRowBotton';
import Product from './Product';


function MainContent(){
    return (
        <React.Fragment>
          
            <div className="container-fluid">


                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Panel de control</h1>
                    <h2 className="h3 mb-0 text-gray-800">Digital Birra</h2>
                </div>
               
                <ContentRowTop />
                <ContentRowBotton />
                <Product />
            </div>  

        </React.Fragment>
    )
}
export default MainContent;