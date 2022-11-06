const make_account = (balance: number, password: string) => {
  let rate_limiter = 0;
  function withdraw(amount: number) {
    if (balance >= amount) {
      balance -= amount;
      return balance;
    } else {
      return "Insufficient funds"
    }
  }
  function deposit(amount: number) {
    balance += amount;
    return balance;
  }
  function dispatch(request: string, verify_password: string) {
    if (password !== verify_password) {
      if (rate_limiter >= 7) {
        return () => "Call the Po Po!!"
      }
      rate_limiter++
      return () => "Invalid Password"
    }
    return request === "withdraw" ? withdraw : request === "deposit" ? deposit : () => "Invalid request " + request;
  }
  return dispatch;
}

const acc = make_account(100, "liability")
console.log(acc("withdraw", "liabilit")(20))
console.log(acc("withdraw", "liabilit")(20))
console.log(acc("withdraw", "liabilit")(20))
console.log(acc("withdraw", "liabilit")(20))
console.log(acc("withdraw", "liabilit")(20))
console.log(acc("withdraw", "liabilit")(20))
console.log(acc("withdraw", "liabilit")(20))
console.log(acc("withdraw", "liabilit")(20))