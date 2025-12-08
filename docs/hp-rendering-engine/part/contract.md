# Part Contract

このドキュメントでは、Contract におけるスキーマ構造と依存関係を説明します。
図で示している各 *Schema は Zod のスキーマ、対応する小文字の名前は z.infer で得られる TypeScript の型を表します。

- 例
  - `configSchema` … `z.ZodType<Config>`
  - `config` … `z.infer<typeof configSchema>`

実線の矢印は「Zod スキーマから TypeScript 型が導出される」関係を、
破線の矢印は「あるスキーマが別のスキーマに依存している（内部で参照している / それを元に構成されている）」関係を表します。

![part-contract](./images/parts/contract.png)

## 1. ルート設定: configSchema / config

### 役割

configSchema は Contract 全体のエントリーポイントとなる設定スキーマです。
レンダリングエンジンに渡されるトップレベルの設定オブジェクトを検証します。

グローバルな設定値

スタイルや属性を解釈するための前提情報

将来的な拡張用のメタ情報 など

### 依存関係

`configSchema` から `config` 型が導出されます。

破線の矢印の通り、`configSchema` は後続の

- `styleSchema`
- `attributeSchema`

をコンポジションで組み合わせて表現している。

## 2. スタイル層: styleSchema / style

### 役割

`styleSchema` は、コンポーネントのスタイル定義を表すスキーマです。

- 色・タイポグラフィ
- スペーシング
- コンポーネントごとのバリエーション など

### 依存関係

styleSchema は下記のスキーマに依存しており、config に応じたスタイル設定を検証します。

- `visualSchema`
- `layoutSchema`

## 3. 属性層: `attributeSchema` / `attribute`

### 役割

attributeSchema は、コンポーネントや要素が持つ 属性（attribute） を検証するためのスキーマです。

- コンポーネント固有の設定値
- ユーザー入力に紐づく値
- DOM 属性やビジネスロジック上のフラグ など

attribute 型は、レンダリング時やビルダー UI から参照される属性の型になります。

## 4. ビジュアル層: `visualSchema` / `visual`

### 役割

`visualSchema` は、画面上の「見た目」を表す論理的な構造を検証するスキーマです。

- コンポーネントの状態に応じた見た目情報
- style や layout・CSS 変数から導かれた「解決済みのビジュアル情報」

`visual` 型は、実際のレンダリングエンジンが参照する最終的なビジュアル表現になります。

## 5. CSS 向けビジュアル層: `visualCssSchema` / `visual`

### 役割

visualCssSchema は、CSS に落とし込むためのビジュアル情報を扱うスキーマです。
visualSchema が論理的なビジュアル・ユーザー指定のスタイルを扱うのに対して、visualCssSchema はより CSS 近い形（クラス名・スタイルオブジェクト・トークンなど）でユーザー入力に左右されないCSSを追加します。

### 依存関係

- `visualCssSchema` は visualSchema に継承により依存しており、ユーザー入力以外のCSSを扱うフィールドを追加します。

## 6. レイアウト層: `layoutSchema` / `layout`

### 役割

layoutSchema は、要素同士の配置やサイズ・ブレークポイントなど、レイアウトに関する情報を検証するスキーマです。

- `top`/`left`/`right`/`bottom` などの配置情報
- ブロック同士の関係
- レスポンシブレイアウト用の設定 など

layout 型はレンダリングエンジン側でのレイアウト計算やビュー構築に利用されます。

## 7. CSS 変数層: `cssVarsSchema` / `cssVars`

### 役割

cssVarsSchema は、テーマやトークンを表現する CSS カスタムプロパティ (--foo-bar 形式の変数) を検証するスキーマです。

- カラーパレット・タイポグラフィ・スペーシングなどのデザイントークン
- 状態ごとのトークン（--button-primary-bg など）

cssVars 型は、実際にスタイル生成で参照する CSS 変数セットになります。

### 依存関係

cssVarsSchema は visualCssSchema と layoutSchema の両方をコンポジションで組み合わせて表現されています。
これにより、レイアウトと CSS ベースのビジュアル表現が同じトークンセットから導出されるようになっています。
