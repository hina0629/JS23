// 同期(ブロッキング)
// 実行中は、ファイルの読み込み完了まで処理が止まる
// コールバックは不要、戻り値に結果が入る
// 推奨用途：簡単なスクリプトや初期化処理

/**
 * モジュール読み込み（CommonJS）
 */
// TODO: fs モジュールを読み込む: CommonJS形式

// TODO: path モジュールを読み込む: CommonJS形式

/**
 * ファイル読み込み処理
 */
// TODO: 現在のディレクトリパスから、data/products.json を指定
const filePath = "";

// 1) 最初に実行
console.log("📖 ファイル読み込み開始（同期）...");

try {
    // 2) 同期でファイル読み込み
    // TODO: readFileSync(パス, 文字コード)
    const data = {};

    // 3) 読み込み完了後に実行
    show(data);

    // 4) ファイル内容表示後に実行
    console.log("⚙️ ファイル読み込み完了！");
} catch (error) {
    console.error("❌ ファイル読み込みエラー");
}

/**
 * ファイル読み込み
 */
function show(data) {
    // JSONをオブジェクトに変換
    const products = JSON.parse(data);
    if (!products) {
        console.error("❌ ファイル読み込みエラー");
        process.exit(1);
    }
    // 内容表示
    console.table(products);
}