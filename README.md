# rss-ticker-widget
 RSS Ticker

RSS Ticker Widget
このプロジェクトは、RSSフィードをスクロール形式で表示するシンプルなウィジェットです。Notionや他のプラットフォームに埋め込んで使用することができます。

主な特徴
カスタマイズ可能: URLパラメーターを使用して背景色、フォント色、スクロール速度、フォントサイズを設定可能。
クリック可能なリンク: 各フィード項目をクリックして新しいタブで開くことができます。
リアルタイム更新: 1時間ごとにRSSフィードを自動的に更新します。
ロードメッセージ: フィードがロードされるまで「Loading...」メッセージを表示します。
使用方法
1. URLパラメーターでのカスタマイズ
以下のようにURLパラメーターを設定してください：

feed: 表示したいRSSフィードのURL（必須）
bgColor: 背景色（16進数カラーコード）
fontColor: フォント色（16進数カラーコード）
speed: スクロール速度（秒単位）
fontSize: フォントサイズ（ピクセル単位）
例:
https://your-username.github.io/rss-ticker-widget/?feed=https%3A%2F%2Fassets.wor.jp%2Frss%2Frdf%2Freuters%2Ftop.rdf&bgColor=%23000&fontColor=%23FFD700&speed=20&fontSize=32
2. 必要な設定
index.html と widget.js をGitHub Pagesでホストします。
URLをカスタマイズしてウィジェットを埋め込むことができます。
開発者向け情報
言語: JavaScript
依存関係: rss2json API
English
RSS Ticker Widget
This project is a simple widget that displays an RSS feed in a scrolling ticker format. It can be embedded in Notion or other platforms.

Key Features
Customizable: Use URL parameters to set background color, font color, scroll speed, and font size.
Clickable Links: Each feed item is clickable and opens in a new tab.
Real-Time Updates: Automatically refreshes the RSS feed every hour.
Loading Message: Displays a "Loading..." message until the feed is ready.
How to Use
1. Customize with URL Parameters
Set the following URL parameters:

feed: The URL of the RSS feed to display (required).
bgColor: Background color (hex color code).
fontColor: Font color (hex color code).
speed: Scroll speed (in seconds).
fontSize: Font size (in pixels).
Example:
https://your-username.github.io/rss-ticker-widget/?feed=https%3A%2F%2Fassets.wor.jp%2Frss%2Frdf%2Freuters%2Ftop.rdf&bgColor=%23000&fontColor=%23FFD700&speed=20&fontSize=32
2. Required Setup
Host the index.html and widget.js files on GitHub Pages.
Embed the widget using the customized URL.
Developer Information
Language: JavaScript
Dependency: rss2json API
