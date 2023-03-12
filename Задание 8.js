let map = new Map ([
    ['Ivan', 'name'],
    [24, 'year'],
    [true, "Man"],
    [false, "Woman"]
]);

for (let name of map.keys()) {
    console.log(`${name} - ${map.get(name)}`);
}