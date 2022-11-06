const make_accumulator = (initial_value) => {
  let accumulated_value = initial_value;
  return (accumulator) => {
    accumulated_value += accumulator;
    return accumulated_value
  }
}

const a = make_accumulator(5)