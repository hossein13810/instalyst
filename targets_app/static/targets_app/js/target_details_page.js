let followers_followings_page_number = 1;
let posts_page_number = 1;
let stories_page_number = 1;
let highlights_stories_page_number = 1;
let highlight_db_id;
let url;

window.onload = () => {
    load_target_posts_data();

    let highlight_long_div = document.getElementById('highlight_long_div');
    let highlight_len = highlight_long_div.getElementsByClassName('one_highlight_div').length;
    highlight_long_div.style.width = `${(highlight_len * 100) + 500}px`
}

function load_target_posts_data(page_number_arg = 1) {
    let target_db_id_input = document.getElementById('target_db_id_input');
    let target_posts_list_div = document.getElementById('target_posts_list_div');

    $.ajax({
        type: 'POST',
        data: {
            'target_db_id': target_db_id_input.value,
            'page': page_number_arg
        },
        url: `/load_target_posts_data/`,
        success: async function (response) {
            if (response !== 'None') {
                for (let post of response) {
                    target_posts_list_div.innerHTML += `
                        <a href="/show_post_details_page/id_${post['id']}/">
                            <div class="one_post_div margin_top_10 margin_bottom_10">
                                <div class="post_counts_div font_1 text_color_0">
                                    <div class="one_counter_div_post">
                                        <img src="/static/targets_app/icons/like.png" alt="">
                                        <h3 class="font_2 text_color_7">${post['like_count']}</h3>
                                    </div>
                                    <div class="one_counter_div_post">
                                        <img src="/static/targets_app/icons/comment.png" alt="">
                                        <h3 class="font_2 text_color_7">${post['comment_count']}</h3>
                                    </div>
                                </div>
                                <img src="/files/${post['cover_image']}" alt="">
                            </div>
                        </a>
                    `
                }
            }
        }
    })
}

function set_stories_popup_contents(page_number_arg = 1) {
    let popup_div = document.getElementById('popup_div');
    let target_db_id_input = document.getElementById('target_db_id_input');

    popup_div.style.width = '500px';

    $.ajax({
        type: 'POST',
        data: {
            'target_db_id': target_db_id_input.value,
            'page': page_number_arg,
        },
        url: `/load_target_stories_data/`,
        success: async function (response) {
            if (page_number_arg === 1) {
                popup_div.innerHTML = '<div class="stories_list_div w_100" id="stories_list_div" onscroll="on_stories_scroll()"></div>';
                stories_page_number = 1;
            }
            let stories_list_div = popup_div.getElementsByClassName('stories_list_div')[0];
            for (let story of response) {
                stories_list_div.innerHTML += `
                    <a href="/show_story_details_page/id_${story['id']}/">
                         <div class="one_story_div margin_top_10 margin_bottom_10">
                            <div class="story_title_div font_2 text_color_0">${story['taken_at'].split('T')[0]} - ${story['taken_at'].split('T')[1].replace('Z', '')}</div>
                            <img src="/files/${story['cover_image']}" alt="">
                        </div>
                    </a>
                `
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
    })
}

function set_followers_followings_popup_contents(mode, page_number_arg = 1) {
    let popup_div = document.getElementById('popup_div');
    let target_db_id_input = document.getElementById('target_db_id_input');

    let search_value = document.getElementById('search_value');
    if (search_value !== null) {
        search_value = search_value.value;
    } else {
        search_value = '';
    }

    if (mode === 'followers') {
        url = '/load_target_followers_data/';
    } else if (mode === 'followings') {
        url = '/load_target_followings_data/';
    }

    $.ajax({
        type: 'POST',
        data: {
            'target_db_id': target_db_id_input.value,
            'search_value': search_value,
            'page': page_number_arg
        },
        url: url,
        success: async function (response) {
            if (response !== 'None') {
                if (page_number_arg === 1) {
                    popup_div.innerHTML = `
                        <div class="input_group_div w_100">
                            <input class="input_element font_1 text_color_7 border_none w_100 background_color_4 margin_bottom_20" placeholder="UserName" id="search_value" onkeyup="search_fr_fg_list()" value="${search_value}" autocomplete="off">
                        </div>
                        <div class="users_list_div w_100" id="users_list_div" onscroll="on_followers_followings_scroll()"></div>`;
                    followers_followings_page_number = 1;
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
                    if (!img.src.includes('files') || !img.src.includes('profile_images')) {
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

function load_highlight_stories_data(highlight_db_id_arg, page_number_arg) {
    let popup_div = document.getElementById('popup_div');
    highlight_db_id = highlight_db_id_arg;

    popup_div.style.width = '500px';
    $.ajax({
        type: 'POST',
        data: {
            'highlight_db_id': highlight_db_id_arg,
            'page': page_number_arg
        },
        url: '/load_highlight_stories_data/',
        success: async function (response) {
            if (response !== 'None') {
                if (page_number_arg === 1) {
                    popup_div.innerHTML = '<div class="stories_list_div w_100" id="highlight_stories_list_div" onscroll="on_highlight_stories_scroll()"></div>';
                    highlights_stories_page_number = 1;
                }
                let highlight_stories_list_div = document.getElementById('highlight_stories_list_div');
                for (let story of response) {
                    highlight_stories_list_div.innerHTML += `
                    <a href="/show_highlight_story_details_page/id_${story['id']}/">
                        <div class="one_story_div margin_top_10 margin_bottom_10">
                            <div class="story_title_div font_2 text_color_0">${story['taken_at'].split('T')[0]} - ${story['taken_at'].split('T')[1].replace('Z', '')}</div>
                            <img src="/files/${story['cover_image']}" alt="">
                        </div>
                    </a>
                `
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

function on_followers_followings_scroll() {
    let popup_div = document.getElementById('popup_div');
    let users_list_div = popup_div.getElementsByClassName('users_list_div')[0];
    const isAtBottom = users_list_div.scrollHeight - users_list_div.scrollTop === users_list_div.clientHeight;

    if (isAtBottom) {
        followers_followings_page_number += 1;
        set_followers_followings_popup_contents(null, followers_followings_page_number);
    }
}

function on_posts_scroll() {
    let target_details_div = document.getElementById('target_details_div');
    const isAtBottom = target_details_div.scrollHeight - target_details_div.scrollTop === target_details_div.clientHeight;

    if (isAtBottom) {
        posts_page_number += 1;
        load_target_posts_data(posts_page_number);
    }
}

function on_stories_scroll() {
    let stories_list_div = document.getElementById('stories_list_div');
    const isAtBottom = stories_list_div.scrollHeight - stories_list_div.scrollTop === stories_list_div.clientHeight;

    if (isAtBottom) {
        stories_page_number += 1;
        set_stories_popup_contents(stories_page_number);
    }
}

function on_highlight_stories_scroll() {
    let highlight_stories_list_div = document.getElementById('highlight_stories_list_div');
    const isAtBottom = highlight_stories_list_div.scrollHeight - highlight_stories_list_div.scrollTop === highlight_stories_list_div.clientHeight;

    if (isAtBottom) {
        highlights_stories_page_number += 1;
        load_highlight_stories_data(highlight_db_id, highlights_stories_page_number);
    }
}

function search_fr_fg_list() {
    set_followers_followings_popup_contents(null, 1);
}
