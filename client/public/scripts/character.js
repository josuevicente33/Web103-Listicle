const renderCharacter = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/characters')
    const data = await response.json()

    const characterContent = document.getElementById('character-content')
    let hero
    hero = data.find(hero => hero.id === requestedID)

    if (hero) {
        document.body.classList.add('character-page')

        document.getElementById('image').src = hero.image
        document.getElementById('name').textContent = 'Name: ' + hero.name
        document.getElementById('alias').textContent = 'Alias: ' + hero.alias
        document.getElementById('role').textContent = 'Role: ' + hero.role
        document.getElementById('affiliations').textContent = 'Affiliations: ' + hero.affiliations.join(', ')
        document.getElementById('infoUrl').setAttribute('href', hero.infoUrl)
        document.getElementById('infoUrl').setAttribute('target', '_blank')
        document.title = `Hero - ${hero.name}`
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Character Available 😞'
        characterContent.appendChild(message)
    }
}

renderCharacter();