export default  {
    loading: function(loading) {
        loadingDiv = document.createElement('div');
        loadingDiv.classList.add('loading');
        loading.appendChild(loadingDiv);

        window.addEventListener('load', () => {
            loadingDiv.style.display = 'none'
        })
    },
    removeLoading() {
        loadingDiv.remove()
    }
}