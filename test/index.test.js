const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

describe('capitalizeWords', () => {
    test('capitalizes each word in a string', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
    });

    test('handles empty string', () => {
        expect(capitalizeWords('')).toBe('');
    });

    test('handles single word', () => {
        expect(capitalizeWords('test')).toBe('Test');
    });

    test('handles mixed case string', () => {
        expect(capitalizeWords('hELLo WoRLd')).toBe('Hello World');
    });

    test('handles all uppercase string', () => {
        expect(capitalizeWords('HELLO WORLD')).toBe('Hello World');
    });

    test('handles string with special characters', () => {
        expect(capitalizeWords('hello-world')).toBe('Hello-world');
    });
});

describe('filterActiveUsers', () => {
    const users = [
        { name: 'Alice', isActive: true },
        { name: 'Bob', isActive: false },
        { name: 'Charlie', isActive: true },
        { name: 'David', isActive: false }
    ];

    test('returns only active users', () => {
        const result = filterActiveUsers(users);
        expect(result).toEqual([
            { name: 'Alice', isActive: true },
            { name: 'Charlie', isActive: true }
        ]);
    });

    test('returns empty array if no active users', () => {
        const inactiveUsers = [
            { name: 'Bob', isActive: false },
            { name: 'David', isActive: false }
        ];
        expect(filterActiveUsers(inactiveUsers)).toEqual([]);
    });

    test('handles empty array', () => {
        expect(filterActiveUsers([])).toEqual([]);
    });
});

describe('logAction', () => {
    // Mock Date before each test
    beforeEach(() => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date('2024-11-27T12:00:00.000Z'));
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    test('logs user action with timestamp', () => {
        const result = logAction('login', 'Alice');
        expect(result).toBe('User Alice performed login at 2024-11-27T12:00:00.000Z');
    });

    test('handles different actions and users', () => {
        expect(logAction('logout', 'Bob')).toBe('User Bob performed logout at 2024-11-27T12:00:00.000Z');
        expect(logAction('post', 'Charlie')).toBe('User Charlie performed post at 2024-11-27T12:00:00.000Z');
        expect(logAction('like-post', 'user_123')).toBe('User user_123 performed like-post at 2024-11-27T12:00:00.000Z');
    });

    test('logs to console', () => {
        console.log = jest.fn();
        logAction('test', 'user');
        expect(console.log).toHaveBeenCalled();
    });
});
