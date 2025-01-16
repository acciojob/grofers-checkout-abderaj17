// Select all <td> elements in the table
const tdItem = document.querySelectorAll('.tad td');

// Create the "Get Total Price" button
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Function to calculate and display the sum
const getSum = () => {
  let sum = 0;

  // Calculate the sum of numeric values in <td> elements
  tdItem.forEach(td => {
    const value = parseFloat(td.textContent); // Parse text content as a number
    if (!isNaN(value)) {
      sum += value;
    }
  });

  // Create or update the total row
  const table = document.querySelector('.tad');
  let totalRow = table.querySelector('.total-row');
  
  if (!totalRow) {
    // If the total row doesn't exist, create it
    totalRow = document.createElement('tr');
    totalRow.className = 'total-row'; // Add a class for identification
    table.appendChild(totalRow);
  }

  // Update the total row content
  totalRow.innerHTML = `<td colspan="100%">Total: ${sum}</td>`;
};

// Add an event listener to the button
getSumBtn.addEventListener("click", getSum);
