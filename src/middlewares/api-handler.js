import { errorHandler } from './';
export { apiHandler };

function apiHandler(handler) {
    return async (req, res) => {
        try {
            // route handler
            await handler(req, res);
        } catch (err) {
            // global error handler
            errorHandler(err, res);
        }
    }
}