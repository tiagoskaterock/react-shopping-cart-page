import React, { useState, useEffect } from 'react';
import Counter from "./Counter";

function Counters() {

	const counters = [
		{ id:1, value: 0, title: 'TV', price: 299.99 },
		{ id:2, value: 3, title: 'Game Console', price: 399.99 },
		{ id:3, value: 5, title: 'Smartphone', price: 599.99 },
		{ id:4, value: 2, title: 'Book: ', price: 29.99 }
	]

	return (
		<div className="text-center">
			{
				counters.map(
					c => 
					<Counter 
						key={c.id} 
						value={c.value} 
						title={c.title} 
						price={c.price} 
					/>											
				)
			}		
		</div>
	)
}

export default Counters
