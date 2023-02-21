export default  {
    loading: function(loadingElement) {
        loadingDiv = document.createElement('div');
        loadingDiv.classList.add('loading');
        loadingElement.appendChild(loadingDiv);

        window.addEventListener('load', () => {
            loadingDiv.style.display = 'none'
        })
    },
    removeLoading() {
        loadingDiv.remove()
    }
}