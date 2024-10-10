function updateSidebarDates() {
    const checkinInput = document.getElementById('checkin').value;
    const checkoutInput = document.getElementById('checkout').value;
    
    if (checkinInput && checkoutInput) {
      const checkinDate = new Date(checkinInput);
      const checkoutDate = new Date(checkoutInput);
  
      const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
      const formattedCheckin = checkinDate.toLocaleDateString('en-US', options);
      const formattedCheckout = checkoutDate.toLocaleDateString('en-US', options);
  
      const timeDifference = checkoutDate - checkinDate;
      const nights = Math.ceil(timeDifference / (1000 * 3600 * 24));
  
      document.getElementById('sidebar-dates').textContent = `${formattedCheckin} – ${formattedCheckout}`;
      document.getElementById('sidebar-duration').textContent = `${nights} night${nights > 1 ? 's' : ''}`;
    } else {
      document.getElementById('sidebar-dates').textContent = 'Select your dates';
      document.getElementById('sidebar-duration').textContent = '0 nights';
    }
  }
  
  function updateSidebarRoomGuest() {
    const roomCount = document.getElementById('room-count').value;
    const guestCount = document.getElementById('guest-count').value;
  
    document.getElementById('sidebar-summary').textContent = `${roomCount} room${roomCount > 1 ? 's' : ''} | ${guestCount} guest${guestCount > 1 ? 's' : ''}`;
  }
  
  function increaseValue(id) {
    const input = document.getElementById(id);
    const max = input.max;
    if (parseInt(input.value) < max) {
      input.value = parseInt(input.value) + 1;
    }
    updateSidebarRoomGuest(); 
  }
  
  function decreaseValue(id) {
    const input = document.getElementById(id);
    const min = input.min;
    if (parseInt(input.value) > min) {
      input.value = parseInt(input.value) - 1;
    }
    updateSidebarRoomGuest (); 
  }
  
  function filterRoomsByDate() {
    const checkinInput = document.getElementById('checkin').value;
    const checkoutInput = document.getElementById('checkout').value;
    const rooms = document.querySelectorAll('.room-card');
    
    rooms.forEach(room => {
      const availability = room.getAttribute('data-availability');
      const dates = availability.split(',');
      
      if (dates.includes(checkinInput) && dates.includes(checkoutInput)) {
        room.style.display = 'block';
      } else {
        room.style.display = 'none';
      }
    });
  }
  
  document.getElementById('checkin').addEventListener('change', updateSidebarDates);
  document.getElementById('checkout').addEventListener('change', updateSidebarDates);
  document.getElementById('checkin').addEventListener('change', filterRoomsByDate);
  document.getElementById('checkout').addEventListener('change', filterRoomsByDate);