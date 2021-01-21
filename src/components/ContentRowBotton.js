
import React from 'react';
import CategoryInDb from './CategoryInDb';
import LastProductInDb from "./LastProductInDb"



function ContentRowBotton(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {/*<!-- Last Product in DB -->*/}
           <LastProductInDb descripcion ='sarasa'/>

            {/*<!-- Categories in DB -->*/}
            <CategoryInDb />
        </div>
        </React.Fragment>
    )
}
export default ContentRowBotton;
