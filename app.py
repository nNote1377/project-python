from flask import Flask, render_template, request
import subprocess

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/run', methods=['POST'])
def run_code():
    code = request.form['code']
    result = run_python_code(code)
    return result

def run_python_code(code):
    try:
        result = subprocess.check_output(['python', '-c', code], stderr=subprocess.STDOUT, text=True)
        return result
    except subprocess.CalledProcessError as e:
        return e.output

if __name__ == '__main__':
    app.run(debug=True)
