function logout() {
    $.ajax({
        type: 'GET',
        url: `/logout_users/`,
        success: async function (response) {
            window.location.replace('/');
        }
    })
}

async function hide_messages_div(message_div_id) {
    let message_div = document.getElementById(message_div_id);
    await sleep(3000);
    message_div.style.transform = 'translate(-50%, -100%) scale(0.5)';
}

function show_hide_popup(mode) {
    let popup_back_div = document.getElementById('popup_back_div');
    let popup_div = document.getElementById('popup_div');

    if (mode === 'show') {
        popup_back_div.style.display = 'inline-block';
        popup_div.style.transform = 'translate(-50%, -50%)';
        popup_div.style.top = '50%';
    } else {
        popup_back_div.style.display = 'none';
        popup_div.style.transform = 'translate(-50%, -100%)';
        popup_div.style.top = '0';
    }
}

function disable_enable_popup(button_element_id, mode) {
    let popup_back_div = document.getElementById('popup_back_div');
    let popup_back_div_disable = document.getElementById('popup_back_div_disable');
    let button_element = document.getElementById(button_element_id);
    let cancel_button = document.getElementById('cancel_button');

    if (mode === 'disable') {
        popup_back_div.style.display = 'none';
        popup_back_div_disable.style.display = 'inline-block';
        button_element.disabled = true;
        cancel_button.disabled = true;
    } else {
        popup_back_div.style.display = 'inline-block';
        popup_back_div_disable.style.display = 'none';
        button_element.disabled = false;
        cancel_button.disabled = false;
    }
}

function copyText(element) {
    navigator.clipboard.writeText(element.innerText).then(function () {
        alert('Text copied.');
    }).catch(function (err) {
        alert('Error.');
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}