from quaternion import Quaternion
from vector3 import Vector3
import math

class Q_Rotation(Quaternion):
    '''
        3d rotations implemented as quaternions
        
        this adds the rotation method to quaternions
        and it uses the multiplication of quaternions 
        to define composition of rotations
    '''

    def __init__(self,w,x,y,z):
        ''' call the parent constructor '''
        super().__init__(w,x,y,z)
    
    @staticmethod
    def rotation(angle,x,y,z):
        ''' return a rotation of angle degrees around axis (x,y,z) 

            this is a static method called as
            r = Q_Rotation.rotation(45,0,1,0) 
        '''
        radians = angle/180*math.pi
        c = math.cos(radians/2)
        s = math.sin(radians/2)
        d = math.sqrt(x*x+y*y+z*z)
        return Q_Rotation(c,s*x/d,s*y/d,s*z/d)

    def __mul__(self,other):
        ''' multiply two rotations, by viewing them as quaternions 
            although Q_Rotation inherits the __mul__ method, that method
            returns Quaternions, not Q_Rotations so we have to manually coerce!   
        '''
        q = super().__mul__(other)
        return Q_Rotation(q.w,q.x,q.y,q.z)
    
    def rotate(self,v):
        ''' rotate the vector v using the quaternion rotation formula '''
        q1 = Quaternion(0,v.x, v.y, v.z)
        q2 = self * q1 * self.conjugate()
        return Vector3(q2.x, q2.y, q2.z)
    

if __name__=='__main__':
    print('demo of using Q_Rotations to rotate a 3-vector t degrees around an axis (a,b,c) of rotation')
    v = Vector3(1,2,3)
    q = Q_Rotation.rotation(45,0,1,0)
    print(q.rotate(v))
    print((q*q*q*q).rotate(v))

