window.onload = () => {
    load_targets_data();
    set_add_as_target();
}

function set_add_as_target() {
    let target_user_name = document.getElementById('target_user_name');
    if (target_user_name.value !== 'None') {
        show_add_new_target_popup();
        let target_user_name_input = document.getElementById('target_user_name_input');
        target_user_name_input.value = target_user_name.value;
    }
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
                    <a href="/show_target_details_page/id_${target['db_id']}/">
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

function show_add_new_target_popup() {
    let popup_div = document.getElementById('popup_div');
    popup_div.innerHTML = `
        <div class="input_group_div w_100">
            <label class="font_2 text_color_7">Target UserName:</label>
            <input class="input_element background_color_3 font_1 border_7 text_color_7" aria-label="" autocomplete="off" id="target_user_name_input">
        </div>
        <div class="loading_div w_100 margin_top_20 display_none" id="add_new_target_loading_div">
            <span class="loader"></span>
        </div>
        <div class="w_100 button_group_div">
            <button class="button_element background_color_7 text_color_4 border_none font_1 margin_top_20 w_48" onclick="add_new_target()" id="add_target_button">Add Target</button>
            <button class="button_element background_color_4 text_color_5 border_none font_1 margin_top_20 w_48" onclick="show_hide_popup('hide')" id="cancel_button">Cancel</button>
        </div>
        `
    show_hide_popup('show');
}

function add_new_target() {
    let add_new_target_loading_div = document.getElementById('add_new_target_loading_div');
    let target_user_name_input = document.getElementById('target_user_name_input');
    let ajax_message_div = document.getElementById('ajax_message_div');

    if (target_user_name_input.value === '') {
        ajax_message_div.innerText = 'Please fill in the "Target UserName" field first'
        ajax_message_div.style.transform = 'translate(-50%, 0)';
        ajax_message_div.classList.add('message_error');
        hide_messages_div('ajax_message_div').then(r => {
        });
    } else {
        add_new_target_loading_div.classList.remove('display_none');
        disable_enable_popup('add_target_button', 'disable');
        $.ajax({
            type: 'POST',
            data: {
                'targets_user_name_list': [target_user_name_input.value].toString(),
                'scrap_functions': JSON.stringify({'scrap_target_main_info': null}),
            },
            url: `/scraper_class/`,
            success: async function (response) {
                if (response === 'success') {
                    load_targets_data();
                    add_new_target_loading_div.classList.add('display_none');
                    disable_enable_popup('add_target_button', 'enable');
                    show_hide_popup('hide');
                    ajax_message_div.innerText = 'A target was successfully added'
                    ajax_message_div.style.transform = 'translate(-50%, 0)';
                    ajax_message_div.classList.add('message_success');
                    hide_messages_div('ajax_message_div').then(r => {
                    });
                } else {
                    add_new_target_loading_div.classList.add('display_none');
                    disable_enable_popup('add_target_button', 'enable');
                    show_hide_popup('hide');
                    ajax_message_div.innerText = 'An unknown error has occurred'
                    ajax_message_div.style.transform = 'translate(-50%, 0)';
                    ajax_message_div.classList.add('message_error');
                    hide_messages_div('ajax_message_div').then(r => {
                    });
                }
            }
        })
    }
}