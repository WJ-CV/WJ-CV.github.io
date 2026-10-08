/* 编辑这里即可接入正式链接和 Demo。使用相对于 docs/index.html 的路径。
   未提供的资源保持空字符串，页面会显示 Coming soon，不会生成无效按钮。
   作者名单、单位和 BibTeX 在 index.html；仓库 README 需要单独同步更新。 */
window.LECDRIVE_CONFIG = {
  links: {
    paper: '',       // 例如正式 arXiv URL，或 assets/LECDrive.pdf
    code: '',        // 新仓库创建后填写其 URL
    dataset: 'https://huggingface.co/datasets/wang-jie825/LECDrive/tree/main',     // LECDrive 的数据链接，不沿用 VGGDrive 的下载地址
    checkpoints: 'https://huggingface.co/wang-jie825/LECDrive'
  },
  demos: [
    { alt: 'LECDrive driving demonstration 1', src: 'assets/demos/1.gif', type: 'image' },
    { alt: 'LECDrive driving demonstration 2', src: 'assets/demos/1_1.gif', type: 'image' },
    { alt: 'LECDrive driving demonstration 3', src: 'assets/demos/1-2.gif', type: 'image' },
    { alt: 'LECDrive driving demonstration 4', src: 'assets/demos/9-1.gif', type: 'image' }
  ]
};
