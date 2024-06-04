var checkbox = document.getElementById('myCheckbox');

// Lấy dữ liệu từ local storage khi trang web được tải
window.onload = function() {
    loadData();
};

// Lưu trạng thái của checkbox vào local storage khi trạng thái thay đổi
checkbox.addEventListener('change', function() {
    saveData();
});

// Hàm lưu trạng thái của checkbox vào local storage
function saveData() {
    var isChecked = checkbox.checked;
    
    // Lưu trạng thái của checkbox vào local storage
    localStorage.setItem('TODO_ITEM', isChecked);
}

// Hàm tải dữ liệu từ local storage và thiết lập trạng thái của checkbox
function loadData() {
    // Lấy dữ liệu từ local storage
    var savedState = localStorage.getItem('checkboxState');
    
    // Nếu dữ liệu tồn tại, thiết lập trạng thái của checkbox dựa trên dữ liệu đó
    if (savedState !== null) {
        checkbox.checked = savedState === 'true'; // Chuyển đổi từ chuỗi sang boolean
    } else {
        console.log('Không có dữ liệu trong local storage.');
    }
}