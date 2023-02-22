export default  {
    loading: function(loadingAppendTo) {
        loadingDiv = document.createElement('div');
        loadingDiv.classList.add('loading');
        loadingDiv.classList.add('comments-loading');
        loadingAppendTo.appendChild(loadingDiv);

        window.addEventListener('load', () => {
            loadingDiv.style.display = 'none'
        })
    },
    removeLoading() {
        loadingDiv.remove()
    }
}