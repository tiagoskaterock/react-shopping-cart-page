import React, { useState } from 'react';

function Counter() {
	const [count, setCount] = useState(1);
	return (
		<div className="text-center">
			<span className="badge badge-primary mr-2">
				{count === 0 ? 'ZERO' : count}
				</span>
			<button className="btn btn-sm btn-secondary mr-2">Decrement -</button>
			<button className="btn btn-sm btn-success">Increment +</button>
		</div>
	)
}

export default Counter
