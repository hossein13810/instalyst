window.onload = () => {
    get_names_data();
}

function get_names_data() {
    let target_db_id = document.getElementById('target_db_id').value;
    let char_len = document.getElementById('char_len').value;
    let word_len = document.getElementById('word_len').value;

    let names_list = [];
    let lens_list = [];
    $.ajax({
        type: 'POST',
        data: {
            'target_db_id': target_db_id,
            'char_len': char_len,
        },
        url: '/duplicate_names_page/',
        success: async function (response) {
            let number_count = 0;
            for (let key in response['result_dict']) {
                if (number_count < Number(word_len)) {
                    if (Number(response['result_dict'][key][1]) > 1) {
                        names_list.push(response['result_dict'][key][0]);
                        lens_list.push(Number(response['result_dict'][key][1]));
                    }
                    number_count += 1;
                }
            }
            bar_graph(names_list, lens_list);
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