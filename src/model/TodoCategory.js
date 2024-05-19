
// lập trình2 hươớng đối tươợng5 (OOP)

// KHAI BÁO CLASS (KHAI BÁO BẢN PHÁC THẢO)
class TodoCategory {
    // HÀM KHƠỞI TẠO CHO CÁI NHÀ2
    constructor(name) {
      this.id = new Date().toString() + Math.random(1000);
      this.name = name;
    }
  }

  // NEW KEYWORD ĐỂ KHỞI TẠO 1 OBJECT INSTANCE MỚI DỰA TRÊN CLASS NAME
let workingTodoCategory = new TodoCategory('working')

let homeTodoCategory = new TodoCategory('home')

workingTodoCategory.name
export {TodoCategory}