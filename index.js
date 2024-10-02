
async function fetchMembers() {
    const steeringCouncil = document.getElementById('steeringCouncil');
    const loader = document.getElementById('loader'); // Get the loader element

    loader.style.display = 'flex';

    const categories = ["IT", "CSE", "CSE(AI)", "CSE(AIML)", "CS", "ECE", "ME"];
    const startNumber = 1000;
    const endNumber = 1400;

    const jsonFiles = []; // Create an array to hold the JSON file names

    for (const category of categories) {
        for (let i = startNumber; i <= endNumber; i++) {
            jsonFiles.push(`member/member${category}${i}.json`);
        }
    }

    const maxConcurrentRequests = 5; // Limit the number of concurrent fetch requests
    const validMembers = []; // Array to hold valid member data

    const fetchMember = async (file) => {
        try {
            const response = await fetch(file);
            if (response.ok) {
                const data = await response.json(); // Return the JSON data if the fetch was successful
                validMembers.push(data); // Add valid data to the array
            } else {
                console.warn(`Unable to fetch ${file}: ${response.status}`);
            }
        } catch (error) {
            console.error(`Error fetching ${file}:`, error);
        }
    };

    for (let i = 0; i < jsonFiles.length; i += maxConcurrentRequests) {
        const promises = jsonFiles.slice(i, i + maxConcurrentRequests).map(fetchMember);
        await Promise.all(promises); // Wait for the current batch to complete
    }

    if (validMembers.length === 0) {
        steeringCouncil.innerHTML = '<p>No members found.</p>'; // Optional: display a message if no members are found
    } else {
        validMembers.forEach(data => {
            const memberCard = document.createElement('div');
            memberCard.className = "cc flex flex-col gap-8 items-center justify-around text-center w-[260px] rounded-lg p-6 shadow-lg";

            memberCard.innerHTML = `
                <div>
                    <div class="box">
                        <div class="content">
                            <img class="w-24 h-24 rounded-full mx-auto" src="${data.image}" alt="${data.name}" />
                        </div>
                    </div>
                    <p class="text-xl mt-6 mb-1 font-black text-white">${data.name}</p>
                    <p class="text-md text-gray-400">${data.description}</p>
                </div>
            `;

            steeringCouncil.appendChild(memberCard);
        });
    }

    loader.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', fetchMembers);







