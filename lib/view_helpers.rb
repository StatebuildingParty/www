module ViewHelpers

  def markdown(text)
    options = {
      link_attributes: { target: "_blank", rel: "nofollow" },
      space_after_headers: true,
      fenced_code_blocks: true,
      prettify: true,
      hard_wrap: true
    }

    extensions = {
      autolink: true,
      superscript: true,
      highlight: true,
      no_intra_emphasis: true,
      disable_indented_code_blocks: true
    }

    renderer = Redcarpet::Render::HTML.new(options)
    markdown = Redcarpet::Markdown.new(renderer, extensions)

    markdown.render(text)
  end

end