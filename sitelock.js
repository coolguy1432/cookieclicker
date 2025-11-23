(function() {
    const allowedHosts = [
        "coolguy1432.github.io", // GitHub Pages
        "sites.google.com"       // Google Sites
    ];

    // Check if the game is either on the allowed host or embedded in an allowed iframe
    const hostOk = allowedHosts.includes(window.location.hostname);
    const referrerOk = allowedHosts.some(host => document.referrer.includes(host));

    if (!hostOk && !referrerOk) {
        document.body.innerHTML = "<h1>Please play this game on the official site or via Google Sites!</h1>";
        throw new Error("Unauthorized host");
    }
})();
