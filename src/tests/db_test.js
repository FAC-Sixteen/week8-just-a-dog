const test = require('tape');
const dbBuildTest = require('../model/database/db_build_test.js');
const getData = require('../model/queries/getData.js');
const postData = require('../model/queries/postData.js');


test('1 should equal 1', t => {
    t.equals(1, 1, 'one equals one');
    t.end();
});

// test('getData', t => {
//     dbBuildTest((err, res) => {
//         t.error(err, 'No Error');
//         let expected = 'Christopher';
//         getData(expected, (err, result) => {
//             if (err) console.log(err);
//             t.deepEquals(result, expected, 'First name is Christopher');
//             t.end();
//         });
//     });
// });