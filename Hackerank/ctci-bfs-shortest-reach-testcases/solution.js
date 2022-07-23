let currentLine = 0;
function _readLine(input) {
    return input[currentLine++];
}
function processData(input = ``) {
    let _input = input.split('\n'),
        queries = parseInt(_readLine(_input));
    for (let i = 0; i < queries; i++) {
        let l = _readLine(_input).split(' '),
            vertCount = parseInt(l[0]),
            edgeCount = parseInt(l[1]),
            edges = [];
        for (j = 0; j < edgeCount; j++) {
            let edge = _readLine(_input).split(' ');
            edges.push([parseInt(edge[0]), parseInt(edge[1])])
        }
        let start = parseInt(_readLine(_input));
        _traverse(vertCount, edges, start);
    }
}
function _traverse(vertCount, edges, start) {
    let adj = {},
        distance = [];
    for (let k = 1; k <= vertCount; k++) {
        distance[k] = -1;
    }
    distance[start] = 0;

    for (let l = 0; l < edges.length; l++) {
        let e1 = edges[l][0],
            e2 = edges[l][1];
        adj[e1] = adj[e1] || [];
        adj[e1].push(e2);
        adj[e2] = adj[e2] || [];
        adj[e2].push(e1);
    }

    let queue = [start];
    while (queue.length > 0) {
        let el = queue.shift(),
            currentDist = distance[el],
            neigbours = adj[el] || [];
        neigbours.forEach(function (neighbor) {
            if (distance[neighbor] === -1) {
                distance[neighbor] = currentDist + 6;
                queue.push(neighbor);
            }
        })
    }

    const result = distance.filter(function (_, index) {
        return index !== start
    }).join(' ');
    console.log('result ->', result);
    return result;
}
processData(`2
4 2
1 2
1 3
1
3 1
2 3
2`) // 6 6 -1
    // -1 6