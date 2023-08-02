// <!-- Add this script tag just before the closing body tag -->
 document.addEventListener('DOMContentLoaded', function () {
    const circularCard = document.getElementById('circularCard');
    // Add hover effect to the card
    circularCard.addEventListener('mouseenter', function () {
      circularCard.classList.add('bg-success');
      circularCard.classList.remove('bg-success');
    });

    circularCard.addEventListener('mouseleave', function () {
      circularCard.classList.remove('bg-success');
      circularCard.classList.add('bg-success');
    });

    // Add click effect to the card
    circularCard.addEventListener('click', function () {
      // Replace this with the desired action when the card is clicked, e.g., redirect to a new page or perform an action.
      alert('You clicked on Circular Economy!');
    });
  });

  
// Function to open the modal
function openModal() {
  document.getElementById("donationModal").style.display = "block";
}

// Function to close the modal
function closeModal() {
  document.getElementById("donationModal").style.display = "none";
}

// Function to handle form submission
function submitForm(event) {
  event.preventDefault(); // Prevent form submission
  // You can perform further actions here, like sending the data to the server
  closeModal(); // Close the modal after form submission (you can modify this behavior)
}

