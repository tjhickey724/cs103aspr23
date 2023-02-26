from vector3 import Vector3
# Here are the tests written without pytest
def test_u():
    v=Vector3(1,2,3)
    w=Vector3(-5,1,1)
    u = v.add(w).mul(10)
    assert u.a==-40
    assert u.b == 30
    assert u.c == 40
    assert u =Vector3(-40,30,40)
# v=Vector3(1,2,3)
# w=Vector3(-5,1,1)
# u = v.add(w).mul(10)
# x= v.dot(w)
# print('v=',v)
# print('w=',w)
# print('u=',u)
# print('x=',x)
# which were supposed to have produced the following output ..

# v= (1.000000,2.000000,3.000000)
# w= (-5.000000,1.000000,1.000000)
# u= (-40.000000,30.000000,40.000000)
# x= 0