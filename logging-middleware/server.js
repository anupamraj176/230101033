const express = require('express');
const app = express();
const loggingMiddleware = require('./logging-middleware');
app.use(loggingMiddleware);

app.get('/notifications', (req, res) => {
    // Simulate fetching notifications for students
    const notifications = [
        { id: 1, type: 'placement', message: 'New placement opportunity at XYZ Company!' },
        { id: 2, type: 'event', message: 'Tech Talk on AI this Friday!' },
        { id: 3, type: 'result', message: 'Your semester results are out!' }
    ];
    res.json(notifications);
});

app.listen(3000, () => {
    process.stdout.write('Campus Notification Platform is running on port 3000\n');
}); 