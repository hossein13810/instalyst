let users_page_number = 1;
let comments_page_number = 1;
let post_db_id = 1;

function load_post_likes_data(post_db_id_arg, page_number_arg = 1) {
    let popup_div = document.getElementById('popup_div');
    post_db_id = post_db_id_arg;

    let search_value = document.getElementById('search_value');
    if (search_value !== null) {
        search_value = search_value.value;
    } else {
        search_value = '';
    }

    $.ajax({
        type: 'POST',
        data: {
            'post_db_id': post_db_id_arg,
            'search_value': search_value,
            'page': page_number_arg
        },
        url: '/load_post_likes_data/',
        success: async function (response) {
            if (response !== 'None') {
                if (page_number_arg === 1) {
                    popup_div.innerHTML = `
                        <div class="input_group_div w_100">
                            <input class="input_element font_1 text_color_7 border_none w_100 background_color_4 margin_bottom_20" placeholder="UserName" name="user_name_input" onkeyup="search_likes_list()" value="${search_value}" id="search_value" autocomplete="off">
                        </div>
                        <div class="users_list_div w_100" id="users_list_div" onscroll="on_users_list_scroll()"></div>`;
                    users_page_number = 1;
                }
                let users_list_div = popup_div.getElementsByClassName('users_list_div')[0];
                for (let user of response) {
                    users_list_div.innerHTML += `
                        <a href="/show_user_details_page/id_${user['instagram_id']}/" target="_blank">
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
                if (page_number_arg === 1) {
                    popup_div.innerHTML += `
                        <div class="w_100 button_group_div">
                            <button class="button_element background_color_4 text_color_5 border_none font_1 margin_top_20 w_100" onclick="show_hide_popup('hide')" id="cancel_button">Cancel</button>
                        </div>
                    `
                    show_hide_popup('show');
                }
            }
            let search_input = document.getElementById('search_value');
            search_input.focus();
            search_input.setSelectionRange(search_input.value.length, search_input.value.length);
        }
    })
}

function load_post_comments_data(post_db_id_arg, page_number_arg = 1) {
    let popup_div = document.getElementById('popup_div');
    post_db_id = post_db_id_arg;

    $.ajax({
        type: 'POST',
        data: {
            'post_db_id': post_db_id_arg,
            'page': page_number_arg
        },
        url: '/load_post_comments_data/',
        success: async function (response) {
            if (response !== 'None') {
                if (page_number_arg === 1) {
                    popup_div.innerHTML = `<div class="comments_list_div w_100" id="comments_list_div" onscroll="on_comments_list_scroll()"></div>`;
                    users_page_number = 1;
                }
                let comments_list_div = popup_div.getElementsByClassName('comments_list_div')[0];
                for (let comment of response) {
                    comments_list_div.innerHTML += `
                        <div class="one_comment_div w_48 margin_bottom_10 w_100">
                            <a href="/show_user_details_page/id_${comment['instagram_id']}/" target="_blank">
                                <div class="image_div tooltip_container">
                                    <img src="/files/${comment['profile_image']}" alt="" id="img_${comment['id']}">
                                    <div class="tooltip_text">
                                        <div class="font_1" dir="auto">${comment['full_name']}</div>
                                        <div class="font_1">${comment['instagram_id']}</div>
                                    </div>
                                </div>
                            </a>
                            
                            <div class="no_img_div font_2 text_color_7" id="no_img_${comment['id']}">NO IMG</div>
                            <div class="font_1 text_color_0 margin_left_10 comment_text_div" dir="auto">
                                ${comment['text']}
                                <span class="comment_date_time">${comment['created_at'].split('T')[0]} - ${comment['created_at'].split('T')[1].replace('Z', '')}</span>
                            </div>
                        </div>
                    `
                }
                for (let img of comments_list_div.getElementsByTagName('img')) {
                    if (!img.src.includes('files')) {
                        let id = img.id.split('_')[1];
                        document.getElementById(`no_img_${id}`).style.display = 'flex';
                        img.style.display = 'none';
                    }
                }
                if (page_number_arg === 1) {
                    popup_div.innerHTML += `
                        <div class="w_100 button_group_div">
                            <button class="button_element background_color_4 text_color_5 border_none font_1 margin_top_20 w_100" onclick="show_hide_popup('hide')" id="cancel_button">Cancel</button>
                        </div>
                    `
                    show_hide_popup('show');
                }
            }
        }
    })
}

function on_users_list_scroll() {
    let popup_div = document.getElementById('popup_div');
    let users_list_div = popup_div.getElementsByClassName('users_list_div')[0];
    const isAtBottom = users_list_div.scrollHeight - users_list_div.scrollTop === users_list_div.clientHeight;

    if (isAtBottom) {
        users_page_number += 1;
        load_post_likes_data(post_db_id, users_page_number);
    }
}

function on_comments_list_scroll() {
    let popup_div = document.getElementById('popup_div');
    let comments_list_div = popup_div.getElementsByClassName('comments_list_div')[0];
    const isAtBottom = comments_list_div.scrollHeight - comments_list_div.scrollTop === comments_list_div.clientHeight;

    if (isAtBottom) {
        comments_page_number += 1;
        load_post_comments_data(post_db_id, comments_page_number);
    }
}

function search_likes_list() {
    load_post_likes_data(post_db_id, 1);
}