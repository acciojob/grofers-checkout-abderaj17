// Select all <td> elements in the table with prices
const tdItem = document.querySelectorAll('.tad td');

// Create the "Get Total Price" button
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Function to calculate and display the sum
const getSum = () => {
  let sum = 0;

  // Calculate the sum of all numeric values in <td> elements
  tdItem.forEach(td => {
    const value = parseFloat(td.textContent); // Convert text to a number
    if (!isNaN(value)) {
      sum += value;
    }
  });

  // Create or update the total row
  const table = document.querySelector('.tad');
  let totalRow = document.querySelector('#ans'); // Look for an existing row with id="ans"

  if (!totalRow) {
    // If the total row doesn't exist, create it
    totalRow = document.createElement('tr');
    totalRow.id = 'ans'; // Add the required id
    table.appendChild(totalRow);
  }

  // Update the content of the total row
  totalRow.innerHTML = `<td colspan="100%">Total: ${sum}</td>`;
};

// Add an event listener to the button
getSumBtn.addEventListener("click", getSum);
