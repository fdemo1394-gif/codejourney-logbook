# Security and privacy

CodeJourney Logbook is a static learning app. It does not ask for an account, password, payment information, or personal profile data.

## Protections included

- Projects, lessons, and roadmap progress are stored in the browser on the learner's device.
- User-written text is escaped before it is displayed in the app.
- JavaScript practice code runs in a separate Web Worker with a short time limit, so it cannot directly access the app page.
- The app uses a Content Security Policy, a strict referrer policy, and a restricted permissions policy where hosting supports it.
- The service worker caches only the app's public files; it does not send learner data to a server.
- The practice lab should never be used for passwords, private keys, or other sensitive information.

## Reporting a problem

Do not post private information in a public issue. If you find a security problem, contact the project owner privately through GitHub before sharing details publicly.
