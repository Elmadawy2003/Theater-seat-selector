document.addEventListener("DOMContentLoaded", function() {
    const seats = document.querySelectorAll('.row .seat:not(.sold)');
    const count = document.getElementById("count");
    const movieSelect = document.getElementById("movie");
    const timeSelect = document.getElementById("time");
  
    let ticketPrice = +movieSelect.value;
  
    // Function to update selected seat count and total price
    function updateSelectedCount() {
      const selectedSeats = document.querySelectorAll(".row .seat.selected");
      const selectedSeatsCount = selectedSeats.length;
      count.innerText = selectedSeatsCount;
    }
  
    // Movie select event
    movieSelect.addEventListener("change", function() {
      ticketPrice = +this.value;
      updateSelectedCount();
    });
  
    // Time select event
    timeSelect.addEventListener("change", function() {
      updateSelectedCount();
    });
  
    // Function to handle seat click
    function handleSeatClick(seat) {
      if (!seat.classList.contains("sold")) {
        seat.classList.toggle("selected");
        updateSelectedCount();
        // Toggle background color of the seat
        seat.style.backgroundColor = seat.classList.contains("selected") ? "green" : "";
      }
    }
  
    // Attach click event to each seat
    seats.forEach(seat => {
      seat.addEventListener("click", function() {
        handleSeatClick(seat);
      });
    });
});

  