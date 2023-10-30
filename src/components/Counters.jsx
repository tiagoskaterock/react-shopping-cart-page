import React, { useState, useEffect } from 'react';
import Counter from "./Counter";

function Counters() {

	const counters = [
		{ id:1, value: 0 },
		{ id:2, value: 0 },
		{ id:3, value: 0 },
		{ id:4, value: 0 }
	]

	return (
		<div className="text-center">
			{
				counters.map(c=> <Counter key={c.id} />)
			}		
		</div>
	)
}

export default Counters
