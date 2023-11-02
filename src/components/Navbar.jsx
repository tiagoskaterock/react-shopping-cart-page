function Navbar(props) {
	return <nav class="navbar navbar-light bg-light text-center">
				  <span class="navbar-brand" href="#">
				  	Amazing Shopping Cart
				  	<span className="ml-2 badge badge-pill badge-secondary">
				  		{props.totalCounters}
				  	</span>
				  </span>
				</nav>
}

export default Navbar
