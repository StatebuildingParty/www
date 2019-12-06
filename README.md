# 台灣基進官網 | Statrbuilding

## Requirements

- Ruby 2.4.1+
- Middleman 4.3+


## 啟動方式

    $ bundle install
    $ middleman server

可在自己電腦 http://127.0.0.1:4567 網址看到畫面


## 寫 最新消息文章

### 指令產生

    $ middleman article "this is a book" -d 2018-10-20

便會在 `source/news` 下產生一個 markdown 檔案，請記得補齊檔頭 frontmatter 資訊。

> 產生的檔案記得使用 -d 給予文章正確的發佈時間

### 手動產生

在 `source/news/` 下產生 markdown 檔案：

- 檔名格式為 yyyy-mm-dd-title.md
- 檔頭需有完整 frontmatter，其中 date 需和上述檔名日期一致
- 因為日期格式是 UTC，請注意不要把時間設定到未來
- frontmatter 欄位請參考 template.html.erb

### Markdown 說明

- 如連結需要另外開分頁請使用 Html ：
`<a href="https://link" target="_blank">linkname</a>
`

- 圖片儲存路徑：
`
source / assets / images / news_page_img / [創建這篇文章的資料夾]
`

- slug 為文章的網址連結，請使用英文空白請用 "-" ex. first-post
- Markdown 文件內如要使用資料夾的圖片，連結為：
`
![圖片名稱](news_page_img/[your post slug]/example.jpg)
`

## 發布方式

    $ bundle exec middleman build
    
build 出來的內容會放在 www/build/，可以利用 [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb/related) 開啟 www/build 在本機端確認網頁沒問題後再部署。
    
    $ middleman deploy


