import React, { useState, useEffect } from 'react';

function Counter(props) {

	let [value, setValue] = useState(props.counter.value);
	let [classes, setClasses] = useState("mr-2 badge badge-warning");	

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

	return (
		<div className="text-center">

			<h4 className="mt-4">{props.counter.title} $ {props.counter.price}</h4>

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

			<button 
				className="btn btn-sm btn-danger ml-2"
				onClick={ () => props.onDelete(props.counter.id) }>				
				Delete
			</button>
			
		</div>
	)
}

export default Counter
