// cosnt table1 = document.querySelector('.tad');
const tdItem = document.querySelectorAll('.tad td');
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let sum = 0;
	tdItem.forEach(td =>{
		const value = parseFloat(td.textContent);
		if(!isNaN(value)){
			sum += value;
		}
	})


const result = document.createElement('tr')
result.innerHTML =`<td colspan= '100%'>Total: ${sum}</td>`

	const table = document.querySelector('.tad');
	table.appendChild(result);

};

getSumBtn.addEventListener("click", getSum);

