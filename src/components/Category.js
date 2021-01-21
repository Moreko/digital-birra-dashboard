import React from "react"


function Category(props){
    return(

        <React.Fragment>

            <div className="col-lg-6 mb-4">
                <div className="card bg-info text-white shadow">
                    <div className="card-body">
                         {props.nombre.toUpperCase()}
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Category;