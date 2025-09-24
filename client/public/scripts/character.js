const renderCharacter = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/characters')
    const data = await response.json()

    const characterContent = document.getElementById('character-content')
    let hero
    hero = data.find(hero => hero.id === requestedID)

    if (hero) {
        document.getElementById('image').src = hero.image
        document.getElementById('name').textContent = hero.name
        document.getElementById('submittedBy').textContent = 'Submitted by: ' + hero.submittedBy
        document.getElementById('pricePoint').textContent = 'Price: ' + hero.pricePoint
        document.getElementById('audience').textContent = 'Great For: ' + hero.audience
        document.getElementById('description').textContent = hero.description
        document.title = `UnEarthed - ${hero.name}`
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Characters Available 😞'
        characterContent.appendChild(message)
    }
}

renderCharacter();