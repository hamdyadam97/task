import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "../Styling/form.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img from '../Imgs/formImg.jpg';
import { faFacebook, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function Formm() {
    // const [selectedFile, setSelectedFile] = useState();
    // const [userCv,setUserCV] = useState()

    const [userData, setUserData] = useState({
        youremail: "",
        name: "",
        position: "",
        exsalary: "",
        phone: "",
        address: "",
        avdate: "",
        birth: "",
        // filename: ""

    })

    const [errors, setErrors] = useState({
        youremailErr: null,
        nameErr: null,
        positionErr: null,
        exsalaryErr: null,
        phoneErr: null,
        addressErr: null,
        avdateErr: null,
        birthErr: null,
        // filenameErr: null

    })

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = `/thanks`;
    }
    const changeData = (e) => {
        if (e.target.name === 'youremail') {
            setUserData({
                ...userData,
                youremail: e.target.value
            })

            setErrors({
                ...errors,
                youremailErr: e.target.value.length === 0 ?
                    "This Field Required" :
                    !(/\S+@\S+\.\S+/.test(e.target.value)) ?
                        "You have entered an invalid email address!" : null
            })
        }
        // if (e.target.name === 'filename') {
        //     setUserData({
        //         ...userData,
        //         filename: e.target.value
        //     })

        //     setErrors({
        //         ...errors,
        //         filenameErr:e.target.value === " " ?
        //         "This Field Required" : null
        //     })
        // }

        if (e.target.name === 'name') {
            setUserData({
                ...userData,
                name: e.target.value
            })

            setErrors({
                ...errors,
                nameErr: e.target.value.length === 0 ?
                    "This Field Required" :
                    e.target.value.indexOf(' ') >= 0 ?
                        "Must No space" : null

            })
        }


        if (e.target.name === 'position') {
            setUserData({
                ...userData,
                position: e.target.value
            })

            setErrors({
                ...errors,
                positionErr: e.target.value.length === 0 ?
                    "This Field Required" : null
            })
        }

        if (e.target.name === 'exsalaryErr') {
            var regsalary = new RegExp("^[0-9]+$");
            setUserData({
                ...userData,
                exsalary: e.target.value
            })

            setErrors({
                ...errors,
                exsalaryErr: e.target.value.length === 0 ?
                    'This Field Required' : !(regsalary.test(e.target.value)) ?
                        "Must be only Numbers" : null
            })
        }


        if (e.target.name === 'avdate') {

            var regdate = new RegExp("^(3[01]|[12][0-9]|0?[1-9])/(1[0-2]|0?[1-9])/(?:[0-9]{2})?[0-9]{2}$");

            setUserData({
                ...userData,
                avdate: e.target.value
            })

            setErrors({
                ...errors,
                avdateErr: e.target.value.length === 0 ?
                    'This Field Required' : !(regdate.test(e.target.value)) ?
                        "Must be  like mm/dd/yyyy or dd/mm/yyyy and until to months 12" : null
            })
        }

        if (e.target.name === 'birth') {
            var regbirth = new RegExp("^(3[01]|[12][0-9]|0?[1-9])/(1[0-2]|0?[1-9])/(?:[0-9]{2})?[0-9]{2}$");

            setUserData({
                ...userData,
                birth: e.target.value
            })

            setErrors({
                ...errors,
                birthErr: e.target.value.length === 0 ?
                    'This Field Required' : !(regbirth.test(e.target.value)) ?
                        "Must be  like mm/dd/yyyy or dd/mm/yyyy and until to month 12" : null
            })
        }

        if (e.target.name === 'address') {
            setUserData({
                ...userData,
                address: e.target.value
            })

            setErrors({
                ...errors,
                addressErr: e.target.value.length === 0 ?
                    'This Field Required' : e.target.value.length < 15 ?
                        "your Address must have 15 charachter or more" :
                        null
            })
        }


        if (e.target.name === 'phone') {
            var regphone = new RegExp("^[0-9]+$");
            setUserData({
                ...userData,
                phone: e.target.value
            })

            setErrors({
                ...errors,
                phoneErr: e.target.value.length === 0 ?
                    "This Field Is Requied" : !(regphone.test(e.target.value)) ?
                        "Must be only Numbers" : e.target.value.length < 11 || e.target.value.length > 11 ?
                            "This shoud have 11 numbers" :
                            null
            })
        }

    }
    // const handleFileChange = (event) => {
    //     if(event.target.files.length > 0){
    //       setSelectedFile(event.target.files[0]);
    //     }
    //   };


    return (
        <>
            <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div className="card card0 border-0">
                    <div className="row d-flex">

                        <div className="col-lg-6">
                            <div className="card1 pb-5">
                                <div className="row">
                                </div>
                                <div className="row px-3 justify-content-center mt-4 mb-5 border-line" >
                                    <img src={img} className="image" alt='..' />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card2 card border-0 px-4 py-5">

                                
                                <Form onSubmit={handleSubmit}>
                                <h1 style={{ color: '#ab0202' }}>Register Form</h1>
                                <p className="text-muted"> Please enter your Valide data to use our service!</p>
                                
                                {/* <section className="text-center mb-2">
                                    <Link to='' class=" me-5" style={{ fontSize: '35px', color:'#3b5998'}}>

                                        <FontAwesomeIcon icon={faFacebook} />
                                    </Link>

                                    <Link to='' class=" me-5" style={{ fontSize: '35px',color:'#4285F4' }}>
                                        <FontAwesomeIcon icon={faGoogle} />
                                    </Link>

                                    <Link to='' class=" me-5" style={{ fontSize: '35px' , color:'#0072b1' }}>
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </Link>

                                </section> */}


                                    <div>
                                        <Form.Control
                                            type="text"
                                            placeholder="Your Email"
                                            name="youremail"
                                            onChange={(e) => changeData(e)}
                                            value={userData.youremail} />
                                        <span className="text-danger">{errors.youremailErr}</span>

                                        <Form.Control
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            onChange={(e) => changeData(e)}
                                            value={userData.name} />
                                        <p className="text-danger">{errors.nameErr}</p>

                                        <Form.Control
                                            type="text"
                                            placeholder="Position"
                                            name="position"
                                            onChange={(e) => changeData(e)}
                                            value={userData.position} />
                                        <span className="text-danger">{errors.positionErr}</span>

                                        <Form.Control
                                            type="text"
                                            placeholder="Your Expected salary"
                                            name="exsalaryErr"
                                            onChange={(e) => changeData(e)}
                                            value={userData.exsalary} />
                                        <p className="text-danger">{errors.exsalaryErr}</p>

                                        <Form.Control
                                            type="text"
                                            placeholder="Address"
                                            name="address"
                                            onChange={(e) => changeData(e)}
                                            value={userData.address} />
                                        <span className="text-danger">{errors.addressErr}</span>

                                        <Form.Control
                                            type="text"
                                            placeholder="Phone Number"
                                            name="phone"
                                            onChange={(e) => changeData(e)}
                                            value={userData.phone} />
                                        <p className="text-danger">{errors.phoneErr}</p>

                                        <Form.Control
                                            type="text"
                                            placeholder="Your Avalibility Date"
                                            name="avdate"
                                            onChange={(e) => changeData(e)}
                                            value={userData.avdate} />
                                        <span className="text-danger">{errors.avdateErr}</span>

                                        <Form.Control
                                            type="text"
                                            placeholder=" Your Birth Date"
                                            name="birth"
                                            onChange={(e) => changeData(e)}
                                            value={userData.birth} />
                                        <p className="text-danger">{errors.birthErr}</p>
                                    </div>
                                    <div className=" form-check-inline">
                                        <Form.Check
                                            type="radio"
                                            label="Single"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2"
                                            style={{ color: '#ab0202', fontSize: '20px', marginLeft: '20%' }}
                                            required
                                        />
                                    </div>
                                    <div className="form-check-inline">
                                        <Form.Check
                                            type="radio"
                                            label="Marrid"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2"
                                            style={{ color: '#ab0202', fontSize: '20px', marginLeft: '40%' }}
                                            required
                                        />
                                    </div>
                                    <br></br>
                                    <br></br>

                                    <div className="input-group custom-file-button">

                                        <label className="input-group-text" for="inputGroupFile" >Upload Your CV</label>
                                        <input type="file" className=" form-control -md " id="inputGroupFile" name="filename" required
                                        // onChange={handleFileChange}
                                        // onChange={(evt) => setUserCV(evt.target.files[0])}

                                        />


                                    </div>
                                    <p className="text-danger">{errors.filenameErr}</p>


                                    <Button type="submit" disabled={errors.youremailErr || errors.addressErr || errors.avdateErr || errors.birthErr || errors.exsalaryErr || errors.nameErr || errors.phoneErr || errors.positionErr || errors.filenameErr} > Sign Up </Button>

                                    <br></br>

                                </Form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Formm;