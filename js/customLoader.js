export default  {
    loading: function(lonpmading) {
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