import React from 'react';
import imagen from '../assets/images/LogoA.svg';

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

			{/*<!-- Nav Item - Pages -->*/}
			<li className="nav-item">
				<a className="nav-link collapsed" href="/">
					<i className="fas fa-fw fa-folder"></i>
					<span>Páginas</span>
				</a>
			</li>

			{/*<!-- Nav Item - Charts -->*/}
			<li className="nav-item">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>Gráficos</span></a>
			</li>

			{/*<!-- Nav Item - Tables -->*/}
			<li className="nav-item">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-table"></i>
					<span>Tablas</span></a>
			</li>

			{/*<!-- Divider -->*/}
			<hr className="sidebar-divider d-none d-md-block"/>
		</ul>
		{/*<!-- End of Sidebar -->*/}

        </React.Fragment>
    )
}
export default SideBar;