import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsSearch } from "react-icons/bs"

const Header = () => {
    return (
        <>
            <header className="header-top-strip py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <p className='text-white mb-0 ps-5'>Lorem, ipsum dolor sit amet consectetur </p>
                        </div>
                        <div className="col-sm-6">
                            <p className=' text-end text-white mb-0'>
                                Helpline: <a href='tel:+91 8928519020'>+91 8928519020</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper">
                <div className="container-xxl py-3">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h3>
                                <Link className='text-white dev'>Product Base</Link>
                            </h3>
                        </div>  
                        <div className="col-5">
                            <div className="input-group">
                                <input type="search" className="form-control py-2" placeholder="Search Product Here..." aria-label="Search Product here..." aria-describedby="basic-addon2" />
                                <span className="input-group-text" id="basic-addon2"><BsSearch className='fs-6' /></span>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links align-items-center justify-content-between d-flex ">
                                <div>
                                    <Link className='d-flex align-items-center dev text-white gap-10'>

                                        <img src='/images/compare.svg' />
                                        <p className='p'>Compare <br /> Product</p>
                                    </Link>

                                </div>
                                <div>
                                    <Link className='d-flex align-items-center dev text-white gap-10'>

                                        <img src='/images/wishlist.svg' />
                                        <p className='p'> Faverate <br /> Wishlist</p>
                                    </Link>

                                </div>
                                <div>
                                    <Link className='d-flex align-items-center dev  text-white gap-10'>

                                        <img src='/images/user.svg' />
                                        <p className='p'>Login  <br /> My Account</p>
                                    </Link>

                                </div>
                                <div>
                                    <Link className='d-flex align-items-center dev text-white gap-10'>

                                        <img src='/images/cart.svg' />
                                        <div className='d-flex flex-column gap-10'>
                                            <span className='badge bg-white text-dark w-50 h-50 text-center'>0</span>
                                            <p className='text-center mb-0 p'>$ 500.00</p>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="header-bottom py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="menu-bottom d-flex align-items-center">
                            <div>
                                <div className="dropdown me-4">
                                    <img src='images/menu.svg' alt='menu'/>
                                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Product Category
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item text-white" href="#">Action</a></li>
                                        <li><a className="dropdown-item text-white" href="#">Another action</a></li>
                                        <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="menu-links">
                                <div className="d-flex align-item-center gap-30">
                                    <NavLink className="text-white navlink">Home</NavLink>
                                    <NavLink className="text-white navlink">Our Store</NavLink>
                                    <NavLink className="text-white navlink">Blogs</NavLink>
                                    <NavLink className="text-white navlink">Contact</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header