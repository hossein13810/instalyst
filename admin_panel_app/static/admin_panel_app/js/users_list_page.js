function load_user_targets_list(user_db_id) {
    let popup_div = document.getElementById('popup_div');

    popup_div.style.flexDirection = 'column';
    popup_div.style.maxHeight = '500px'
    popup_div.style.width = '50%'

    popup_div.innerHTML = `
        <table class="table_element w_100">
        <thead>
            <tr>
                <th>#</th>
                <th>IMG</th>
                <th>User Name</th>
                <th>Full Name</th>
                <th>Insta ID</th>
            </tr>
        </thead>
        <tbody id="table_tbody"></tbody>
        </table>
        <div class="w_100 button_group_div">
            <button class="button_element background_color_4 text_color_5 border_none font_1 margin_top_20 w_100" onclick="show_hide_popup('hide')" id="cancel_button">Cancel</button>
        </div>
        `
    let table_tbody = document.getElementById('table_tbody');

    $.ajax({
        type: 'POST',
        data: {
            'user_db_id': user_db_id
        },
        url: `/load_user_targets/`,
        success: async function (response) {
            let number = 1;
            for (let comment of response) {
                console.log(comment)
                table_tbody.innerHTML += `
                    <tr>
                        <td class="number_td">${number}</td>
                        <td class="table_image_td"><div class="table_image_div"><img src="/files/${comment['target_db_data__profile_image']}" alt=""></div></td>
                        <td>${comment['target_db_data__username']}</td>
                        <td>${comment['target_db_data__full_name']}</td>
                        <td>${comment['target_db_data__instagram_id']}</td>
                    </tr>
                `
                number += 1;
            }
        }
    })

    show_hide_popup('show');
}