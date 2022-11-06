// This describes how arrays/lists work behind the scenes
// This is more of pseudo-code using list notation to define "list"
// "head" should return the first item in the list
// "tail" what is left of the list after the head is taken out
function_list_ref(items, n) {
  return n === 0 ? head(items) : list_ref(tail(items), n - 1);
}

const squares = list(1, 4, 9, 16, 25)

list_ref(squares, 3) // 16