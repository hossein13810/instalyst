window.onload = () => {
    load_targets_data();
}

function load_targets_data() {
    let targets_list_div = document.getElementById('targets_list_div');
    targets_list_div.innerHTML = '';
    $.ajax({
        type: 'GET',
        url: `/load_targets_data/`,
        success: async function (response) {
            for (let target of response) {
                targets_list_div.innerHTML += `
                    <a href="/analyses_menu_page/id_${target['db_id']}/">
                        <div class="one_target_div margin_top_20 margin_bottom_20">
                            <img src="${target['profile_image']}" alt="">
                            <div class="target_hover_data_div">
                                <h2 class="font_1 text_color_7">${target['username']}</h2>
                            </div>
                        </div>
                    </a>
                `
            }
        }
    })
}
