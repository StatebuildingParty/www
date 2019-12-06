# require "rails-assets-jquery"
# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :asset_hash, exts: %w(.css .js .jpg .jpeg .png .svg .ico .webp)
activate :gzip
activate :minify_html

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false


# With alternative layout
page '/404.html', layout: false

activate :directory_indexes
page '/404.html', directory_index: false

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

activate :blog do |blog|
  blog.prefix = "news"
  blog.layout = "news-page"
  blog.default_extension = ".md"
  blog.paginate = true
  blog.per_page = 6
  blog.permalink = "{slug}"
  blog.new_article_template = File.expand_path("source/news/template.html.erb", File.dirname(__FILE__))
  blog.publish_future_dated = true
end

activate :syntax
set :markdown_engine, :redcarpet
set :markdown, fenced_code_blocks: true, smartypants: true, line_numbers: true, tables: true

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

require 'lib/view_helpers'
helpers ViewHelpers

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

configure :build do
  activate :minify_css
  activate :minify_javascript
end

activate :deploy do |deploy|
  deploy.deploy_method = :git
  deploy.build_before = false
  deploy.remote = 'git@github.com:StatebuildingParty/www.git'
end

# paths for assets
set :js_dir, 'assets/js'
set :css_dir, 'assets/stylesheets'
set :images_dir, 'assets/images'
