from quaternion import Quaternion
import pytest

def test_repr():
    ''' constructor should create a printable object '''
    t_quat = Quaternion(1,2,3,4)
    expected = 'Quaternion(1, 2, 3, 4)'
    assert t_quat.__repr__()==expected

def test_add():
    q1 = Quaternion(1,2,3,4)
    q2 = Quaternion(2,4,6,8)
    q3 = Quaternion(3,6,9,12)
    assert q1+q2==q3

def test_mul():
    q1 = Quaternion(0,1,2,3)
    q2 = Quaternion(0,-1,-2,-3)
    expected =Quaternion(14,0,0,0)
    assert q1*q2==expected

def test_conjugate():
    q1 = Quaternion(0,1,2,3)
    q2 = Quaternion(0,-1,-2,-3)
    assert q1.conjugate()==q2

# def test_mul():
#     q1 = Quaternion(0,1,2,3)
#     q2 = Quaternion(0,-1,-2,-3)
#     expected =Quaternion(14,0,0,0)
#     assert q1.conjugate()==q2
#     assert q1*q2==expected

def test_to_dict():
    q1 = Quaternion(2,7,1,8)
    expected = {'w':2,'x':7,'y':1,'z':8}
    assert q1.to_dict()==expected

def test_div_by_zero():
    q1 = Quaternion(1,0,0,0)
    q0 = Quaternion(0,0,0,0)
    with pytest.raises(Exception):
        q = q1/q0

def test_normalize_zero():
    q0 = Quaternion(0,0,0,0)
    with pytest.raises(Exception):
        q = q0.normalize()
