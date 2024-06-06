const html = `
<header class="header">
    <a href="/index.html" class="logo">MindX</a>
    <div class="header-right a-tag-nav">
        <a class="active" href="./show-category.html ">Danh mục</a>
    </div>
    <div class="header-right a-tag-nav">
        <a class="active" href="./create-new-category.html ">Tạo Danh mục</a>
    </div>
</header>
`

const header = {
    html, selector: '#header-section'
}
export { header }