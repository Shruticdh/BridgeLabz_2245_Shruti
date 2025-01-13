function fetchWeatherFromPrimarySource(location) {
    return new Promise((resolve, reject) => {
        console.log(`Fetching weather for ${location} from the primary source`);
        setTimeout(() => {
            const success = Math.random() > 0.2; // 80% chance of success
            if (success) {
                resolve(`Sunny and 25°C in ${location} (Primary Source)`);
            } else {
                reject("Failed to fetch weather from the primary source");
            }
        }, 2000);
    });
}

function fetchWeatherFromBackupSource(location) {
    return new Promise((resolve) => {
        console.log(`Fetching weather for ${location} from the backup source`);
        setTimeout(() => {
            resolve(`Cloudy and 22°C in ${location} (Backup Source)`);
        }, 1500);
    });
}

function notifyUser(weatherReport) {
    return new Promise((resolve) => {
        console.log("Preparing the weather report");
        setTimeout(() => {
            console.log(`Weather Update: ${weatherReport}`);
            resolve("Notification sent");
        }, 1000);
    });
}

function getWeather(location) {
    console.log(`Starting weather fetch process for ${location}...`);

    Promise.race([
        fetchWeatherFromPrimarySource(location),
        fetchWeatherFromBackupSource(location),
    ])
        .then((weatherReport) => {
            return notifyUser(weatherReport);
        })
        .then((message) => {
            console.log(message); 
        })
        .catch((error) => {
            console.error(`Error: ${error}`); 
        });
}

getWeather("India");
