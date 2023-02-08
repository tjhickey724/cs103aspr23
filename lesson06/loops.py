def fig1():
    n=10

    for i in range(n):
        #print(' '*(n-i)+'+'+' '*i+'+')
        print(' '*(n-i),end='')
        for j in range(i+2):
            print(j%10,end='')
        for j in range(i,-1,-1):
            print(j%10,end='')
        print()


fig1()

