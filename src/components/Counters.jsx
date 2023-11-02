import React, { useState, useEffect } from 'react';
import Counter from "./Counter";

function Counters(props) {	

	let [counters, setCounters] = useState(props.counters);

	const handleDelete = (id) => {				
		setCounters(counters.filter(c => c.id !== id))
	}

	const handleReset = () => {
		let auxCounters = counters.map(c => {
			c.value = 0
			return c
		})
		setCounters(auxCounters)
	}

	const handleIncrement = counter => {
		let auxCounters = [...counters]
		const index = counters.indexOf(counter)		
		auxCounters[index] = {...counter}
		auxCounters[index].value += 1
		setCounters(auxCounters)
	}

	const handleDecrement = counter => {
		let auxCounters = [...counters]
		const index = counters.indexOf(counter)		
		auxCounters[index] = {...counter}
		if(auxCounters[index].value > 0) {
			auxCounters[index].value -= 1			
			setCounters(auxCounters)
		}
	}

	return (
		<div className="text-center">
			<button 
				className="btn btn-sm btn-primary"
				onClick={handleReset}>
				Reset
			</button>
			{
				counters.map(
					c => 
					<Counter 
						key={c.id} 
						onDelete={ () => handleDelete(c.id) }
						onIncrement={ () => handleIncrement(c) }
						onDecrement={ () => handleDecrement(c) }
						counter={c}
					/>											
				)
			}		
		</div>
	)
}

export default Counters
