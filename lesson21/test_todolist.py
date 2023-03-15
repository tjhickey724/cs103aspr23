'''
simple demo of fixtures for Python program with pytest
use to test the TodoList class 
'''

import pytest
import sqlite3
from todolist3 import TodoList, to_dict, tuples_to_dicts


@pytest.fixture
def tuples():
    " create some tuples to put in the database "
    return [("test1", "run test0", 0), 
            ("test2", "run test1", 1)
           ]

@pytest.fixture
def returned_tuples(tuples):
    " add a rowid to the beginning of each tuple "
    return [(i+1,)+tuples[i] for i in range(len(tuples))]

@pytest.fixture
def returned_dicts(tuples):
    " add a rowid to the beginning of each tuple "
    return tuples_to_dicts([(i+1,)+tuples[i] for i in range(len(tuples))])

@pytest.fixture
def todo_path(tmp_path):
    yield tmp_path / 'todo.db'

@pytest.fixture(autouse=True)
def todolist(todo_path,tuples):
    "create and initialize the todo.db database in /tmp "
    con= sqlite3.connect(todo_path)
    cur = con.cursor()
    cur.execute('''CREATE TABLE IF NOT EXISTS todo
                    (title text, desc text, completed int)''')
    for i in range(len(tuples)):
        cur.execute('''insert into todo values(?,?,?)''',tuples[i])
    # create the todolist database
    con.commit()
    td = TodoList(todo_path)
    yield td
    cur.execute('''drop table todo''')
    con.commit()


def test_selectAll(todolist,returned_dicts):
    td = todolist
    results = td.selectAll()
    expected = returned_dicts
    assert results == expected
  
def test_selectActive(todolist,returned_dicts):
    td = todolist
    results = td.selectActive()
    expected = [d for d in returned_dicts if d['completed']==0]
    assert results == expected

def test_selectCompleted(todolist,returned_dicts):
    td = todolist
    results = td.selectCompleted()
    expected = [d for d in returned_dicts if d['completed']==1]
    assert results == expected

def test_add(todolist,returned_dicts):
    td = todolist
    tuple = (len(returned_dicts)+1,'test','write add test',1)
    todolist.add(to_dict(tuple))
    results = td.selectAll()
    assert results[-1] == to_dict(tuple)

def test_delete(todolist,returned_dicts):
    td = todolist
    td.delete(1)
    results = td.selectAll()
    expected = returned_dicts
    assert results == expected[1:]

def test_set_complete(todolist,returned_dicts):
    td = todolist
    td.setComplete(1) 
    results = td.selectActive()
    assert results==[]




    



