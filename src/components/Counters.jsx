import React, { useState, useEffect } from 'react';
import Counter from "./Counter";

function Counters() {

	const counters = [
		{ id:1, value: 0 },
		{ id:2, value: 3 },
		{ id:3, value: 5 },
		{ id:4, value: 2 }
	]

	return (
		<div className="text-center">
			{
				counters.map(c=> <Counter key={c.id} value={c.value} />)
			}		
		</div>
	)
}

export default Counters
