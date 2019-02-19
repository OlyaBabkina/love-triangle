/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let length = preferences.length; 
	let count = 0; 
	for (let i = 0; i<length; i++) 
		{ 
	let l1 = preferences[i] - 1; 
		if (l1 == i) continue; 
	let l2 = preferences[l1] - 1; 
		if (l1 == l2) continue; 
	let l3 = preferences[l2] - 1; 
		if (l3 == l2) continue; 
			if (l3 == i) 
						{ 
				count++;
						} 
		} 
return count / 3;
};
