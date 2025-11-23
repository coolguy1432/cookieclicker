// sitelock.js
// === SiteLock: Allow only GitHub Pages or Google Sites ===
(function() {
    const allowedHosts = [
        "coolguy1432.github.io", // GitHub Pages
        "sites.google.com"       // Google Sites
    ];

    // Check if the current host is allowed
    const hostOk = allowedHosts.includes(window.location.hostname);

    // Check if the game is embedded in an allowed referrer (iframe)
    const referrerOk = allowedHosts.some(host => document.referrer.includes(host));

    if (!hostOk && !referrerOk) {
        document.body.innerHTML = `
            <div style="text-align:center; margin-top:50px; font-family:sans-serif;">
                <h1>🚫 Unauthorized Access</h1>
                <p>Please play this game on the official GitHub Pages site or via Google Sites.</p>
            </div>
        `;
        throw new Error("Unauthorized host");
    }
})();
