window.onload = () => {
    get_chart_data();
}

function get_chart_data() {
    let target_db_id = document.getElementById('target_db_id').value;
    let chart_mode = document.getElementById('chart_mode').value;

    let all_times_list = [];
    let all_lens_list = [];

    let posts_lens_list = [];

    let stories_lens_list = [];
    $.ajax({
        type: 'POST',
        data: {
            'target_db_id': target_db_id,
            'chart_mode': chart_mode,
        },
        url: '/intractions_timeline_page/',
        success: async function (response) {
            for (let key in response['all_data_dict']) {
                all_times_list.push(key);
                all_lens_list.push(Number(response['all_data_dict'][key]));
            }
            for (let key in response['post_data_dict']) {
                posts_lens_list.push(Number(response['post_data_dict'][key]));
            }
            for (let key in response['story_data_dict']) {
                stories_lens_list.push(Number(response['story_data_dict'][key]));
            }
            line_graph(all_times_list, all_lens_list, posts_lens_list, stories_lens_list);
        }
    })
}

function line_graph(all_times_list, all_lens_list, posts_lens_list, stories_lens_list) {
    const ctx = document.getElementById('myLineChart').getContext('2d');
    const myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: all_times_list,
            datasets: [
                {
                    label: 'All Times List',
                    data: all_lens_list,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    tension: 0.4
                },
                {
                    label: 'Posts Times List',
                    data: posts_lens_list,
                    backgroundColor: 'rgba(176,192,75,0.2)',
                    borderColor: 'rgb(184,192,75)',
                    borderWidth: 2,
                    tension: 0.4
                },
                {
                    label: 'Stories Times List',
                    data: stories_lens_list,
                    backgroundColor: 'rgba(192,75,75,0.2)',
                    borderColor: 'rgb(192,85,75)',
                    borderWidth: 2,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                }
            },
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