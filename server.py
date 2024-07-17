from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_balance', methods=['POST'])
def get_balance():
    address = request.json['address']
    
    # 受信メッセージのコンソール出力
    print('ウォレットアドレス', address)
    
    return 'temp'

if __name__ == "__main__":
    app.run(debug=True)