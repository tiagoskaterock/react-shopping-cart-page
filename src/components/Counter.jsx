import React, { useState, useEffect } from 'react';

function Counter(props) {

	console.log(props)

	let [value, setValue] = useState(props.value);
	let [classes, setClasses] = useState("mr-2 badge badge-warning");	
	const tags = ['react', 'laravel', 'bootstrap', 'django']

	useEffect(() => {
    if (value === 0) {
      setClasses("mr-2 badge badge-warning");
    } else {
      setClasses("mr-2 badge badge-primary");
    }
  }, [value]);

	function handleIncrement() {
		setValue(value + 1)
	}

	function handleDecrement() {
		value > 0 ? setValue(value - 1) : setValue(0)		
	}

	function renderTags() {
		return tags.length === 0 ? <p>No tags</p> : showTags()		
	}

	function showTags() {
		return <ul> { 
			tags.map( 
				tag => 
					<li 
						key={tag} 
						className="list-unstyled">
						{tag}
					</li>
			) 
		}	</ul>
	}

	return (
		<div className="text-center">
			<span className={classes}>
				{value === 0 ? 'ZERO' : value}
				</span>

			<button 
				className="btn btn-sm btn-secondary mr-2" 
				onClick={handleDecrement}>Decrement -
			</button>

			<button 
				className="btn btn-sm btn-success" 
				onClick={handleIncrement}>
				Increment +
			</button>

			{renderTags()}
			
		</div>
	)
}

export default Counter
