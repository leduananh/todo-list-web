export function getCurrentDateFormatted() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1; // Tháng bắt đầu từ 0, nên cần cộng thêm 1
    var year = today.getFullYear();

    // Đảm bảo các giá trị có dạng mm và dd
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    // Trả về chuỗi định dạng dd/mm/yyyy
    return day + '/' + month + '/' + year
}