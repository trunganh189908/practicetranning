class Stack {
    constructor() {
        this.items = []
        this.count = 1
    }

    // Add element to top of stack
    push(element) {
        this.items[this.count] = element
        console.log(`${element} Số lượng nhập đợt ${this.count}`)
        this.count += 1
        return this.count - 1
    }

    // Return and remove top element in stack
    // Return undefined if stack is empty
    pop() {
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count - 1]
        this.count -= 1
        console.log(`${deleteItem} Xóa thông tin nhập`)
        return deleteItem
    }

    // Check top element in stack
    peek() {
        console.log(`Số lượng nhập mới nhất ${this.items[this.count - 1]}`)
        return this.items[this.count - 1]
    }

    // Check if stack is empty
    isEmpty() {
        console.log(this.count == 0 ? 'Chưa có thông tin nhập hàng' : 'Đã nhập')
        return this.count == 0
    }

    // Check size of stack
    size() {
        console.log(` Tổng cố lượng nhập ${this.count}`)
        return this.count
    }

    // Print elements in stack
    print() {
        let str = ''
        for(let i = 0; i < this.count; i++) {
            str += this.items[i] + ' '
        }
        return str
    }

    // Clear stack
    clear() {
        this.items = []
        this.count = 0
        console.log('Thông tin đã bị xóa')
        return this.items
    }
}

const stack = new Stack()

stack.isEmpty()

stack.push(100)
stack.push(200)
stack.push(300)
stack.push(400)

stack.peek()

stack.push(300)

console.log(stack.print())

stack.pop()

stack.pop()



console.log(stack.print())

stack.size()

stack.clear()

stack.isEmpty()