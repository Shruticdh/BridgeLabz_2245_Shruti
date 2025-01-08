const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
};

function bfs(graph, start) {
    const visited = new Set();  
    const queue = [start];      
    visited.add(start);

    while (queue.length > 0) {
        const node = queue.shift(); 
        console.log(node);           
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor); 
                queue.push(neighbor);  
            }
        }
    }
}
bfs(graph, 'A');
