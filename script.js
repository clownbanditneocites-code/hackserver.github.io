fetch('data.JSON')  // <-- using your new filename
  .then(response => response.json())
  .then(data => {
    console.log('Loaded data:', data);

    // Example: show some info on page
    document.getElementById('status').textContent =
      `Status: ${data.siteStatus} | Version: ${data.version} | Timezone: ${data.timezone}`;
  })
  .catch(err => {
    console.error('Failed to load JSON', err);
  });
