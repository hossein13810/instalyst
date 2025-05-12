let ajax_request;
let analyze_message_len = 0;
window.onload = () => {
    check_all_targets_button_status();
    setInterval(get_messages, 100);
}

function check_all_targets_function(button_element) {
    let targets_list_sub_div = document.getElementById('targets_list_sub_div').getElementsByTagName('input');
    for (let check_input of targets_list_sub_div) {
        check_input.checked = button_element.innerText === 'Check All';
    }
    check_all_targets_button_status();
}

function check_all_targets_button_status() {
    let check_all_targets_button = document.getElementById('check_all_targets_button');
    let targets_list_sub_div = document.getElementById('targets_list_sub_div').getElementsByTagName('input');
    let all_check_status = true;

    for (let check_input of targets_list_sub_div) {
        if (!check_input.checked) {
            all_check_status = false;
            break;
        }
    }

    if (all_check_status) {
        check_all_targets_button.innerText = 'UnCheck All';
    } else {
        check_all_targets_button.innerText = 'Check All';
    }
}

function check_all_options_function(button_element) {
    let options_check_list_div = document.getElementById('options_check_list_div').getElementsByTagName('input');
    for (let check_input of options_check_list_div) {
        check_input.checked = button_element.checked;
    }
    check_all_options_check_status();
}

function check_all_options_check_status() {
    let all_check = document.getElementById('all_check');
    let options_check_list_div = document.getElementById('options_check_list_div').getElementsByTagName('input');
    let all_check_status = true;

    for (let check_input of options_check_list_div) {
        if (check_input.id !== 'all_check') {
            if (!check_input.checked) {
                all_check_status = false;
                break;
            }
        }
    }

    all_check.checked = all_check_status;
}

async function set_options_details_popup(mode) {
    let popup_div = document.getElementById('popup_div');
    popup_div.innerHTML = '';
    if (mode === 'followers' || mode === 'followings') {
        popup_div.innerHTML += `
            <div class="check_input_div w_100">
                <input class="check_input_div" type="checkbox" aria-label="" id="${mode}_p_img_check">
                <label class="font_1 text_color_0" for="${mode}_p_img_check">Download Profiles Image</label>
            </div>
        `
    } else if (mode === 'posts_and_reels') {
        popup_div.innerHTML += `
            <div class="check_input_div w_100 margin_bottom_10">
                <input class="check_input_div" type="checkbox" aria-label="" id="${mode}_download_check">
                <label class="font_1 text_color_0" for="${mode}_download_check">Download Post Content</label>
            </div>
            <div class="check_input_div w_100 margin_bottom_10">
                <input class="check_input_div" type="checkbox" aria-label="" id="${mode}_likes_check">
                <label class="font_1 text_color_0" for="${mode}_likes_check">Scrap Likes Data</label>
            </div>
            <div class="check_input_div w_100 margin_bottom_10">
                <input class="check_input_div" type="checkbox" aria-label="" id="${mode}_comments_check">
                <label class="font_1 text_color_0" for="${mode}_comments_check">Scrap Comments Data</label>
            </div>
        `
    }
    popup_div.innerHTML += `
        <div class="w_100 button_group_div">
            <button class="button_element background_color_7 text_color_4 border_none font_1 margin_top_20 w_48" onclick="set_popup_changes('${mode}')" id="add_target_button">Set Changes</button>
            <button class="button_element background_color_4 text_color_5 border_none font_1 margin_top_20 w_48" onclick="show_hide_popup('hide')" id="cancel_button">Cancel</button>
        </div>
    `
    show_hide_popup('show');
    if (mode === 'followers' || mode === 'followings') {
        let options_details = document.getElementById(`${mode}_options_details`);
        document.getElementById(`${mode}_p_img_check`).checked = options_details.innerText === '(P_IMG: True)';
    } else if (mode === 'posts_and_reels') {
        let options_details = document.getElementById(`${mode}_options_details`).innerText.replace('(', '').replace(')', '').split(' ノ ');
        document.getElementById(`${mode}_download_check`).checked = options_details[0] === 'Download: True';
        document.getElementById(`${mode}_likes_check`).checked = options_details[1] === 'Likes: True';
        document.getElementById(`${mode}_comments_check`).checked = options_details[2] === 'Comments: True';
    }
}

function set_popup_changes(mode) {
    if (mode === 'followers' || mode === 'followings') {
        let p_img_check = document.getElementById(`${mode}_p_img_check`);
        let options_details = document.getElementById(`${mode}_options_details`);
        if (p_img_check.checked) {
            options_details.innerText = '(P_IMG: True)'
        } else {
            options_details.innerText = '(P_IMG: False)'
        }
    } else if (mode === 'posts_and_reels') {
        let posts_and_reels_download_check = document.getElementById(`${mode}_download_check`);
        let posts_and_reels_likes_check = document.getElementById(`${mode}_likes_check`);
        let posts_and_reels_comments_check = document.getElementById(`${mode}_comments_check`);
        let options_details = document.getElementById(`${mode}_options_details`);
        let main_text_str = '(';

        if (posts_and_reels_download_check.checked) {
            main_text_str += 'Download: True ノ '
        } else {
            main_text_str += 'Download: False ノ '
        }

        if (posts_and_reels_likes_check.checked) {
            main_text_str += 'Likes: True ノ '
        } else {
            main_text_str += 'Likes: False ノ '
        }

        if (posts_and_reels_comments_check.checked) {
            main_text_str += 'Comments: True)'
        } else {
            main_text_str += 'Comments: False)'
        }
        options_details.innerText = main_text_str;
    }
    show_hide_popup('hide');
}

function start_scraping() {
    let targets_list_sub_div = document.getElementById('targets_list_sub_div');
    let options_check_list_div = document.getElementById('options_check_list_div');
    let ajax_message_div = document.getElementById('ajax_message_div');

    let targets_list = [];
    for (let target of targets_list_sub_div.getElementsByTagName('input')) {
        if (target.checked) {
            targets_list.push(target.id.split('_')[1])
        }
    }

    let options_data_dict = {};
    for (let option of options_check_list_div.getElementsByTagName('input')) {
        if (option.id !== 'all_check') {
            if (option.checked) {
                if (option.id === 'followers_check') {
                    options_data_dict[option.id] = document.getElementById('followers_options_details').innerText;
                } else if (option.id === 'followings_check') {
                    options_data_dict[option.id] = document.getElementById('followings_options_details').innerText;
                } else if (option.id === 'post_and_reels_check') {
                    options_data_dict[option.id] = document.getElementById('posts_and_reels_options_details').innerText.replaceAll(' ノ ', ' __ ');
                } else {
                    options_data_dict[option.id] = null;
                }
            }
        }
    }

    set_elements_disable('disable');
    ajax_request = $.ajax({
        type: 'POST',
        data: {
            'targets_user_name_list': targets_list.toString(),
            'scrap_functions': JSON.stringify(options_data_dict),
        },
        url: `/scraper_class/`,
        success: async function (response) {
            if (response === 'success') {
                set_elements_disable('enable');
                ajax_message_div.innerText = 'Follower data was successfully extracted'
                ajax_message_div.style.transform = 'translate(-50%, 0)';
                ajax_message_div.classList.add('message_success');
                hide_messages_div('ajax_message_div').then(r => {
                });
            } else {
                set_elements_disable('enable');
                ajax_message_div.innerText = 'An unknown error has occurred'
                ajax_message_div.style.transform = 'translate(-50%, 0)';
                ajax_message_div.classList.add('message_error');
                hide_messages_div('ajax_message_div').then(r => {
                });
            }
        }
    })
}

function stop_scraping() {
    let ajax_message_div = document.getElementById('ajax_message_div');
    if (ajax_request) {
        $.ajax({
            type: 'GET',
            url: '/stop_scraping/',
            success: function (response) {
                ajax_message_div.innerText = 'The scraping operation was successfully stopped'
                ajax_message_div.style.transform = 'translate(-50%, 0)';
                ajax_message_div.classList.add('message_success');
                hide_messages_div('ajax_message_div').then(r => {
                });
            }
        });

        ajax_request.abort();
        ajax_request = null;
        set_elements_disable('enable');
    }
}

function set_elements_disable(mode) {
    let strat_scrap_button = document.getElementById('strat_scrap_button');
    let stop_scrap_button = document.getElementById('stop_scrap_button');
    let options_check_list_div = document.getElementById('options_check_list_div');
    let targets_list_sub_div = document.getElementById('targets_list_sub_div');
    let check_all_targets_button = document.getElementById('check_all_targets_button');
    if (mode === 'enable') {
        strat_scrap_button.classList.remove('display_none');
        stop_scrap_button.classList.add('display_none');
        for (let input of options_check_list_div.getElementsByTagName('input')) {
            input.disabled = false;
        }
        for (let input of targets_list_sub_div.getElementsByTagName('input')) {
            input.disabled = false;
        }
        check_all_targets_button.disabled = false;
    } else {
        strat_scrap_button.classList.add('display_none');
        stop_scrap_button.classList.remove('display_none');
        for (let input of options_check_list_div.getElementsByTagName('input')) {
            input.disabled = true;
        }
        for (let input of targets_list_sub_div.getElementsByTagName('input')) {
            input.disabled = true;
        }
        check_all_targets_button.disabled = true;
    }

}

function get_messages() {
    let analyzer_div = document.getElementById('analyzer_div');
    if (analyze_message_len >= 100) {
        analyzer_div.innerHTML = '';
        analyze_message_len = 0;
    }
    $.ajax({
        type: 'GET',
        url: `/send_operations_messages/`,
        success: async function (response) {
            if (response !== 'None') {
                analyzer_div.innerHTML += response;
                analyzer_div.scrollTo({top: analyzer_div.scrollHeight, behavior: "smooth"});
                analyze_message_len += 1;
            }
        }
    })
}