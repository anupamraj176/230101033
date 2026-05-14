// Request logging middleware for the campus notification platform.
const loggingMiddleware = (req, res, next) => {
    const startTime = Date.now();

    res.on('finish', () => {
        const endTime = Date.now();
        const timeTaken = endTime - startTime;
        const logEntry = {
            timestamp: new Date().toISOString(),
            method: req.method,
            url: req.originalUrl,
            statusCode: res.statusCode,
            timeTaken: `${timeTaken}ms`
        };

        process.stdout.write(`${JSON.stringify(logEntry)}\n`);
    });

    next();
};

module.exports = loggingMiddleware;