<!-- <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // フォームのデータを取得
        $name = htmlspecialchars($_POST['name']);
        $furigana = htmlspecialchars($_POST['furigana']);
        $email = htmlspecialchars($_POST['email']);
        $message = htmlspecialchars($_POST['message']);

        // メールの内容を設定
        $to = "ichijo.chitose.virtue@gmail.com"; // 送信先のメールアドレス
        $subject = "お問い合わせ内容";
        $body = "名前: $name\フリガナ: $furigana\nメール: $email\nメッセージ:\n$message";
        $headers = "From: $email";

        // メールを送信
        if (mail($to, $subject, $body, $headers)) {
            echo "メッセージが送信されました。";
        } else {
            echo "メッセージの送信に失敗しました。";
        }
    } else {
        echo "不正なリクエストです。";
    }
?> -->