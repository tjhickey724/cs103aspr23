'''
simple demo of fixtures for Python program with pytest
'''

import pytest
import sqlite3

@pytest.fixture
def tuples():
    return 
def todo_db(tuples):
    con= sqlite3.connect(os.getenv('HOME')+'/todo.db')
    cur = con.cursor()
    cur.execute('''CREATE TABLE IF NOT EXISTS todo
                    (title text, desc text, completed int)''')
    cur.execute('''insertmany into todo values(?))''',tuples)
    yield cur
    cur.execute('''drop table todo''')

def test_find(todo_db,tuples):
    



