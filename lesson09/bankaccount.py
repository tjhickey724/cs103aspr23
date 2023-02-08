'''
  BankAccount is a demo class for simulation a bank account

  just for teaching ...
'''
class BankAccount:
    ''' simple bank account class

        simulates deposit, withdraw, get_balance, transfer
    
        Attributes:
            * balance - amount in the account
        
    '''
    def __init__(self, balance):
        ''' create an account with specified balance '''
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self.balance

    def withdraw(self, amount):
        if amount > self.balance:
            return "Insufficient funds"
        self.balance -= amount
        return self.balance

    def check_balance(self):
        return self.balance

    def transfer(self, other_account, amount):
        if amount > self.balance:
            return "Insufficient funds"
        self.balance -= amount
        other_account.balance += amount
        return self.balance, other_account.balance
