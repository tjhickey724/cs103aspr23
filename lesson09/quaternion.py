'''
    The Quaternion class represents elements of Hamilton's quanterions.

    Quaternions are like complex numbers a+bi
    but they have two more imaginary values j,k with
    i^2 = j^2 = k^2 = ijk = -1
    and ij=k=-ji, jk=i=-kj, ki=j=-ik
    So they have the form a+bi+cj+dk and are associative and non-commutative.

    author: Tim Hickey and chatGPT
    date: 2/5/2023

    reference: https://mathworld.wolfram.com/Quaternion.html

'''
import math

class Quaternion():
    '''
      a quaternion: r+xi+yj+zk  where i,j,k are imaginary and r,a,b,c are real

      Attributes:
        w: the real part
        x: the coefficient of i
        y: the coefficient of j
        z: the coefficiant of k

    '''
    def __init__(self, w, x, y, z):
        self.w = w
        self.x = x
        self.y = y
        self.z = z

    def __str__(self):
        ''' return a readable version in the form r + ai + bj + ck'''
        return f"{self.w} +{self.x}i+ {self.y}j + {self.z}k"

    def __repr__(self):
        ''' return a version that can be used to reconstruct itself, i.e. the constructor '''
        return f"Quaternion({self.w}, {self.x}, {self.y}, {self.z})"

    def __add__(self, other):
        ''' return the sum of this quaternion with the other  q+p'''
        return Quaternion(self.w + other.w, self.x + other.x, self.y + other.y, self.z + other.z)

    def __sub__(self, other):
        ''' return the difference of this quaternion with the other  q-p '''
        return Quaternion(self.w - other.w, self.x - other.x, self.y - other.y, self.z - other.z)

    def __mul__(self, other):
        ''' return the product of this quaternion with the other  q*p '''
        return Quaternion(self.w * other.w - self.x * other.x - self.y * other.y - self.z * other.z,
                          self.w * other.x + self.x * other.w + self.y * other.z - self.z * other.y,
                          self.w * other.y - self.x * other.z + self.y * other.w + self.z * other.x,
                          self.w * other.z + self.x * other.y - self.y * other.x + self.z * other.w)

    def __div__(self, other):
        ''' return the quotient of this quaternion by the other  q/p'''
        return self * other.inverse()

    def __eq__(self, other):
        ''' test for equality q==r'''
        return self.w == other.w and self.x == other.x and self.y == other.y and self.z == other.z

    def __ne__(self, other):
        ''' test for inequality q!=r '''
        return not self == other

    def __abs__(self):
        ''' return the length of q ... abs(q)'''
        return math.sqrt(self.w * self.w + self.x * self.x + self.y * self.y + self.z * self.z)

    def __neg__(self):
        ''' return the negation of q ... -q '''
        return Quaternion(-self.w, -self.x, -self.y, -self.z)

    def __pos__(self):
        ''' return q for the expression +q'''
        return self

    def __nonzero__(self):
        ''' test that q!=0 '''
        return self.w != 0 or self.x != 0 or self.y != 0 or self.z != 0

    def __lt__(self, other):
        ''' test if self < other '''
        return (self.w, self.x, self.y, self.z) < (other.w, other.x, other.y, other.z)

    def inverse(self):
        ''' returns 1/self, assumes self!= 0 '''
        return Quaternion(self.w, -self.x, -self.y, -self.z) / abs(self)

    def conjugate(self):
        ''' (w+ai+bj+ck).conjugate() -> w-ai-bj-ck '''
        return Quaternion(self.w, -self.x, -self.y, -self.z)

    def normalize(self):
        ''' maps self into a unit quaternion, i.e. one of length 1'''
        d = abs(self)
        return Quaternion(self.w/d, self.x/d, self.y/d, self.z/d)

    def to_tuple(self):
        '''
          this converts a quaternion to a tuple
        '''
        return (self.w, self.x, self.y, self.z)

    def to_list(self):
        '''
          this converts a quaternion to a list
        '''
        return [self.w, self.x, self.y, self.z]

    def to_dict(self):
        '''
          this converts a quaternion to a dict
        '''
        return {'w': self.w, 'x': self.x, 'y': self.y, 'z': self.z}


if __name__=='__main__':
    q=Quaternion(0,1,1,1).normalize()
    print("\n\nhere is a purely imaginary quaternion q of length 1, these always square to -1")
    print('q =',q)
    print('q**2 = ',q*q)  # here we show how to multiply quaternions with *
    print('is q < q*q?',q<q*q) # here we test if one quaternion is less than another, component-wise
   