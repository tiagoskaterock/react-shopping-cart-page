import React, { useState, useEffect } from 'react';

function Counter(props) {

	let [classes, setClasses] = useState("mr-2 badge badge-warning");	

	useEffect(() => {
    if (props.counter.value === 0) {
      setClasses("mr-2 badge badge-warning");
    } else {
      setClasses("mr-2 badge badge-primary");
    }
  }, [props.counter.value]);

	return (
		<div className="text-center">

			<h4 className="mt-4">{props.counter.title} $ {props.counter.price}</h4>

			<span className={classes}>
				{props.counter.value === 0 ? 'ZERO' : props.counter.value}
				</span>

			<button 
				className="btn btn-sm btn-secondary mr-2" 
				onClick={ () => props.onDecrement(props.counter) }
				>Decrement -
			</button>

			<button 
				className="btn btn-sm btn-success" 
				onClick={ () => props.onIncrement(props.counter) }
				>
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
