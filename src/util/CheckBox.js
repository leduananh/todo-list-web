// var checkbox = document.getElementById('${Todo.id}');

// // Lấy dữ liệu từ local storage khi trang web được tải
// window.onload = function() {
//     loadData();
// };

// // Lưu trạng thái của checkbox vào local storage khi trạng thái thay đổi
// checkbox.addEventListener('change', function() {
//     saveData();
// });

// Hàm lưu trạng thái của checkbox vào local storage
function saveData(isChecked) {
    const LoadTodoItem = JSON.parse(localStorage.getItem('TODO_ITEM'))
    //  lập danh sách ID
    let ids = LoadTodoItem.map(item => item.id)
    // chạy toàn bộ danh sách id
    for (let id of ids) {
        var checkbox = document.getElementById(id);
        if (checkbox === undefined || checkbox === null) {
            continue
        }
        var STTChecked = checkbox.checked;
        // tìm object của thẻ checked
        const TodoItemHienTai = LoadTodoItem.find(todoitem => todoitem.id === id)
        //  cập nhập trạng thái checked
        TodoItemHienTai.isChecked = STTChecked
        //  luu trang thai checked
        let index = LoadTodoItem.findIndex(Todoitem => Todoitem.id === TodoItemHienTai.id)
        LoadTodoItem[index] = TodoItemHienTai
        // Lưu trạng thái của checkbox vào local storage
        localStorage.setItem('TODO_ITEM', JSON.stringify(LoadTodoItem));
        if (isChecked) {
            alert(" Đã hoàn thành");
        } else {
            alert(" Chưa hoàn thành");
        }
    }
}

// Hàm tải dữ liệu từ local storage và thiết lập trạng thái của checkbox
function loadData() {
    const LoadTodoItem = JSON.parse(localStorage.getItem('TODO_ITEM'))
    //  lập danh sách ID
    let ids = LoadTodoItem.map(item => item.id)
    for (let id of ids) {
        var checkbox = document.getElementById(id)
        if (checkbox === undefined || checkbox === null) {
            continue
        }
        // Lấy dữ liệu từ local storage
        const TodoItemHienTai = LoadTodoItem.find(todoitem => todoitem.id === id)
        var savedState = TodoItemHienTai.isChecked
        // Nếu dữ liệu tồn tại, thiết lập trạng thái của checkbox dựa trên dữ liệu đó
        if (savedState !== null) {
            checkbox.checked = savedState; // Chuyển đổi từ chuỗi sang boolean
        } else {
            console.log('Không có dữ liệu trong local storage.');
        }
    }
}
const checkBox = {
    saveData,
    loadData
}
export { checkBox }