export default  {
    loading: function(loadingAppendTo) {
        loadingDiv = document.createElement('div');
        loadingDiv.classList.add('loading');
        loadingAppendTo.appendChild(loadingDiv);

        window.addEventListener('load', () => {
            loadingDiv.style.display = 'none'
        })
    },
    removeLoading() {
        loadingDiv.remove()
    }
}