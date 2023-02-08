'''
    BankAcccount class is a demo for Object Oriented Programming in Python
'''

class BankAccount():
    ''' represents a bank account you can deposit and withdraw from'''
    def __init__(self,name,starting_balance):
        self.name = name
        self.balance = starting_balance
        
    def __str__(self):
        return "["+self.name+","+str(self.balance)+"]"
    
    def get_balance(self):
        return self.balance
    
    def get_name(self):
        return self.name
    
    def deposit(self,amount):
        self.balance += amount
        
    def withdraw(self,amount):
        self.balance -= amount
        
    def transfer(self, account, amount):
        self.balance -= amount
        account.balance += amount

if __name__=='__main__':
    a = BankAccount("John",100)
    b = BankAccount("Jane",200)
    print(a)
    print(b)
    print('transferring 50 from John to Jane')
    a.transfer(b,50)
    print(a)
    print(b)
