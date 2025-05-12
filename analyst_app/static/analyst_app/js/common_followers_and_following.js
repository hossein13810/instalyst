function load_popup_data_lists(target_db_id, user_db_id, mode) {
    let url = '';
    if (mode === 'fr_fr') {
        url = '/load_common_fr_fr_list/'
    } else if (mode === 'fg_fg') {
        url = '/load_common_fg_fg_list/'
    } else if (mode === 'fr_fg') {
        url = '/load_common_fr_fg_list/'
    } else if (mode === 'fg_fr') {
        url = '/load_common_fg_fr_list/'
    }
    let popup_div = document.getElementById('popup_div');
    popup_div.innerHTML = `<div class="users_list_div w_100" id="users_list_div"></div>`;
    let users_list_div = popup_div.getElementsByClassName('users_list_div')[0];
    $.ajax({
        type: 'POST',
        data: {
            'target_db_id': target_db_id,
            'user_db_id': user_db_id
        },
        url: url,
        success: async function (response) {
            for (let user of response) {
                users_list_div.innerHTML += `
                        <a href="/show_user_details_page/id_${user['instagram_id']}/">
                            <div class="one_user_div w_48 margin_bottom_10 w_100">
                                <img src="/files/${user['profile_image']}" alt="" id="img_${user['id']}">
                                <div class="no_img_div font_2 text_color_7" id="no_img_${user['id']}">NO IMG</div>
                                <div class="font_1 text_color_0 margin_left_10">${user['username']}</div>
                            </div>
                        </a>
                    `
            }
            for (let img of users_list_div.getElementsByTagName('img')) {
                if (!img.src.includes('files')) {
                    let id = img.id.split('_')[1];
                    document.getElementById(`no_img_${id}`).style.display = 'flex';
                    img.style.display = 'none';
                }
            }
            popup_div.innerHTML += `
                <div class="w_100 button_group_div">
                    <button class="button_element background_color_7 text_color_4 border_none font_1 margin_top_20 w_48" onclick="add_new_target()" id="add_target_button">Add Target</button>
                    <button class="button_element background_color_4 text_color_5 border_none font_1 margin_top_20 w_48" onclick="show_hide_popup('hide')" id="cancel_button">Cancel</button>
                </div>
            `
            show_hide_popup('show');
        }
    })
}