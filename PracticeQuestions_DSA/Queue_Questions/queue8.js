const tasks = [
    { time: 3, deadline: 5 },
    { time: 2, deadline: 6 },
    { time: 1, deadline: 4 },
    { time: 4, deadline: 7 }
];

const tasks2 = [
    { time: 3, deadline: 4 },
    { time: 2, deadline: 5 },
    { time: 1, deadline: 3 },
    { time: 4, deadline: 6 }
];
function canScheduleTasks(tasks) {
    // Sort tasks based on their required time (ascending order)
    tasks.sort((a, b) => a.time - b.time);

    let currentTime = 0;  // Time elapsed as we schedule tasks

    // Iterate through tasks
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];

        // Add the task time to the current time
        currentTime += task.time;

        // Check if the current time exceeds the task's deadline
        if (currentTime > task.deadline) {
            return false;  // Cannot complete this task on time
        }
    }

    return true;  // All tasks can be completed on time
}
console.log(canScheduleTasks(tasks));
console.log(canScheduleTasks(tasks2));
