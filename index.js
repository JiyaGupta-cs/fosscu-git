// Function to fetch the member data from data.json
async function fetchMemberData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching member data:', error);
        return [];
    }
}

// Function to render the member data on the page
async function renderMembers() {
    try {
        const members = await fetchMemberData();

        // Get the container div where the member cards will be displayed
        const steeringCouncil = document.getElementById('steeringCouncil');
        steeringCouncil.innerHTML = ''; // Clear existing content

        if (members.length === 0) {
            console.warn('No members found.');
            return;
        }

        // Loop through each member and create a card for them
        members.forEach(member => {
            // Create a new div element for each member card
            const memberCard = document.createElement('div');
            memberCard.className = "cc flex flex-col gap-8 items-center justify-around text-center w-[260px] rounded-lg p-6 shadow-lg";

            // Define the inner content for each card
            memberCard.innerHTML = `
                <div>
                    <div class="box">
                        <div class="content">
                            <img class="w-24 h-24 rounded-full mx-auto" src="${member.image}" alt="${member.name}" />
                        </div>
                    </div>
                    <p class="text-xl mt-6 mb-1 font-black text-white">${member.name}</p>
                    <p class="text-md text-gray-400">${member.description}</p>
                </div>
            `;

            // Append the new card to the main container
            steeringCouncil.appendChild(memberCard);
        });
    } catch (error) {
        console.error('Error rendering members:', error);
    }
}

// Call the function to fetch and display members when the page loads
document.addEventListener('DOMContentLoaded', renderMembers);
