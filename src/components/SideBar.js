import React from 'react';
import imagen from '../assets/images/LogoA.svg';
import {Link, Switch, Route} from 'react-router-dom'
import detalleLastP from './detalleLastP';
import Content from './Content';
import Graficos from "./Graficos";

function SideBar(){
    return(
        <React.Fragment>
        {/*<!-- Sidebar -->*/}
		<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

			{/*<!-- Sidebar - Brand -->*/}
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					
				</div>
				<div className="sidebar-brand-text mx-3">Admin</div>
				<img className="img-profile rounded-circle" src={imagen} width="70" alt='logo'/>
			</a>

			{/*<!-- Divider -->*/}
			<hr className="sidebar-divider my-0"/>

			{/*<!-- Nav Item - Dashboard -->*/}
			<li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>General</span></a>
			</li>

			{/*<!-- Divider -->*/}
			<hr className="sidebar-divider"/>

			{/*<!-- Heading -->*/}
			<div className="sidebar-heading">Acciones</div>


			{/*<!-- Nav Item - Charts -->*/}
			<li className="nav-item">
				<Link className="nav-link" to="graficos">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>Gráficos</span></Link>
			</li>

			{/*<!-- Nav Item - Charts -->*/}
			<li className="nav-item">
				<Link className="nav-link" to="detalle">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>Último producto</span></Link>
			</li>


			{/*<!-- Divider -->*/}
			<hr className="sidebar-divider d-none d-md-block"/>
		</ul>
		{/*<!-- End of Sidebar -->*/}

	<Switch>
        <Route exact path='/detalle' component={detalleLastP}/>
		<Route exact path='/graficos' component={Graficos}/>
		<Route exact path='/' component={Content}/>
     </Switch>

        </React.Fragment>
    )
}
export default SideBar;