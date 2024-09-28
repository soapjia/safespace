from flask import Flask, render_template, request
import openai

app = Flask(__name__)

openai.api_key = ''

@app.route("/")
def index():
    return render_template("index.html")

