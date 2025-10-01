const renderCharacters = async () => {
    const response = await fetch('/characters')
    const data = await response.json();
    console.log(data)

    const mainContent = document.getElementById('main-content');
    document.body.classList.add('home-page');

    if (data) {
        data.map(hero => {
            const card = makeHeroCard(hero)
            mainContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Characters Available 😞'
        mainContent.appendChild(message)
    }
}

function mountAddCharacterUI() {
    const fab = document.createElement('a');
    fab.href = '#add-character';
    fab.setAttribute('role', 'button');
    fab.className = 'add-character-fab secondary';
    fab.textContent = '＋ Add Character';
    document.body.appendChild(fab);

    const dlg = document.createElement('dialog');
    dlg.id = 'add-character-dialog';
    dlg.innerHTML = `
        <article>
        <header>
            <strong>Add Character</strong>
            <a href="#" class="close" aria-label="Close"></a>
        </header>
        <form id="add-character-form">
            <label>Name <input name="name" required></label>
            <label>Alias <input name="alias" required></label>
            <label>Role
            <select name="role" required>
                <option value="">Select…</option>
                <option>Vanguard</option>
                <option>Duelist</option>
                <option>Strategist</option>
            </select>
            </label>
            <label>Affiliations (comma-separated)
            <input name="affiliations" placeholder="Avengers, Asgard">
            </label>
            <label>Image URL <input name="image" required placeholder="https://..."></label>
            <label>Info URL <input name="infoUrl" placeholder="https://..."></label>
            <label>Description
            <textarea name="description" rows="3"></textarea>
            </label>
            <footer>
            <button type="submit">Save</button>
            <button type="button" class="secondary" data-cancel>Cancel</button>
            </footer>
        </form>
        </article>`;
    document.body.appendChild(dlg);

    fab.addEventListener('click', (e) => { e.preventDefault(); dlg.showModal(); });
    dlg.querySelector('.close').addEventListener('click', (e) => { e.preventDefault(); dlg.close(); });
    dlg.querySelector('[data-cancel]').addEventListener('click', () => dlg.close());

    dlg.querySelector('#add-character-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const payload = {
            name: fd.get('name').trim(),
            slug: fd.get('name').trim().toLowerCase().replaceAll(/\s+/g, '-').replaceAll(/[^a-z0-9\-]/g, ''),
            alias: fd.get('alias').trim(),
            role: fd.get('role'),
            affiliations: String(fd.get('affiliations') || '').split(',').map(s => s.trim()).filter(Boolean),
            image: fd.get('image').trim(),
            infoUrl: fd.get('infoUrl').trim(),
            description: fd.get('description').trim(),
        };

        const res = await fetch('/characters', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!res.ok) {
            alert('Failed to save character');
            return;
        }
        const newHero = await res.json();

        const card = makeHeroCard(newHero);
        document.getElementById('main-content').prepend(card);

        dlg.close();
        e.target.reset();
    });
}

function makeHeroCard(hero) {
    const card = document.createElement('div')
    card.classList.add('card')

    const topContainer = document.createElement('div')
    topContainer.classList.add('top-container')
    topContainer.style.backgroundImage = `url(${hero.image})`

    const bottomContainer = document.createElement('div')
    bottomContainer.classList.add('bottom-container')

    const name = document.createElement('h3')
    name.textContent = hero.name
    bottomContainer.appendChild(name)

    const link = document.createElement('a')
    link.textContent = 'Read More >'
    link.setAttribute('role', 'button')
    link.href = `/characters/${hero.id}`
    bottomContainer.appendChild(link)

    const deleteLink = document.createElement('button')
    deleteLink.textContent = 'Delete'
    deleteLink.classList.add('delete-link')
    deleteLink.addEventListener('click', async (e) => {
        e.preventDefault();
        if (!confirm(`Are you sure you want to delete ${hero.name}?`)) return;
        const res = await fetch(`/characters/${hero.id}`, { method: 'DELETE' });
        if (!res.ok) {
            alert('Failed to delete character');
            return;
        }
        card.remove();
    });
    bottomContainer.appendChild(deleteLink)


    card.appendChild(topContainer)
    card.appendChild(bottomContainer)
    return card;
}

const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
    window.location.href = '../404.html'
}
else {
    renderCharacters().finally(mountAddCharacterUI);
}