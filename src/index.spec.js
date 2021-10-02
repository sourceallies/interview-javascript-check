it('should say hello world', () => {
    const greeting = require('./index').sayHello('world');
    expect(greeting).toBe('Hi World');
});

it('should start with hello', () => {
    const greeting = require('./index').sayHello('world');
    expect(greeting).toEqual(expect.stringMatching(/^hello/i));
});