async function fetchMembers() {
    try {
        const response = await fetch('/members');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const members = await response.json();
        console.log('Fetched members:', members);  // Check the fetched members

        const steeringCouncil = document.getElementById('steeringCouncil');
        steeringCouncil.innerHTML = ''; // Clear existing content

        if (members.length === 0) {
            console.warn('No members found.');
        }

        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = "cc flex flex-col gap-8 items-center justify-around text-center w-[260px] ";

            memberCard.innerHTML = `
                <div>
                <div class="box">
                <div class="content">
                    <img src="${member.image}" alt="${member.name}" />
                </div>
            </div>
            <p class="text-xl mt-6 mb-1 font-black">${member.name}</p>
            <p class="text-md ">${member.description}</p>
                </div>
            `;

            steeringCouncil.appendChild(memberCard);
        });
    } catch (error) {
        console.error('Error fetching members:', error);
    }
}

// Call the function to fetch members on page load
fetchMembers();
