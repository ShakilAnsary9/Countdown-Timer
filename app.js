const db = firebase.database();
const visitCountRef = db.ref("visitCount");

// Fetch the visit count from Firebase Realtime Database
visitCountRef.on("value", (snapshot) => {
  const visitCount = snapshot.val() || 0;

  // Update the HTML element with the visit count
  document.getElementById(
    "viewCount"
  ).textContent = `Total Visits: ${visitCount}`;
});
