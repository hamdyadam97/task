import img from '../Imgs/thank.png';




function Thanks() {

    return (

        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                {/* <div className="card card0 border-0"> */}
                    <div className="row d-flex">
                        
                        <div className="col-lg-6">
                            <div className="card1 pb-5">
                                <div className="row">

                                </div>
                                <div className="row px-3 justify-content-center mt-4 mb-5 border-line" >
                                    
                                    <img src={img}  alt='..' style={{width:'100%'}} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className=" px-4 py-5">
                              
                                    <h1 style={{ color: '#ab0202' , textAlign:'center',marginTop:'30%'}}>Thank You For Your Registeration</h1>
                                    </div>
                                    </div>
                       
                    </div>
                   
                </div>
            // </div>


    );
}
export default Thanks