const arr = [
    { name: 'Java', date: '2022-03-15' },
    { name: 'Abc', date: '2022-03-12' },
   
];

arr.sort((a, b) => new Date(a.date) - new Date(b.date));

console.log(arr);