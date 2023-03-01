from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello you wonderful World!</p>"

@app.route('/about')
def about():
    return "<h1>Demo</h1>this is a demo to show how to use flask"


if __name__=='__main__':
    app.run(debug=True,port=5001)
