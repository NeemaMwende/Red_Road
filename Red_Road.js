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

