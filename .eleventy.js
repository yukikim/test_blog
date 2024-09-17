module.exports = function (eleventyConfig) {

    eleventyConfig.addFilter("dateFormat", function (value) {
        const Year = value.getFullYear();
        const Month = (parseInt(value.getMonth()) + 1).toString().padStart(2, "0");
        const Date = value.getDate().toString().padStart(2, "0");
        return `${Year}-${Month}-${Date}`;
    })

    // Set directories to pass through to the _site folder
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy("src/styles/");
    eleventyConfig.addPassthroughCopy("src/js/");

    // Watch scss folder for changes
    eleventyConfig.addWatchTarget("/src/assets/");
    eleventyConfig.addWatchTarget("/src/styles/");
    eleventyConfig.addWatchTarget("/src/js/");

    return {
        // 入力ディレクトリの設定
        // 出力ディレクトリはデフォルトの _site/
        dir: {
            input: "src",
        },
        // Markdown, HTMLのテンプレートエンジンをNunjucksに変更
        // デフォルトはliquid
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk"
    };

};
