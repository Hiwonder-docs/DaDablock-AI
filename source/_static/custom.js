function initMenu() {
    const alreadyItems = document.querySelector('.toctree-l2.current');
    if (alreadyItems) {
        alreadyItems.classList.remove('current');
        alreadyItems.classList.add('h-current');
    }

    // 事件委托绑定到父级
    const menuContainer = document.querySelector('.wy-menu-vertical > .current');
    menuContainer.addEventListener('click', function(e) {
        const target = e.target.closest('.toctree-l2>a');
        if (target) {
            console.log(1);
            target.parentNode.classList.toggle('h-current');
        }
    });
}

// 根据场景选择执行时机
if (document.readyState === 'complete') {
    initMenu();
} else {
    window.addEventListener('load', initMenu);
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".pdf-panel[data-pdf]").forEach((panel) => {
    const host = panel.querySelector(".pdf-host");

    panel.addEventListener("toggle", () => {
      if (panel.open) {
        if (host.querySelector("iframe")) return;

        const iframe = document.createElement("iframe");
        iframe.src = `${panel.dataset.pdf}#view=FitH`;
        iframe.title = "Assembly Guide PDF";
        iframe.loading = "lazy";
        iframe.style.width = "100%";
        iframe.style.height = "min(850px, 80vh)";
        iframe.style.border = "1px solid #ddd";

        host.replaceChildren(iframe);
      } else {
        // 关闭后销毁 PDF 阅读器，释放浏览器内存
        host.replaceChildren();
      }
    });
  });
});