class BankAccount {
  public readonly accNo: string;
  public accName: string;
  private _balance: number;
  constructor(accNo: string, accName: string, balance: number) {
    this.accNo = accNo;
    this.accName = accName;
    this._balance = balance;
  }
  //   getter
  get balance(): number {
    return this._balance;
  }
  //  setter
  set deposit(amount: number) {
    this._balance = amount;
  }
  getBalance() {
    console.log(`My Current Account Balance is ${this._balance}`);
  }
  addDeposit(amount: number) {
    this._balance += amount;
  }
}

const myAccount = new BankAccount("Sazzad-897", "Sazzad hossain", 20);
// myAccount.getBalance();
// myAccount.addDeposit(30);
// myAccount.getBalance();
myAccount.deposit = 50;
