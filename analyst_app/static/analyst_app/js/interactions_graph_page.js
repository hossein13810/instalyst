let layer_number = 'layer_1';

window.onload = () => {
    target_analyst_operations();
}

function target_analyst_operations() {
    let target_db_id = document.getElementById('target_db_id').value;
    $.ajax({
        type: 'POST',
        data: {
            'target_db_id': target_db_id,
        },
        url: `/interactions_graph_page/`,
        success: async function (response) {
            const sortedArray = Object.entries(response['interactives_engagement_percentage_data']).sort((a, b) => a[1] - b[1]);
            let percentage_average_mid = 0;
            let percentage_average_max = 0;
            let percentage_average_min = 0;
            for (const value of sortedArray) {
                percentage_average_mid += Number(value[1]);
            }
            percentage_average_mid = percentage_average_mid / sortedArray.length;

            let percentage_average_max_count = 0;
            for (const value of sortedArray) {
                if (Number(value[1]) > percentage_average_mid) {
                    percentage_average_max_count += 1;
                    percentage_average_max += Number(value[1]);
                }
            }
            percentage_average_max = percentage_average_max / percentage_average_max_count;

            let percentage_average_min_count = 0;
            for (const value of sortedArray) {
                if (Number(value[1]) < percentage_average_mid) {
                    percentage_average_min_count += 1;
                    percentage_average_min += Number(value[1]);
                }
            }
            percentage_average_min = percentage_average_min / percentage_average_min_count;

            let percentages_layers_dict = {
                'layer_1': [],
                'layer_2': [],
                'layer_3': [],
                'layer_4': [],
            }
            for (const value of sortedArray) {
                if (percentage_average_max <= Number(value[1])) {
                    percentages_layers_dict['layer_1'].push(value)
                } else if (percentage_average_mid <= Number(value[1]) && Number(value[1]) < percentage_average_max) {
                    percentages_layers_dict['layer_2'].push(value)
                } else if (percentage_average_min <= Number(value[1]) && Number(value[1]) < percentage_average_mid) {
                    percentages_layers_dict['layer_3'].push(value)
                } else if (Number(value[1]) < percentage_average_min) {
                    percentages_layers_dict['layer_4'].push(value)
                }
            }

            await generate_graph_data(percentages_layers_dict, response['instagram_targets_id'])
        }
    })
}

let all_nodes_len = 0;

async function generate_graph_data(percentages_layers_dict, core_instagram_id) {
    let data = {
        "nodes": [
            {
                "id": `${core_instagram_id}`,
                "height": 50,
                "x": 0,
                "y": 0,
                "fill": {
                    "src": `/files/profile_images/${core_instagram_id}.jpg`
                }
            },
        ],
        "edges": []
    }
    for (const [key, value] of Object.entries(percentages_layers_dict)) {
        let y;
        let spacing = -(value.length * 50) / 2;
        if (key === 'layer_1') {
            y = 100;
        } else if (key === 'layer_2') {
            y = 200;
        } else if (key === 'layer_3') {
            y = 300;
        } else if (key === 'layer_4') {
            y = 400;
        }
        for (let node of value) {
            let image_url;

            function checkImageExists(url) {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = url;

                    img.onload = () => resolve(url);
                    img.onerror = () => resolve('/files/profile_images/no_img.jpg');
                });
            }

            await checkImageExists(`/files/profile_images/${node[0]}.jpg`).then((finalSrc) => {
                image_url = finalSrc;
            });

            data['nodes'].push({
                "id": `${node[0]} - ${node[1]}`,
                "height": 40,
                "x": spacing,
                "y": y,
                url: `/show_user_details_page/id_${node[0]}/`,
                "fill": {
                    "src": image_url
                }
            })
            data['edges'].push(
                {"from": `${node[0]} - ${node[1]}`, "to": `${core_instagram_id}`}
            )
            spacing += 50;
        }
        design_graph(data, core_instagram_id, key);
    }
    let layer_total_label = document.getElementById('layer_total_label');
    layer_total_label.innerHTML += ` <span class="text_color_0">(${all_nodes_len})</span>`
}

function design_graph(data, core_instagram_id, layer) {
    let layer_label = document.getElementById(`${layer}_label`)
    let layer_len = data.nodes.length - all_nodes_len - 1;
    layer_label.innerHTML += ` <span class="text_color_0">(${layer_len})</span>`
    all_nodes_len += layer_len;
    var chart = anychart.graph(data);
    chart.layout().type('fixed');

    chart.title(`Network Graph showing the account: ${core_instagram_id} interactives`);

    var nodes = chart.nodes();
    nodes.normal().height(30);
    nodes.hovered().height(45);
    nodes.selected().height(45);

    nodes.normal().stroke("#ffffff", 1);
    nodes.hovered().stroke("#333333", 2);
    nodes.selected().stroke("#333333", 2);

    chart.nodes().labels().enabled(false);

    chart.nodes().labels().format("{%id}");
    chart.nodes().labels().fontSize(12);
    chart.nodes().labels().fontWeight(600);

    chart.background().fill('#191C24');

    chart.container(`container_${layer}`).draw();
    chart.listen('click', function (e) {
        var tag = e.domTarget.tag;
        if (tag) {
            if (tag.type === 'node') {
                var url;
                for (var i = 0; i < data.nodes.length; i++) {
                    if (data.nodes[i].id === tag.id) {
                        url = data.nodes[i].url;
                        break;
                    }
                }
                window.open(url);
            }
        }
    });

    document.getElementsByClassName('anychart-credits')[0].style.display = 'none';
    document.getElementById(`container_${layer}`).getElementsByTagName('div')[0].style.borderRadius = '7px';
    let all_path = document.getElementsByTagName('path');
    for (let path of all_path) {
        path.addEventListener("mouseover", function () {
            path.style.cursor = "pointer";
        });
        path.addEventListener("mouseout", function () {
            path.style.cursor = "inherit";
        });
    }
}

function show_layer(layer) {
    document.getElementById(`container_${layer}`).classList.remove('display_none');
    document.getElementById(`container_${layer_number}`).classList.add('display_none');
    layer_number = layer;
}