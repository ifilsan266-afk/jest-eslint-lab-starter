// Utility Functions

/**
 * Capitalizes the first letter of each word in the input string.
 * @param {string} input - The input string.
 * @returns {string} - The formatted string.
 */
function capitalizeWords(input) {
    if (!input || typeof input !== 'string') return '';
    if (input.trim() === '') return '';
    
    return input
        .split(' ')
        .map(word => {
            if (word.length === 0) return '';
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(' ');
}

/**
 * Filters active users from the array.
 * @param {Array} users - An array of user objects.
 * @returns {Array} - An array of active user objects.
 */
function filterActiveUsers(users) {
    if (!Array.isArray(users)) return [];
    return users.filter(user => user.isActive === true);
}

/**
 * Logs an action performed by a user with a timestamp.
 * @param {string} action - The action performed.
 * @param {string} username - The name of the user.
 * @returns {string} - The log message.
 */
function logAction(action, username) {
    const timestamp = new Date().toISOString();
    const message = `User ${username} performed ${action} at ${timestamp}`;
    console.log(message);  // REQUIRED: Log to console
    return message;
}

module.exports = { capitalizeWords, filterActiveUsers, logAction };  // FIXED: module.exports
