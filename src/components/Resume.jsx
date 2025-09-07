const Resume = () => {
  return (
    <section id="resume" className="resume section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>プロフィール</h2>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">プロフィール</h3>

            <div className="resume-item pb-0">
              <h4>自己紹介</h4>
              <p><em>CMS, MERN Stackを用いた堅牢なウェブサービスの構築に加え、React NativeやFlutterを活用したクロスプラットフォーム対応のモバイルアプリも開発しています。また、PythonやTensorFlow、PyTorchを使った機械学習・人工知能のモデル開発・API統合にも強みがあります。ユーザー体験を重視したレスポンシブなUI設計から、高性能でスケーラブルなバックエンド、さらに最先端のAI技術までを駆使し、効率的かつ高品質なエンドツーエンドソリューションを提供します。</em></p>
            </div>

            <h3 className="resume-title">学歴</h3>
            <div className="resume-item">
              <h4>サイバー大学</h4>
              <h5>2014年4月 - 2018年4月</h5>
              <p><em>卒業論文：「AIによるユーザ行動予測を活用したパーソナライズ対応レスポンシブウェブサイトの設計と実装」<br /></em></p>
              <p>ユーザのアクセス履歴や行動パターンをAIで解析し、最適なコンテンツを自動表示するレスポンシブサイトを構築します。</p>
            </div>

            <h3 className="resume-title">職務経験</h3>
            <div className="resume-item">
              <h4>フリーランス | フルスタックエンジニア</h4>
              <h5>2021年11月 〜 現在</h5>
              <ul>
                <li>クライアントのブランディングに合わせたレスポンシブWordPressサイトの構築およびテーマカスタマイズを担当。<br /></li>
                <li>高いコンバージョンを実現するランディングページの作成と、WooCommerceストアの売上向け最適化を実施。<br /></li>
                <li>FigmaやPSDデザインをピクセル精度で再現し、SEO対策を施した高速表示のWordPressサイトに変換。<br /></li>
                <li>複雑な業務フローに対応するスケーラブルなMERNスタックアプリケーションを、ReactのフロントエンドとNode.jsのバックエンドで開発。<br /></li>
                <li>安全な認証機能の実装や、カスタムダッシュボード、API連携のシームレスな統合を行う。<br /></li>
                <li>徹底したテストとデバッグを実施し、信頼性が高くユーザーフレンドリーなデジタルソリューションを提供。<br /></li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: '80px' }} className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="resume-item">
              <h4>モバイルアプリ開発者</h4>
              <h5>2020年9月 〜 2021年10月</h5>
              <ul>
                <li>React NativeおよびFlutterを用いて、クライアントのブランドイメージを反映したレスポンシブなモバイルアプリケーションの開発に携わる。<br /></li>
                <li>FigmaやAdobe XDのデザインデータを参照し、ピクセルパーフェクトなUIを実装し、ユーザー体験の最適化を図る。<br /></li>
                <li>クロスプラットフォーム対応のモバイルアプリ機能を開発し、iOS・Android両環境での動作検証を実施。<br /></li>
                <li>RESTful APIやGraphQLを利用したバックエンドとのシームレスなデータ連携を実装。<br /></li>
                <li>状態管理（Redux、Providerなど）を活用し、スムーズで効率的な画面遷移・データ操作を実現。<br /></li>
                <li>ユニットテストやエンドツーエンドテストを実施し、バグの早期発見・修正に努め、信頼性の高いモバイルアプリを提供。<br /></li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>初心者のWeb・AI開発者</h4>
              <h5>2018年7月 〜 2020年8月</h5>
              <ul>
                <li>PythonおよびJavaを用いた機械学習モデルの開発およびチューニングに従事。画像分類や自然言語処理（NLP）分野のプロジェクトに参加。<br /></li>
                <li>データ前処理から特徴量エンジニアリングまで一貫して担当し、高精度な予測モデルの構築を実現。<br /></li>
                <li>TensorFlowやscikit-learnなどのライブラリを活用し、効率的かつ再現性のあるAIモデル開発環境を整備。<br /></li>
                <li>初心者レベルのReactやHTML/CSSを用いたWEBフロントエンド開発を実施。簡単なインタラクティブUIの構築や、APIとの連携を経験。<br /></li>
                <li>Javaでのバックエンド基礎スキルを活かし、サーバーサイド処理やデータベース接続の簡易実装を担当。<br /></li>
                <li>チームでのコードレビューやGitを用いたバージョン管理に参加し、品質向上と開発効率の維持に貢献。<br /></li>
                <li>小規模プロジェクトにおいて、要件定義～基本設計～実装まで一通りの開発工程を経験し、基礎的なWebアプリケーション開発スキルを習得。<br /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
