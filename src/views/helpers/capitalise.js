module.exports = str => {
    console.log(str);
    const array = str.split('');
    array[0] = array[0].toUpperCase();
    return array.join('');
}