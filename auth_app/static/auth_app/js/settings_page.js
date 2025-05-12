function check_passwords() {
    let user_password_input_1 = document.getElementById('user_password_input_1');
    let user_password_input_2 = document.getElementById('user_password_input_2');
    let save_button = document.getElementById('save_button');

    if (user_password_input_1.value === user_password_input_2.value) {
        save_button.classList.remove('background_color_6', 'disabled_element');
        save_button.classList.add('background_color_7');
        save_button.disabled = false;
    } else {
        save_button.classList.add('background_color_6', 'disabled_element');
        save_button.classList.remove('background_color_7');
        save_button.disabled = true;
    }
}