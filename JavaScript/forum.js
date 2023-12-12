function showEditor() {
            document.getElementById('editor').style.display = 'block';
            document.getElementById('overlay').style.display = 'block';
            resetEditor(); 
        }

        function submitArticle() {
            var title = document.getElementById('title').value;
            var text = document.getElementById('text').value;

            document.getElementById('editor').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';

            createArticle(title, text);
        }

        function createArticle(title, text) {
            var articlesContainer = document.getElementById('articles-container');

            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            var titleElement = document.createElement('h3');
            titleElement.innerText = title;

            var contentElement = document.createElement('div');
            contentElement.classList.add('article-content');
            contentElement.innerHTML = '<p>' + text + '</p>';

            articleDiv.appendChild(titleElement);
            articleDiv.appendChild(contentElement);

            articleDiv.addEventListener('click', function() {
                toggleContent(contentElement);
            });

            articlesContainer.appendChild(articleDiv);
        }

        function toggleContent(contentElement) {
            contentElement.style.display = (contentElement.style.display === 'none' || contentElement.style.display === '') ? 'block' : 'none';
        }

        function closeEditor() {
            document.getElementById('editor').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
        }

        function resetEditor() {
            document.getElementById('title').value = '';
            document.getElementById('text').value = '';
        }