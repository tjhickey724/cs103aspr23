'''
  Vector 3 is a 3 dimensional vector of floats
'''

class Vector3():
    ''' this represents 3d vectors '''
    def __init__(self,x,y,z):
        ''' store the 3 components in instance variables'''
        self.x=x
        self.y=y
        self.z=z
    
    def __str__(self):
        ''' return a string in the standard form (x,y,z) '''
        return f'({self.x},{self.y},{self.z})'
    
    def __repr__(self):
        ''' return a string in the form of a constructor'''
        return f'(Vector3({self.x},{self.y},{self.z})'

