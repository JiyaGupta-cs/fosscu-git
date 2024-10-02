
const membersData = [
    {
        "name": "John Doe",
        "description": "Frontend Developer",
        "image": "https://via.placeholder.com/100",
    },
    {
        "name": "Jane Smith",
        "description": "Backend Developer",
        "image": "https://via.placeholder.com/100",
    },
    {
        "name": "Alice Johnson",
        "description": "Full Stack Engineer",
        "image": "https://via.placeholder.com/100",
    }
];

// Function to render the member data on the page
async function fetchMembers() {
    try {
        // Simulating fetching the data (replace with actual fetch API call if needed)
        const members = membersData;

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
            memberCard.className = "cc flex flex-col gap-8 items-center justify-around text-center w-[260px] bg-gray-900 rounded-lg p-6 shadow-lg";

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
        console.error('Error fetching members:', error);
    }
}

// Call the function to fetch and display members when the page loads
document.addEventListener('DOMContentLoaded', fetchMembers);

