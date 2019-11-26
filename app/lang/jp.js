export default {
    index: {
        "auth-sign-in-title": "Seedフレーズでログイン",

        "auth-sign-up-seed-title": "ウォレットを作成する",
        "auth-sign-in-seed-text": "Seedフレーズまたは秘密鍵を入力してください。",
        "auth-sign-in-seed-button": "ログイン",
        "auth-sign-in-key-button": "Keystoreファイルでログイン",

        "auth-sign-up-seed-generate": "Seedフレーズを再生する",
        "auth-sign-up-keystore-generate": "Keystoreファイルを再生する",
        "auth-sign-up-seed-offline": "お使いのデバイスで生成する（Github）"
    },
    common: {
        "page-wallet": "ポートフォリオ",
        "page-convert": "交換所",
        "page-delegation": "デレゲート",
        "page-masternode": "マスターノード",
        "page-coiner": "オリジナルコインを発行",
        "page-buy": "コインをコインを買う",
        "page-account": "アカウント",

        "page-api": "API",
        "page-explorer": "エクスプローラー",
        "page-faq": "よくある質問・お問い合わせ"
    },
    wallet: {
        "address": "私のアドレス",
        "balance": "残高",
        "send-title": "コインを送金する",
        "send-description": "ご友人、ご家族、ビジネスパートナーなど、誰にでもコインを送金可能です。",
        "coin": "コイン",

    },
    form: {
        "amount-error-required": "アドレスを入力してください",
        "wallet-send-address": "アドレス、またはドメインを入力してください",
        "fee": "手数料用コイン",
        "wallet-send-fee-same": "Same as coin to send",
        "wallet-send-fee-base": "ベースコイン",
        "wallet-send-amount": "枚数",
        "coin": "コイン",
        "use-max": "全部",
        "toggle-advanced-mode": "追加機能",
        "message-help": "トランザクションに関する追加情報。ブロックチェーンに保存され、誰でも見ることができるので、ご注意ください。最大1024字まで記入できます。",
        "message": "メッセージ",
        "message-error-max": "Max 1024 symbols",
        "wallet-send-address-error-required": "アドレスを入力してください",
        "wallet-send-button": "送金",

        "coiner-create-price": "初期価格",
        "coiner-create-name" : "コイン名称",
        "coiner-create-name-error-required": "コインの名称を入力して下さい。",
        "coiner-create-name-error-max": "Max 64 letters",
        "coiner-create-name-help": "コインの名前（例　ビットコイン等）を考え、入力してください。コインの名前は最大で６４文字以内に収めるようにしてください。",
        "coiner-create-symbol": "コインのシンボル",
        "coiner-create-amount": "初期発行枚数",
        "coiner-create-reserve": "初期担保",
        "coiner-create-reserve-error-required": "金額を入力してください。",

        "generate-nonce-error-min": "Minimum nonce is 1",
        "checks-issue-nonce-error-required": "Enter nonce",
        "generate-button": "Generate",
        "toggle-simple-mode": "追加機能を隠す",
        "tx-sent": "Tx sent:",
        "generate-result-tx": "Signed tx:",
        "convert-sell-coin-sell": "販売希望コイン",
        "convert-sell-coin-get": "受取希望コイン",
        "convert-buy-coin-spend": "買いたいコイン",
        "coiner-create-crr-error-required": "CRRを入力してください。",
        "coiner-create-crr-error-between": "CRR should be between 10 and 100",
        "coiner-create-crr-help": "固定担保率（Constant Reserve Ratio　CRR）は、新しく作成するオリジナルコインを担保するためのノアトークンの比率を表しています。係数が高いほど、担保比率が高くなり、ボラティリティ（価格変動幅）が低くなります。その逆に、係数が低いと、担保比率が低くなり、ボラティリティー（価格変動幅）が高くなります。比率は10〜100%の範囲内で入力してください。",
        "coiner-create-crr": "固定担保率",
        "coiner-create-button": "作成する",
        "coiner-create-symbol-help": "ティッカーシンボル（例　BTC）を入力してください。ユニークで、アルファベットの大文字で3文字〜10文字の範囲内で作成してください。",
        "coin-error-required": "コインのシンボルを入力してください。",
        "coin-error-min": "Min 3 letters",
        "coin-error-max": "Max 10 letters",
        "convert-sell-fee-same": "Same as coin to sell",
        "convert-sell-confirm-send": "You will send",
        "convert-sell-confirm-receive": "You will get approximately *",
        "submit-confirm-button": "Confirm",
        "convert-sell-amount": "枚数",
        "convert-buy-coin-buy": "買いたいコイン",
        "convert-buy-amount": "枚数",
        "convert-buy-button": "コインを買う",
        "convert-sell-button": "交換する",
        "masternode-stake": "ステーク",
        "masternode-public": "公開鍵またはドメイン",
        "delegation-delegate-button": "デレゲート",
        "delegation-unbond-button": "解除",
        "masternode-stake-error-required": "ステークを入力してください。",
        "convert-confirm-note": "* The result amount depends on the current rate at the time of the exchange and may differ from the above."
    },
    "convert": {
        "sell-description": "売りたいコイン及び枚数を指定してください。",
        "sell-title": "コインを売る",
        "convert-sell-coin-sell": "売りたいコイン",
        "convert-title": "Convert Coins",
        "buy-title": "コインを買う",
        "buy-description": "特定のコインを購入したい場合は、こちらで購入できます。",
    },
    "delegation": {
        "delegate-title": "デレゲート",
        "delegate-description": "バリデーターにデレゲートすることにより、参加の条件に応じて報酬を得ることが可能です",
        "unbond-title" : "解除",
        "unbond-description": "バリデーターにあなたの持ち分をプロセスして欲しくない場合は、解除手続きをすることが可能です。解除プロセスはリクエストが送られてから、30日以内に完了します",
        "reinvest-generate-title": "Delegation Transactions",
        "reinvest-generate-description": "In order to enable automatic delegation, you will first need to generate a batch of transactions. You may do it either on-line or locally (we recommend that you use the second option as it is more secure). If you do it off-line, download the resulting file and proceed to the next step. If you do it on-line, generated transactions will be sent to auto-delegation server automatically.",

    },
    "coiner": {
        "create-title": "コインを作成する",
        "create-description": "あなたのオリジナルコインを作成できます。通貨、セキュリティーもしくはユーティリティートークン、権利用、もしくは投票用トークン等、コインにどのような役割を持たせるかは完全にあなた次第です。",
    },
    "account": {
        "title": "アカウント",
        "address": "アドレス:",
        "mnemonic":"ニーモニックフレーズ：",
        "currency": "通貨：",
        "click-view": "クリックして確認する",
        "": ""
    }
};
