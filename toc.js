// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="230920.html"><strong aria-hidden="true">1.</strong> 绪论1</a></li><li class="chapter-item expanded "><a href="230922.html"><strong aria-hidden="true">2.</strong> 绪论2</a></li><li class="chapter-item expanded "><a href="230927.html"><strong aria-hidden="true">3.</strong> 状态空间与搜索技术</a></li><li class="chapter-item expanded "><a href="231008.html"><strong aria-hidden="true">4.</strong> 图搜索策略</a></li><li class="chapter-item expanded "><a href="231011.html"><strong aria-hidden="true">5.</strong> 问题规约表示和搜索策略</a></li><li class="chapter-item expanded "><a href="231013.html"><strong aria-hidden="true">6.</strong> 优化算法 &amp;&amp; 知识表示1</a></li><li class="chapter-item expanded "><a href="231020.html"><strong aria-hidden="true">7.</strong> 知识表示2</a></li><li class="chapter-item expanded "><a href="231025.html"><strong aria-hidden="true">8.</strong> 机器学习1</a></li><li class="chapter-item expanded "><a href="231027.html"><strong aria-hidden="true">9.</strong> 机器学习2</a></li><li class="chapter-item expanded "><a href="231103.html"><strong aria-hidden="true">10.</strong> 机器学习算法1</a></li><li class="chapter-item expanded "><a href="231115.html"><strong aria-hidden="true">11.</strong> 机器学习算法</a></li><li class="chapter-item expanded "><a href="231122.html"><strong aria-hidden="true">12.</strong> 深度学习</a></li><li class="chapter-item expanded "><a href="231124.html"><strong aria-hidden="true">13.</strong> 神经网络</a></li><li class="chapter-item expanded "><a href="231201.html"><strong aria-hidden="true">14.</strong> 上机课</a></li><li class="chapter-item expanded "><a href="231206.html"><strong aria-hidden="true">15.</strong> 上机课—卷积神经网络</a></li><li class="chapter-item expanded "><a href="231208.html"><strong aria-hidden="true">16.</strong> RNN循环神经网络</a></li><li class="chapter-item expanded "><a href="231212.html"><strong aria-hidden="true">17.</strong> RNN上机作业</a></li><li class="chapter-item expanded "><a href="231213.html"><strong aria-hidden="true">18.</strong> 计算机视觉上机课</a></li><li class="chapter-item expanded "><a href="231215.html"><strong aria-hidden="true">19.</strong> 神经网络上机作业</a></li><li class="chapter-item expanded "><a href="231219.html"><strong aria-hidden="true">20.</strong> 自然语言处理上机课1</a></li><li class="chapter-item expanded "><a href="231220.html"><strong aria-hidden="true">21.</strong> 自然语言处理上机课2</a></li><li class="chapter-item expanded "><a href="final-exam-review1.html"><strong aria-hidden="true">22.</strong> 期末复习笔记1</a></li><li class="chapter-item expanded "><a href="final-exam-review2.html"><strong aria-hidden="true">23.</strong> 期末复习笔记2</a></li><li class="chapter-item expanded "><a href="final-exam-review3.html"><strong aria-hidden="true">24.</strong> 期末复习笔记3</a></li><li class="chapter-item expanded "><a href="final-exam-review4.html"><strong aria-hidden="true">25.</strong> 期末复习笔记4</a></li><li class="chapter-item expanded "><a href="final-exam-review5.html"><strong aria-hidden="true">26.</strong> 期末复习笔记5</a></li><li class="chapter-item expanded "><a href="final-exam-review6.html"><strong aria-hidden="true">27.</strong> 期末复习笔记6</a></li><li class="chapter-item expanded "><a href="final-exam-review7.html"><strong aria-hidden="true">28.</strong> 期末复习笔记7</a></li><li class="chapter-item expanded "><a href="final-exam-review8.html"><strong aria-hidden="true">29.</strong> 期末复习笔记8</a></li><li class="chapter-item expanded "><a href="final-exam-review9.html"><strong aria-hidden="true">30.</strong> 期末复习笔记9</a></li><li class="chapter-item expanded "><a href="final-exam-review10.html"><strong aria-hidden="true">31.</strong> 期末复习笔记10</a></li><li class="chapter-item expanded "><a href="final-exam-review11.html"><strong aria-hidden="true">32.</strong> 期末复习笔记11</a></li><li class="chapter-item expanded "><a href="final-exam-review12.html"><strong aria-hidden="true">33.</strong> 期末复习笔记12</a></li><li class="chapter-item expanded "><a href="final-exam-review13.html"><strong aria-hidden="true">34.</strong> 期末复习笔记13</a></li><li class="chapter-item expanded "><a href="final-exam-review14.html"><strong aria-hidden="true">35.</strong> 期末复习笔记14</a></li><li class="chapter-item expanded "><a href="final-exam-review15.html"><strong aria-hidden="true">36.</strong> 期末复习笔记15</a></li><li class="chapter-item expanded "><a href="final-exam-review16.html"><strong aria-hidden="true">37.</strong> 期末复习笔记16</a></li><li class="chapter-item expanded "><a href="final-exam-points.html"><strong aria-hidden="true">38.</strong> 期末复习资料</a></li><li class="chapter-item expanded "><a href="final-exam-review.html"><strong aria-hidden="true">39.</strong> 期末考试回顾</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
