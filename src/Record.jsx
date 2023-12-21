import React, { useState } from 'react'

function Record({ allrecord, btnclick }) {
    const category = ["Mobile", "Electronics", "Cloths", "Shooes", "Food", "All"];

    return (
        <>
            <center>
                <h1>Food App</h1>
                {
                    category.map((val, i) => {
                        return (
                            <button onClick={() => btnclick(val)} key={i} style={{ margin: "15px" , fontSize : "20px" }} class="btn btn-outline-danger">{val}</button>
                        )
                    })
                }
                <br></br><br></br><br></br>

                {
                    allrecord.map((item) =>
                        <div class="container">
                            <div class="card mb-3" style={{ width: "100%", border:"none!important"}} key={item.id}>
                                <div class="row g-0" >
                                    <div class="col-md-4" >
                                        <img src={item.img} style={{ width: "100px", height: "100%" , objectFit : "cover" }} class="img-fluid rounded-start"/>
                                    </div>
                                    <div class="col-md-8 p-3">
                                        <div class="card-body">
                                            <p class="card-title d-flex justify-content-between">
                                                <div class='fs-3 fw-bold'>
                                                    {item.name}
                                                </div>
                                                <div class="fs-3 fw-normals" style={{ color: "#000" , fontSize :"16px", fontWeight : "bold"}}>
                                                    {item.price}
                                                </div>
                                            </p>
                                            <hr/>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    )
                }
            </center>
        </>
    )
}

export default Record