window.onload = () => {
    get_words_list_data();
}

function get_words_list_data() {
    let target_db_id = document.getElementById('target_db_id').value;
    let char_len = document.getElementById('char_len').value;
    let word_len = document.getElementById('word_len').value;

    $.ajax({
        type: 'POST',
        data: {
            'target_db_id': target_db_id,
            'char_len': char_len,
        },
        url: '/captions_analysis_page/',
        success: async function (response) {
            const sortedArray = Object.entries(response).sort((a, b) => b[1] - a[1]);

            let word_list = [];
            let reaps_list = [];
            let number_count = 0;
            for (const [key, value] of sortedArray) {
                if (number_count < Number(word_len)) {
                    word_list.push(key);
                    reaps_list.push(value);
                    number_count += 1;
                }
            }
            bar_graph(word_list, reaps_list);
        }
    })
}

function bar_graph(labels, lens) {
    const ctx = document.getElementById('myBarChart').getContext('2d');

    if (window.myBarChart instanceof Chart) {
        window.myBarChart.destroy();
    }

    window.myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: null,
                data: lens,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            // indexAxis: 'y',
            scales: {
                x: {
                    ticks: {
                        color: 'white'
                    },
                    grid: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                },
                y: {
                    ticks: {
                        color: 'white'
                    },
                    grid: {
                        color: 'rgba(255,255,255,0.1)'
                    },
                    beginAtZero: true
                }
            }
        }
    });
}