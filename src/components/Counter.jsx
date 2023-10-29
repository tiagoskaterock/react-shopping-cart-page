import React, { useState, useEffect } from 'react';

function Counter() {

	let [count, setCount] = useState(0);
	let [classes, setClasses] = useState("mr-2 badge badge-warning");	
	const tags = ['react', 'laravel', 'bootstrap', 'django']

	useEffect(() => {
    if (count === 0) {
      setClasses("mr-2 badge badge-warning");
    } else {
      setClasses("mr-2 badge badge-primary");
    }
  }, [count]);

	function addCount() {
		setCount(count + 1)
	}

	function subCount() {
		count > 0 ? setCount(count - 1) : setCount(0)		
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
				{count === 0 ? 'ZERO' : count}
				</span>

			<button 
				className="btn btn-sm btn-secondary mr-2" 
				onClick={subCount}>Decrement -
			</button>

			<button 
				className="btn btn-sm btn-success" 
				onClick={addCount}>
				Increment +
			</button>

			{renderTags()}
			
		</div>
	)
}

export default Counter
