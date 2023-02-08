'''
a general rigid body rotation in 3 dimensions

this implements 3D rotations using Quaternionic conjugation
to calculate the Rodriguez Rotation formula in 3d
and it uses quaternion multiplication to compose rotations
'''

import math
from quaternion import Quaternion
from vector3 import Vector3



class Rotation_3d():
    '''
        this represents rotations in 3d space

        by specifying a vector to rotate around (the axis of rotation) (x,y,z)
        and the angle to rotate around that vector
        (counter clockwise looking down the vector)

        The rotations are represented by a quaternion
        and the rotation is performed by a conjugation v' = q*v*q'
        where v is a pure imaginary quaternion and v' is its rotation.

        Attributes:
            q: the unit quaternion of the form (c,s*a,s*b,s*c)
            where c=cos(2t), s=sin(t2) and
            the rotation is t degrees around the axis of rotation (a,b,c)
    '''
    def __init__(self,q=Quaternion(1,0,0,0)):
        ''' initialize the rotation with the identity quaternion, or some other one'''
        self.q=q

    def set_rotation(self,angle,x,y,z):
        ''' create a rotation of angle degrees around axis (x,y,z)
            and use that to form a unit quaternion
            This is a factory method .. it creates an object, but isn't a constructor.
        '''
        radians = angle/180*math.pi
        c = math.cos(radians/2)
        s = math.sin(radians/2)
        d = math.sqrt(x*x+y*y+z*z)
        self.q = Quaternion(c,s*x/d,s*y/d,s*z/d)
        return self

    @staticmethod
    def rotation(angle,x,y,z):
        ''' return a rotation of angle degrees around axis (x,y,z)

            this is a static method called as
            r = Rotation_3d.rotation(45,0,1,0)
        '''
        radians = angle/180*math.pi
        c = math.cos(radians/2)
        s = math.sin(radians/2)
        d = math.sqrt(x*x+y*y+z*z)
        return Rotation_3d(Quaternion(c,s*x/d,s*y/d,s*z/d))

    def __str__(self):
        ''' print a rotation by finding the angle
            and unit vector in 3d space from the quaternion '''
        angle = math.acos(self.q.w)
        s=math.sin(angle)
        if s!=0:
            return f'{2*angle/math.pi*180} degrees around({self.q.x/s},{self.q.y/s},{self.q.z/s}).'
        return 'identity rotation'

    def __mul__(self, other):
        ''' compose two rotations by multiplying their quaternions !! '''
        return Rotation_3d(self.q*other.q)

    def rotate(self,vector):
        ''' rotate a vector around an axis by conjugating it with the rotation quaternion '''
        v = Quaternion(0,vector.x,vector.y,vector.z)
        q1 = self.q*v*self.q.conjugate()
        return Vector3(q1.x,q1.y,q1.z)

def test_code():
    ''' this demo shows how to use quaternions to rotate vectors with quaternion conjugation '''

    print('rotate v=(1,2,3) by 120 degrees around (1,1,1) three times to get w1, w2, and w3')
    v = Vector3(1,2,3)
    r = Rotation_3d.rotation(120,1,1,1)  # here we use a static method to create a rotation object
    w1 = r.rotate(v)
    w2 = r.rotate(w1)
    w3 = r.rotate(w2)
    print('rotation=',r)
    print('v=',v)
    print('w1=',w1)
    print('w2=',w2)
    print('w3=',w3)
    print()

    print('rotate (1,1,1) 180 degrees around the y axis to get (-1,1,-1)')
    v = Vector3(1,1,1)
    r = Rotation_3d.rotation(180,0,1,0)
    print(r.rotate(v))
    print()

    print('rotate (1,0,0) 45 degrees counterclockwise around y axis')
    print('to get: (sqrt(1/2),0,-sqrt(1/2))')
    print(Rotation_3d.rotation(45,0,1,0).rotate(Vector3(1,0,0)))
    print()

    print('cube the rotation by 120 around (1,1,1) to get the identity 1+0i+0j+0k')
    r = Rotation_3d.rotation(120,1,1,1)
    print('r^3=',r*r*r)
    print('r^3.q=',(r*r*r).q)

if __name__=='__main__':
    test_code()
