import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import Collapsible from 'react-collapsible'
import { NavLink } from 'react-router-dom'
import './Header.scss'
const Sidebar = ({ show, handleClose }) => {
  const Home = <NavLink to='/'>Home</NavLink>
  const Department = <NavLink to='/services'>Department </NavLink>
  const Doctors = <NavLink to='/doctors'>Doctors </NavLink>
  return (
    <>
      <div>
        <Offcanvas
          className='side__bar offcanvas'
          placement='end'
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Collapsible
              open={false}
              trigger={Home}
              triggerTagName='div'
            ></Collapsible>

            <Collapsible
              open={false}
              trigger={Department}
              triggerClassName='iconAdd'
              triggerOpenedClassName='icon_close'
              triggerTagName='div'
            >
              <ul className='sidebar_sub_menu text-white mt-3'>
                <li>
                  <NavLink to='/services'>Services 01</NavLink>
                </li>
                <li>
                  <NavLink to='/servicesDetails'>Services Details</NavLink>
                </li>
              </ul>
            </Collapsible>

            <Collapsible
              open={false}
              trigger={Doctors}
              triggerClassName='iconAdd'
              triggerOpenedClassName='icon_close'
              triggerTagName='div'
            >
              <ul className='sidebar_sub_menu text-white mt-3'>
                <li>
                  <NavLink to='/doctors'>Doctors 01</NavLink>
                </li>
                <li>
                  <NavLink to='/doctorDetails'>Doctors Details</NavLink>
                </li>
              </ul>
            </Collapsible>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  )
}

export default Sidebar
