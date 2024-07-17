document.getElementById('wallet-balance-form').addEventListener('submit',async(event) => {
    // フォームの送信をキャンセルする
    event.preventDefault()
    // 入力されたアドレスを取得する
    const addressInput = document.getElementById('wallet-addr').value

    try {
        // サーバにウォレットアドレスを送信する
        const serverResponse = await fetch('/get_balance', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ address: addressInput }),
        })
    } catch(err) {
        console.error(err)
        document.getElementById('output').style.display = 'none'
        alert('通信エラーが発生しました。もう一度お試しください。')
    }
})