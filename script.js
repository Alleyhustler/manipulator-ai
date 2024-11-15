// JavaScript to simulate hacker typing effect
document.getElementById("hacker-input").addEventListener("keydown", function(event) {
    event.preventDefault(); // Prevent actual typing

    const hackerText = `
        System initialized...
        Connecting to server...
        Access granted.
        Fetching data from blockchain...
        Processing $DEGAI protocol...
        Decoding AI intelligence...
        AI status: Operational.
        Success: Hack completed.
        Terminating session...
    `;

    let currentText = this.value;
    let newText = currentText + hackerText.substring(currentText.length, currentText.length + 3);
    this.value = newText;  // Display simulated typing
});
