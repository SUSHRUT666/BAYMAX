function fetchNutritionalData() {
    const foodItem = encodeURIComponent(document.getElementById('foodInput').value.trim());
    const apiKey = 'THpf670SGn/0KqzfRZPKKQ==vw9vHnJywCWH1pbX'; // Replace with your actual API key
    const apiUrl = `https://api.calorieninjas.com/v1/nutrition?query=${foodItem}`;

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch nutritional data.');
        }
        return response.json();
    })
    .then(data => {
        if (data && data.items && data.items.length > 0) {
            const nutritionalValues = data.items[0];
            displayNutritionalData(nutritionalValues);
        } else {
            console.log('No nutritional data found.');
        }
    })
    .catch(error => {
        console.error('Error fetching nutritional data:', error);
    });
    
}

function displayNutritionalData(data) {
    const list = document.getElementById('nutritionList');
    list.innerHTML = ''; // Clear previous data
    const keys = Object.keys(data);
    keys.forEach(key => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `${key}: ${data[key]}`;
        list.appendChild(listItem);
    });
    list.style.display = 'block'; // Show the list
    renderChart(data.calories);
}

function renderChart(calories) {
    const ctx = document.getElementById('chart1');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Calories'],
                datasets: [{
                    label: 'Calories',
                    data: [calories],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}