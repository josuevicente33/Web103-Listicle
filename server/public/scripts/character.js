const renderCharacter = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/characters')
    const data = await response.json()

    const characterContent = document.getElementById('character-content')
    let gift
    gift = data.find(gift => gift.id === requestedID)

    if (gift) {
        document.getElementById('image').src = gift.image
        document.getElementById('name').textContent = gift.name
        document.getElementById('submittedBy').textContent = 'Submitted by: ' + gift.submittedBy
        document.getElementById('pricePoint').textContent = 'Price: ' + gift.pricePoint
        document.getElementById('audience').textContent = 'Great For: ' + gift.audience
        document.getElementById('description').textContent = gift.description
        document.title = `UnEarthed - ${gift.name}`
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Characters Available 😞'
        characterContent.appendChild(message)
    }
}

renderCharacter();