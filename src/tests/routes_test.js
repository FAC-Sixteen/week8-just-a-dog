const test = require('tape');


test('2 should equal 2', t => {
    t.equals(2, 2, 'two equals two');
    t.end();
})