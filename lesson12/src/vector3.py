class Vector3():
    def __init__(self,a,b,c):
        self.a=a
        self.b=b
        self.c=c

    def __eq__(self,other):
        return self.a==other.a and self.b==other.b and self.c==other.c

    
    def add(self,other):
        return Vector3(self.a+other.a, self.b+other.b,self.c+other.c)

    def mul(self,k):
        return Vector3(self.a*k, self.b*k,self.c*k)

    def dot(self,other):
        return self.a*other.a+self.b*other.b+self.c*other.c

    def __str__(self):
        return "(%f,%f,%f)"%(self.a,self.b,self.c)
