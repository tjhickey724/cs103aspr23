from flask import Flask, \
     flash, redirect, render_template, url_for, \
     request, session
import redis

app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
r = redis.Redis(host='localhost', port=6379, db=0)

@app.route('/')
def index():
    r.set('abc',0)
    session['counter']=0
    if 'username' in session:
        return render_template('index.html',name=session['username'])
    return redirect(url_for('login'))
    

@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        if request.form['username'] != 'admin' or \
                request.form['password'] != 'secret':
            error = 'Invalid credentials'
        else:
            flash('You were successfully logged in')
            session['username']=request.form['username']
            return redirect(url_for('index'))
    return render_template('login.html', error=error)

@app.route('/logout')
def logout():
    session.pop('username')
    flash('user has been logged out')
    return redirect(url_for('index'))

@app.route('/counter')
def counter():
    r.set('abc',1+int(r.get('abc')))
    session['counter'] = 1 + session['counter']
    return render_template('counter.html',\
                           global_counter=int(r.get('abc')),\
                            local_counter=session['counter'])



if __name__=='__main__':
    app.run(debug=True,port=5001)
