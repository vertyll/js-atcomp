const saveFilterSettings = () => {
    let path = window.location.pathname.substring(1)
    for (inputName in filterInputs) {
        if (filterInputs[inputName].type != 'button') {
            localStorage.setItem(`${path}::${inputName}`, form[inputName].value)
        }
    }
}

window.addEventListener('beforeunload', () => {
    saveFilterSettings()
})

const resetFilterForm = () => {
    for (let inputName in filterInputs) {
        if (filterInputs[inputName].type != 'button') {
            form[inputName].value = filterInputs[inputName].defaultValue
        }
    }
    localStorage.clear()
}

const buildFilter = (inputs) => {

    filterInputs = inputs

    let filterContainer = document.querySelector('.filter-container')
    let filterForm = document.createElement('form')
    filterContainer.appendChild(filterForm)
    filterForm.name = 'filterForm'
    filterForm.classList.add('filter-form')

    for (let inputName in inputs) {
        let formItem = document.createElement('div')
        filterForm.appendChild(formItem)
        formItem.classList.add('input-wrap-filter')

        if (inputs[inputName].type != 'button') {
            let labelForInput = document.createElement('label')
            formItem.appendChild(labelForInput)
            labelForInput.htmlFor = inputName
            labelForInput.innerText = inputs[inputName].label
        }
        let filterFormElement = document.createElement(inputs[inputName].type)
        formItem.appendChild(filterFormElement)

        filterFormElement.classList.add('input-name')
        filterFormElement.name = inputName

        if (inputs[inputName].type == 'button') {
            filterFormElement.innerText = inputs[inputName].body
            filterFormElement.type = 'button'
            if (inputs[inputName].btnFunction) {
                filterFormElement.addEventListener('click', inputs[inputName].btnFunction)
            }
        } else if (inputs[inputName].type == 'input') {
            filterFormElement.type = inputs[inputName].inputType
        }
    }
    form = document.forms['filterForm']
    let path = window.location.pathname.substring(1)
    for (inputName in filterInputs) {
        if (filterInputs[inputName].type != 'button') {
            if (localStorage.getItem(`${path}::${inputName}`)) {
                form[inputName].value = localStorage.getItem(`${path}::${inputName}`)
            }
        }
    }
    return filterForm
}

const selectFilter = (filter) => {    

    let filterData = filter

    let filterKeys = {}

    for (let inputName in filterInputs) {
        filterKeys[inputName] = form[inputName].value
        const filterKey = filterInputs[inputName].filterKey
        const formType = form[inputName].type
        if (formType == 'text') {
            if (filterKeys[inputName]) {
                filterData = filterData.filter((rows) => {
                    return rows[filterKey].includes(filterKeys[inputName])
                })
            }
        } else if (formType == 'number') {
            if (filterKeys[inputName]) {
                filterData = filterData = filterData.filter((rows) => {
                    return rows[filterKey] == filterKeys[inputName]
                })
            }
        }
    }
    return filterData
}

export {
    buildFilter,
    selectFilter,
    resetFilterForm,
    saveFilterSettings
}